import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';



export const routes: Routes = [
    {
        //path完全一致する場合、Homeにリダイレクトする。
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        //アクセス時自動的にHomeにリダイレクトする
        path:'home',
        component:HomeComponent
    }
];
