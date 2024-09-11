import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              importProvidersFrom(TabsModule.forRoot()),
              provideHttpClient()
            ]
};
