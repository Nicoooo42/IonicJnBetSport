import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiterPageRoutingModule } from './regiter-routing.module';

import { RegiterPage } from './regiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiterPageRoutingModule
  ],
  declarations: [RegiterPage]
})
export class RegiterPageModule {}
