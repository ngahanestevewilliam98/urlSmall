import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  // admin
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
