import { NgModule } from '@angular/core';
import { LibApisModule } from 'lib-apis';
import { CommonModule } from '@angular/common';
import { NavLinks } from './components/nav-links/nav-links';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoginComponent,
    NavLinks
  ],
  imports: [
    CommonModule,
    LibApisModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    LoginComponent,
    NavLinks
  ],
  entryComponents: [
    LoginComponent,
    NavLinks
  ]

})
export class LibComponentsModule { }
