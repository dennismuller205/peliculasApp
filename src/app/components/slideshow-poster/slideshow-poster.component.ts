import { Component, OnInit , Input} from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[]=[];


   slideOpts = {
    slidesPerView: 1.1,
    freMode: true
  }; 


  constructor() { }

  ngOnInit() {}

}
