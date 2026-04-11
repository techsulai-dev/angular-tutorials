import { Routes } from '@angular/router';
import { Parentdemo } from './Components/parentdemo/parentdemo';
//import { signal } from '@angular/core';
import { Signaldemo } from './Components/signaldemo/signaldemo';
import { Ngdocheckdemo } from './Components/ngdocheckdemo/ngdocheckdemo';
import { form } from '@angular/forms/signals';
import { FormPage } from './Pages/form-page/form-page';
// import { Form } from './Components/form/form';

export const routes: Routes = [
    { path: '', component: Parentdemo },
    { path: 'signal',component: Signaldemo},
    { path: 'reactive-forms', loadComponent: () => import('./Components/reactive-forms/reactive-forms').then(m => m.ReactiveForms) },
   // { path: 'ngdocheckdemo', loadComponent: () => import('./Components/ngdocheckdemo/ngdocheckdemo').then(m => m.Ngdocheckdemo) }
    {path: 'ngdocheckdemo', component: Ngdocheckdemo},
    {path: 'form', component: FormPage}
];
