import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultGifsComponent } from './result-gifs/result-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
