import { Routes } from '@angular/router';
import { ProcessesComponent } from './components/processes/processes.component';

export const routes: Routes = [
    {
        path: '',
        component: ProcessesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
