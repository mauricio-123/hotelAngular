import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../services/habitacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(public servicio:HabitacionService) {

    this.servicio.consultarHabitaciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
    })
   }


}
