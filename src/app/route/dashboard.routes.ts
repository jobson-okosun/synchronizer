import { Routes } from "@angular/router";
import { Layout } from "../dashboard/layout/layout";

const routes: Routes = [
    { 
        path: '',
        component: Layout, 
        children: [
            { path: '', redirectTo: 'subject', pathMatch: 'full' },
            { path: 'subject', loadComponent: () => import('../dashboard/subjects/subjects') },
            { path: 'exam-year', loadComponent: () => import('../dashboard/exam-year/exam-year') },
            { path: 'exam', loadComponent: () => import('../dashboard/exams/exams') },
            { 
                path: 'center',
                children: [
                    { path: '', loadComponent: () => import('../dashboard/centers/list/list') },
                    { path: ':examId', loadComponent: () => import('../dashboard/centers/view/view') }
                ]
            },
            { 
                path: 'participant',
                children: [
                    { path: '', loadComponent: () => import('../dashboard/participants/list/list') },
                    { path: ':examId', loadComponent: () => import('../dashboard/participants/view/view') }
                ]
            }
        ]
    }
]

export default routes