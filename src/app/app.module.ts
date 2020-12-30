import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComplainsComponent } from './add-complains/add-complains.component';
import { FetchComplainsComponent } from './fetch-complains/fetch-complains.component';
import { ComplainComponent } from './fetch-complains/complain/complain.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComplainsComponent,
    FetchComplainsComponent,
    ComplainComponent,
    DropdownDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
