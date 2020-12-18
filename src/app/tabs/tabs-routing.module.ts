import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dog-photo',
        loadChildren: () => import('./dog-photo/dog-photo.module').then(m => m.DogPhotoPageModule)
      },
      {
        path: 'my-dog',
        loadChildren: () => import('./my-dog/my-dog.module').then(m => m.MyDogPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule-routing.module').then(m => m.SchedulePageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/schedule',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
