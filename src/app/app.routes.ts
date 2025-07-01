import { Routes } from '@angular/router';

import { Home } from './home/home.component';
import { Catalogo } from './catalogo/catalogo.component';
import { Detalle } from './detalle/detalle.component';
import { Login } from './login/login.component';
import { Registro } from './registro/registro.component';
import { Products } from './products/products.component';


export const routes: Routes = [
    {   
        path: 'home',
        component: Home
    },
    {   
        path: 'catalogo',
        component: Catalogo
    },
    {   
        path: 'detalle',
        component: Detalle
    },
    {   
        path: 'login',
        component: Login
    },
    {   
        path: 'registro',
        component: Registro
    },
    {   
        path: 'producto',
        component: Products
    },
    {   
        path: '**',
        component: Home
    }
];
