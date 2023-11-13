import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})

export class PromisesComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios)
    })
    //EJEMPLO DE PROMESA, NO SE UTILIZA TANTO ASI
    // const promesa = new Promise( ( resolve, reject ) =>{
    //   if(false){
    //     resolve('Hola Mundo');
    //   }else{
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa
    //   .then((mensaje)=>{
    //   console.log(mensaje);
    //   })
    //   .catch(error => console.log('Error en mi promesa', error));

    // console.log('Fin del Init')
  }

  //Va a un servicio y consigue, trae la informacion de un usuario
  getUsuarios(){

    return new Promise( resolve =>{
      fetch('https://reqres.in/api/users')  
        .then(resp => resp.json()) //respondo otra promesa, lo que me va a permiter collocar otro then
        .then(body => resolve(body.data))

    });


  }
}
