import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}