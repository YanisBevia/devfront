import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SkillsComponent,
    InscriptionComponent,
    ConnexionComponent,
    FiltersComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CategoryListComponent,
    CategoryComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
