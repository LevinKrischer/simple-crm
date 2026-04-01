import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-new-user',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatButtonModule],
  templateUrl: './dialog-new-user.html',
  styleUrl: './dialog-new-user.scss',
})
export class DialogNewUser {

}
