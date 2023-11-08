import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private linkTheme = document.querySelector('#theme'); // obtengo la etiqueta del html de estilo donde deberia estar la url del estilo

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';  //obtebgo del local store la url guardado en account-setting
     //Agrego esa url con el color seleccionado y la agrego a la etiqueta html del index    
    this.linkTheme?.setAttribute('href', url);                             //indico el atributo que quiero cambiar del index.html 
  }

  changeTheme(theme: string){
    console.log(theme);                                                   //controlo que capte el color del tema
    const url =  `./assets/css/colors/${theme}.css`                       //agrego en la url el tema que capte
    this.linkTheme?.setAttribute('href',url)                              //indico el atributo que quiero cambiar o agregar, en este caso agregar, del index.html  y en el segundo lugar lo nuevo //al agregarle? le estoy indicando que puede traer un valor nulo
    localStorage.setItem('theme', url);                                   //Giardo en el local store la url con el nombre de estilo seleccionado
    this,this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const linkCheck=  document.querySelectorAll('.selector');              //donde estan todos los temas en account-setting.html
    
    linkCheck.forEach(element => {                                          //element es cada uno de los elementos que esta en el array
      element.classList.remove('working');                                 //Lo recorre y borra la clase warking
      const btnTheme= element.getAttribute('data-theme');                 //obtener un atributo de cada elemento, es decir obtener cual es el tema del boton
      const linkBtnTheme = `./assets/css/colors/${btnTheme}.css`;         //Obtengo una url con el  tema del boton para compararlo con el tema que esta en la url actual seleccionada por el ususario
      const linkThemeActual= this.linkTheme?.getAttribute('href');        //Obtengo la url con el tema actual
      if(linkBtnTheme === linkThemeActual){                               //comparo ese tema del atributo con el tema que esta en la url del atributo (arriba)
        element.classList.add('working');
      }
       // Coloco toda esta funcion del check en la funcion de seleccionar tema: changeTheme
    });
  }

}
