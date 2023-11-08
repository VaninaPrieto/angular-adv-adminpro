import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingService: SettingService){
  }

  ngOnInit(): void { 
    customInitFunctions(); //funcion armada en el assets/js/custom.js para llamar de aqui al codigo que se encuentra ahí
  }

}


