import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(public peticion:HttpClient) { }

  consultarHabitaciones():Observable<any>{
    let uri="https://serve20222.herokuapp.com/hotelesnick/habitaciones"

    return this.peticion.get(uri)
   }


}
