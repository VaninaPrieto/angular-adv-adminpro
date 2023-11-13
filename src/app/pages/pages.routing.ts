import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent, 
        children: [
            { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'}  },
            { path: 'charts', component: Grafica1Component, data: {titulo: 'Gráfica'}  },
            { path: 'account-setting', component: AccountSettingComponent, data: {titulo: 'Ajustes de cuenta'}  },
            { path: 'promises', component: PromisesComponent, data: {titulo: 'Promesas'}  },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'}  },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class PagesRoutingModule{}