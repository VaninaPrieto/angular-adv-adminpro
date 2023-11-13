import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor(){
    
    // this.retornoObservable().pipe(              //transforma la información que fluye por un observable, tmb ante un error puede hacer que vuleva a intentarlpo
    //   retry()   //Para volver a intentar cuando detecta el error
    // ).subscribe({
    //   next:(data: any) => {
    //     console.log('Subs:', data);                 
    //   },
    //   error:(error: any) => {
    //     console.warn('Error:', error);
    //   },
    //   complete:() => {
    //     console.info('Obs terminado');
    //   }
    //   //Otra forma
    //   // next: value => console.log('Subs:', value), 
    //   // error: err => console.warn('Error', err),
    //   // complete: () => console.info('Obs terminado') 
    // });
    
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)
  
  }


  ngOnDestroy(): void {             //Para terminar el observable cuando salgo del componente en la pag
    this.intervalSubs.unsubscribe();
  }
  
  retornaIntervalo(): Observable<number>{
    
    return interval(100)
            .pipe(
              take(10),                                             //Hata cuantas veces va a mandar la data
              map(data => data +1),                   //el map recibe el argumanto que el observable padre emita
              filter(data => (data % 2 === 0 ) ? true : false),   //true porque el resto es 0 es para y quiero que lo muestre, false porque el resto es 1 es impar y no quiero que se muestre
            );
    
    }
  
  retornoObservable(): Observable<number>{
    let i = -1;
    
    return new Observable<number>(observer =>{                        //(callback que es el cuerpo de lo que quiero que haga el observable)
      
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);                //Para emitir                       
        
        if( i === 4 ){ 
          clearInterval(intervalo);
          observer.complete();
        }
        
        if( i === 2){
          console.log('i = dos ..... error')
          observer.error('i llego al valor de 2');
          clearInterval (intervalo)
        }
        
      }, 1000 )
    
    });
  }

}
