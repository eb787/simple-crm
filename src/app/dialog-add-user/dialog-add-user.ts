import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  private firestore = inject(Firestore);

  user = new User();
  birthDate!: Date;

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);

    const usersCollection = collection(this.firestore, 'users');

    addDoc(usersCollection, this.user.toJson())
      .then((result) => {
        console.log('User added:', result);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  }
}
