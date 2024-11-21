import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Página principal (Home)
  { path: 'signup', component: SignupComponent }, // Página de registro
  { path: '**', redirectTo: '' }, // Ruta por defecto en caso de no coincidir con ninguna
];

