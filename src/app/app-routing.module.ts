import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './demo/home/home.component';
import { DialogHomeComponent } from './demo/dialog/dialog-home/dialog-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dialog', component: DialogHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
