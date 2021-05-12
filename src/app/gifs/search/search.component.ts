import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  buscar() {
    this.gifsService.buscarGifs(this.txtSearch.nativeElement.value);
    this.txtSearch.nativeElement.value = '';
  }

  constructor(private gifsService : GifsService) {
  }

}
