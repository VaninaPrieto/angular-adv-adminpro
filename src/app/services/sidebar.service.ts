import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] =[
    {
      titulo:'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: ''},
        {titulo: 'ProgressBar', url: '/dashboard/progress'},
        {titulo: 'Gráficas', url: '/dashboard/charts'},
        {titulo: 'Promises', url: '/dashboard/promises'},
        {titulo: 'Rxjs', url: '/dashboard/rxjs'},
      ]
    }
  ];

  constructor() { }

}
