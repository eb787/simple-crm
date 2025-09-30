import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatToolbarModule, MatSidenavModule, MatIconModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'simple-crm';
}
