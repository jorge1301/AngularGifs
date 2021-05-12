import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result-gifs',
  templateUrl: './result-gifs.component.html',
  styles: [
  ]
})
export class ResultGifsComponent implements OnInit {
 get resultados() {
   return this.gifsService.listaGifs;
 }
  

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {

  }

}
