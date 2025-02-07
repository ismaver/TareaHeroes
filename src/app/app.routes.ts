import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";


const APP_ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:' ',pathMatch:'full',redirectTo:'/home'},

  { path: '**', redirectTo: '/home' }
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);