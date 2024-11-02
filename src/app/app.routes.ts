import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProcessSequenceOneComponent } from './components/process-sequence-one/process-sequence-one.component';
import { ProcessSequenceTwoComponent } from './components/process-sequence-two/process-sequence-two.component';
import { ProcessSequenceThreeComponent } from './components/process-sequence-three/process-sequence-three.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'processone',
        component: ProcessSequenceOneComponent
    },
    {
        path: 'processtwo',
        component: ProcessSequenceTwoComponent
    },
    {
        path: 'processthree',
        component: ProcessSequenceThreeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
