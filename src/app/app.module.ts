import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Clocks } from './clock/clock.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { TopBarComponent } from 'src/app/topBar/topBar.component';


@NgModule({
  declarations: [
    AppComponent,
    Clocks,
    SideBarComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  
  bootstrap: [
    AppComponent,
    Clocks,
    SideBarComponent,
    TopBarComponent,
  ]
    
})
export class AppModule { }
