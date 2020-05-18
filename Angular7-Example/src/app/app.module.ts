import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { LayoutModule } from './layout/layout.module';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
    {
        path      : '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }, {
    path: '',
    component: AdminComponent,
    children: [
        {
      path: '',
      loadChildren: './admin/admin.module#AdminModule'
  }]},
    {
    path: '**', 
    redirectTo: 'dashboard'
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
