// display-options.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayOptionsService {
  displayOptions: DisplayOptions = {
    stageLayout: 'grid',
    showStats: false,
  };
  static displayOptions: any;
}
export interface DisplayOptions {
  stageLayout?: string;
  /** display debugging stats */
  showStats?: boolean;
}
