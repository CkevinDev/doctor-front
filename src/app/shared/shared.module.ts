import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadrumbsComponent } from './breadrumbs/breadrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    BreadrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
