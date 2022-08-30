import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSecurityRefreshComponent } from './account-security-refresh/account-security-refresh.component';
import { AdminRefreshComponent } from './admin-refresh/admin-refresh.component';
import { CotUpdateComponent } from './cot-update/cot-update.component';
import { HomeComponent } from './home';
import { SecurityRefreshComponent } from './security-refresh/security-refresh.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'secRefresh', component: SecurityRefreshComponent, canActivate: [AuthGuard] },
    { path: 'accountSecRefresh', component: AccountSecurityRefreshComponent, canActivate: [AuthGuard] },
    { path: 'adminRefresh', component: AdminRefreshComponent, canActivate: [AuthGuard] },
    { path: 'cotUpdate', component: CotUpdateComponent, canActivate: [AuthGuard] },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }