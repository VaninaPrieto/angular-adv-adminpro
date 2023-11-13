import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$: Subscription;

  constructor( private router : Router){
    
    this.tituloSubs$ = this.getTitulo()    
                        .subscribe(({titulo}) => {
                          console.log(titulo);
                          this.titulo = titulo;
                          document.title = `AdminPro -  ${titulo} ` ; //para que aparezca tmb en el titulo de la ventana
                        });
            //OTRA FORMA ES COMO SIGUE USO, LA DESESTRUCTURACIÓN DEL OBJETO
            //.subscribe( data => {         
            // console.log(data);
            // this.titulo = data['titulo'];
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getTitulo(){     //getArgumentoRutas asi le puso el profe   //EVENT ES UN OBSERVABLE
    return this.router.events        //COLOCO CONSOLE.LLOG(EVENT PARA PODER ENCONTRAR DONDE ESTA LA DATA LUEGO USTILIZO LOS PIPES NECESARIOS PARA EXTRAERLA) this.router.events().subscribe(event => {conosle.log(event)})
    .pipe(                  //ActivationEnd es una instancia del evento
      filter<any>( event => event instanceof ActivationEnd ),
      filter( ( event: ActivationEnd ) => event.snapshot.firstChild === null ),
      map( ( event: ActivationEnd) =>event.snapshot.data) //lo que voy a retornar //Obtengo la DATA
    );
  }


}
