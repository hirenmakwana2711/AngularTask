import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'summaryView',
    loadChildren: () =>
      import('../app/summary-view/sammary-view.module').then(
        (m) => m.SammaryViewModule
      ),
  },
  {
    path: 'detailedView',
    loadChildren: () =>
      import('../app/detailed-view/detailed-view.module').then(
        (m) => m.DetailedViewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
