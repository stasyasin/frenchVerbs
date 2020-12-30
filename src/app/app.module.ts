import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VerbComponent } from './components/verb/verb.component';
import { GameComponent } from './components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerbsListComponent } from './components/verbs-list/verbs-list.component';
import { VerbsComponent } from './components/verbs/verbs.component';
import { MatIconModule } from '@angular/material/icon';
import { VerbsFilterPipe } from './pipes/verbs-filter.pipe';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const materialModules = [
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    VerbComponent,
    GameComponent,
    VerbsListComponent,
    VerbsComponent,
    VerbsFilterPipe,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    materialModules,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
