import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { IconsComponent } from '../icons/icons.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@NgModule({
  declarations: [
  DashboardComponent,
  IconsComponent,
  NotificationsComponent,
  TableListComponent,
  TypographyComponent,
  UserProfileComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
