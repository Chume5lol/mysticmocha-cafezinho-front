import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { LoginComponent } from './features/auth/login/login';
import { authGuard } from './core/guards/authGuard';
import { TicketsComponent } from './features/tickets/tickets';
import { MainComponent } from './shared/components/main/main';
import { UsersComponent } from './features/users/users';

export const routes: Routes = [
    {path: 'home', component: MainComponent, title: 'Cafezinho - Home', canActivate: [authGuard]},
    {path: 'login', component: LoginComponent, title: 'Cafezinho - Faça seu login'},
    {path: 'tickets/admin', component: TicketsComponent, title: 'Cafezinho - Chamados' },
    {path: 'users', component: UsersComponent, title: 'Cafezinho - Usuários' }
];
