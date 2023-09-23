import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'elements', 
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },
  { path: '', component: HomeComponent},
  //If you have a path of empty string, it is the home screen
  { path: '**', component: NotFoundComponent}
  //If you have a pth of ** it means paths that are not found/wildcard inputs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
