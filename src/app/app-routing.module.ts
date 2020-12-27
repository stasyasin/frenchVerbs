import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VerbsComponent } from './components/verbs/verbs.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [{ path: '', redirectTo: 'verbs', pathMatch: 'full' },
  {path: 'verbs', component: VerbsComponent},
  {path: 'game', component: GameComponent},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
