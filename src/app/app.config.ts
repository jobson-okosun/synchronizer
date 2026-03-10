import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ConfirmationService } from 'primeng/api';
import { PRIMENG_PRESET } from './util/contants'; 
import { authInterceptor } from './interceptors/auth.interceptor';
import { credentialsInterceptor } from './interceptors/credential.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([credentialsInterceptor, authInterceptor])),
    provideHotToastConfig(), 
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: PRIMENG_PRESET, options: { darkModeSelector: false }}}),
    ConfirmationService,
  ]
};
