import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogPhotoPageRoutingModule } from './dog-photo-routing.module';

import { DogPhotoPage } from './dog-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogPhotoPageRoutingModule
  ],
  declarations: [DogPhotoPage]
})
export class DogPhotoPageModule {}
