import { Routes } from '@angular/router';
import { Parentdemo } from './Components/parentdemo/parentdemo';
//import { signal } from '@angular/core';
import { Signaldemo } from './Components/signaldemo/signaldemo';

export const routes: Routes = [
    { path: '', component: Parentdemo },
    { path: 'signal',component: Signaldemo}
];
