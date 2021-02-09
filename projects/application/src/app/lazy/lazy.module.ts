import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibComponentsModule, LoginComponent } from 'lib-components';

@NgModule({
  imports: [
    LibComponentsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule { }
