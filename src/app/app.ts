import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MatToolbarModule, MatSidenavModule, MatIconModule, RouterModule, MatButtonModule, MatDialogModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'simple-crm';
}
