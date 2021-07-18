import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/products/product-list/product-list.component";
import {ProductAddComponent} from "./components/products/product-add/product-add.component";
import {RegisterComponent} from "./components/register/register.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LifeTimeComponent} from "./components/life-time/life-time.component";
import {YoutubePlaylistComponent} from "./components/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./components/youtube-player/youtube-player.component";
import {DictionaryComponent} from "./components/dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./components/dictionary-detail/dictionary-detail.component";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'products/list',
    component: ProductListComponent
  },
  {
    path: 'products/add',
    component: ProductAddComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'life-time',
    component: LifeTimeComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent
      }
    ]
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
  },
  {
    path: 'dictionary-detail/:id',
    component: DictionaryDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
