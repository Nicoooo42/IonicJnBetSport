import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiterPage } from './regiter.page';

const routes: Routes = [
  {
    path: '',
    component: RegiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiterPageRoutingModule {}
