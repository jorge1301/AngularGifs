import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private historialLista: string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private apiKey: string = 'aP9KC4N0FZ1oFQC7fdzm6IX5nIrBA7XN';
  public listaGifs: Gif[] = [];


  get historial() {
    return [...this.historialLista];
  };



  constructor(private httpClient: HttpClient) {
    this.historialLista = JSON.parse(localStorage.getItem('historialLista')!) || [];
    this.listaGifs = JSON.parse(localStorage.getItem('data')!) || [];
  }

  buscarGifs(query: string): void {
    query = query.trim().toLowerCase();
    const condicionLista: boolean = !this.historialLista.includes(query)
    const condicionVacio: boolean = query.trim().length !== 0;
    if (condicionLista && condicionVacio) {
      this.historialLista.unshift(query);
      this.historialLista = this.historialLista.splice(0, 10);
      localStorage.setItem('historialLista', JSON.stringify(this.historialLista));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);


    this.httpClient.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe(({ data }: SearchGifsResponse) => {
        this.listaGifs = data;
        localStorage.setItem('data', JSON.stringify(data));
      });
  }
}
