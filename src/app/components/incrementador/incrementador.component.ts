import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})

export class IncrementadorComponent implements OnInit {

  ngOnInit() {
  this.btnClass = `btn ${this.btnClass}`
  }

  //Con el @Input estoy indicando que esta propiedad va a recibir un valor del padre
  @Input('valor') progreso: number = 40;
//Si yo quisiera renombrar la propiedad aqui llamada progreso porque en componente padre ustilizo esa palabra para otra cosa puedo renombrarla:  @Input('valor')
  @Input() btnClass:string = 'btn-primary'
// Si el padre no manda información que la que esta aca la clase en este caso quedaria como primary

// El Ouput tiene un event emiterr es decir es una funcion que el componente padre va a poder ejecutar. Cuando yo llame a lo que coloque en el ouput significa que mi componente esta disparando un evento
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter( );
          //Este método va a recibir como parámetro el valor el cual quiero restar o incrementar


  cambiarValor(valor: number){
    //Le indico que es el boton de restar porque el valor puesto en el parametro en el html es -5 por eso  valor >= 0
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100)
      return this.progreso = 100;
    }
    //Le indico que es el boton de restar porque el valor puesto en el parametro en el html es -5 por eso valor <= 0
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }

    
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    return
  }

  onChange( nuevoValor:number ){

    if(nuevoValor >= 100){
      this.progreso = 100;
    } else if (nuevoValor <= 0){
      this.progreso = 0; 
    }else{
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);

  }
}
