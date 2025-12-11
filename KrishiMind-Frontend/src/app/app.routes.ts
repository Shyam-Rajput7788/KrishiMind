import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home),
        title: 'KirshiMind-home'
    },
    // {
    // path: 'products',
    // children: [
    //   {
    //     path: 'products',
    //     loadComponent: () => import('./components/products/products').then(m => m.Products),
    //     title: 'Products'
    //   },
    //   {
    //     path: 'agriculture-products',
    //     loadComponent: () => import('./components/agriculture-products/agriculture-products').then(m => m.AgricultureProducts),
    //     title: 'Agriculture-Products'
    //   }
    // ]
    // },
    
{
        path: 'products',
        children: [
            {
                path: '', // Default child - /products pe ye show hoga
                loadComponent: () => import('./components/products/products').then(m => m.Products),
                title: 'Products'
            },
            {
                path: 'agriculture-products', // /products/agriculture-products
                loadComponent: () => import('./components/agriculture-products/agriculture-products').then(m => m.AgricultureProducts),
                title: 'Agriculture Products'
            }
        ]
    },

    {
        path: 'video-blog',
        loadComponent: () => import('./components/video-blog/video-blog').then(m => m.VideoBlog),
        title: 'video-blog'
    },
    {
        path: 'government-schemes',
        loadComponent: () => import('./components/government-schemes/government-schemes').then(m => m.GovernmentSchemes),
        title: 'government-scheme'
    },
    {
        path: 'community',
        loadComponent: () => import('./components/community/community').then(m => m.Community),
        title: 'community'
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact').then(m => m.Contact),
        title: 'contact'
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login').then(m => m.Login),
        title: 'login'
    },

];
