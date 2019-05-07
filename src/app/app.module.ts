import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemListComponent } from './collection/item-list/item-list.component';
import { ItemDetailComponent } from './collection/item-detail/item-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryService } from './shared/service/category.service';
import { FurnitureService } from './shared/service/furniture.service';
import { ShortenPipe } from './shared/pipe/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    CollectionComponent,
    ItemListComponent,
    ItemDetailComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoryService, FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
