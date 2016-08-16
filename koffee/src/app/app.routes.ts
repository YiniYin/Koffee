import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app';
import { MainComponent } from './main/main.component';
import { SetupOrderComponent } from './setup-order/setup-order.component';
import { SelectTypeComponent } from './select-type/select-type.component';
import { SelectStrengthComponent } from './select-strength/select-strength.component';

const routes: RouterConfig = [
    {path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'setup-order', component: SetupOrderComponent },
    { path: 'select-type', component: SelectTypeComponent },
    { path: 'select-strength', component: SelectTypeComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
