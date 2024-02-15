// display-context.token.ts
import { InjectionToken } from '@angular/core';
import { DisplayOptions } from './display-options.service';

export const DISPLAY_CONTEXT = new InjectionToken<DisplayOptions>('DISPLAY_CONTEXT');
