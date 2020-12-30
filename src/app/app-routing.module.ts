import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComplainsComponent} from './add-complains/add-complains.component';
import {FetchComplainsComponent} from './fetch-complains/fetch-complains.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'add', component:AddComplainsComponent},
  { path: 'load', component:FetchComplainsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
