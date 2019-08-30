import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../_models';
import { AuthService, UserService } from '../_helpers';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ProgressService } from '@/progress/progress.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser: User;
  versionNumber = "0.8.8(080819)";

  constructor(
    public router: Router,
    private authenticationService: AuthService,
    public dialog: MatDialog
    ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmResetComponent, {
      width: '250px'    
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
})
export class DialogConfirmResetComponent {

  constructor(public dialogRef: MatDialogRef<DialogConfirmResetComponent>,
    private progressService: ProgressService,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.progressService.resetAllProgress();
    this.dialogRef.close();
  }

}
