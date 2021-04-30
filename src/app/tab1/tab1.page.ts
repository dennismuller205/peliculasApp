import { Component, OnInit, } from '@angular/core';
import { MovieService } from '../services/movie.service';
import {  Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] =[];
  populares: Pelicula[] =[];


  constructor( private movieservice: MovieService) {

  }
  ngOnInit() {
    this.movieservice.getFeature()
    .subscribe (resp=>{
      this.peliculasRecientes = resp.results;
    });
    this.movieservice.getPopurares()
    .subscribe(resp =>{
      console.log('Populares', resp);
      this.populares = resp.results;
    });
  }

}
