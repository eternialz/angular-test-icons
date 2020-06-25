import { Component } from '@angular/core';
import attributions from 'npm-test-icons/attributions.json';

export interface IAttributionContainer {
  attributions: IAttribution[];
}

export interface IAttribution {
  text: string;
  url: string;
  licenceUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-test-icons';
  public mentions: IAttributionContainer = attributions;
}
