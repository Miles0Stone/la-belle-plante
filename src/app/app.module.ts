import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FilterSideBarComponent } from './component/filter-side-bar/filter-side-bar.component';
import { CardPlantComponent } from './component/card-plant/card-plant.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
    NavBarComponent,
         PageAccueilComponent,
         PageDetailsComponent,
         PageNotFoundComponent,
         FilterSideBarComponent,
         CardPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
