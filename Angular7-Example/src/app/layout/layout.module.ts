import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
