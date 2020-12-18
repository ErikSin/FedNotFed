import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogPhotoPage } from './dog-photo.page';

const routes: Routes = [
  {
    path: '',
    component: DogPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogPhotoPageRoutingModule {}
