import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDogPageRoutingModule } from './my-dog-routing.module';

import { MyDogPage } from './my-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDogPageRoutingModule
  ],
  declarations: [MyDogPage]
})
export class MyDogPageModule {}
