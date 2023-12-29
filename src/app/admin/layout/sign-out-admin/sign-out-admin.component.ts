import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-sign-out-admin',
  templateUrl: './sign-out-admin.component.html',
  styleUrls: ['./sign-out-admin.component.less']
})
export class SignOutAdminComponent {
  async signOut() {
    try {
      await Auth.signOut();
      console.log('Successfully signed out');
    } catch (error) {
      console.error('Error signing out', error);
    }
  }
}
