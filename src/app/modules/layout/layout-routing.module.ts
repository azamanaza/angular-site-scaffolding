import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullWidthComponent } from './components/full-width/full-width.component';

const routes: Routes = [
  {
    path: '',
    component: FullWidthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../site/site.module').then(m => m.SiteModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
