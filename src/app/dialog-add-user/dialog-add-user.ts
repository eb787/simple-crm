import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dialog-add-user',
  imports: [ MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule ],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss'
})
export class DialogAddUser {

}
