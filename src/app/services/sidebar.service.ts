import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title:'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title:'Main',
          url:'/'
        },
        {
          title:'Reservas',
          url:'reservas'
        },
        {
          title:'Medicos',
          url:'medicos'
        },
        {
          title:'Recetas',
          url:'recetas'
        },
        {
          title:'Pagos',
          url:'pagos'
        },
        {
          title:'Grafica1',
          url:'grafica1'
        },
        {
          title:'Promesas',
          url:'promesas'
        },
      ]
    }
  ]

  constructor() { }
}
