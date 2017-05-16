import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FAQComponent } from './component/faq/faq.component';
import { AboutComponent } from './component/about/about.component';
import { OrderComponent } from './component/order/order.component';
import { FlavorComponent } from './component/flavor/flavor.component';
import { ContactComponent } from './component/contact/contact.component';

const appRoutes: Routes = [
 {path:'', component: HomeComponent},
 {path:'faq', component: FAQComponent},
 {path:'flavor', component: FlavorComponent},
 {path:'order', component: OrderComponent},
 {path:'contact', component: ContactComponent},
 {path:'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FAQComponent,
    AboutComponent,
    OrderComponent,
    FlavorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
