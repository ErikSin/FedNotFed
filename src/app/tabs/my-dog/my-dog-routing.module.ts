import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDogPage } from './my-dog.page';

const routes: Routes = [
  {
    path: '',
    component: MyDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDogPageRoutingModule {}
