import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import {
  ApiClientService,
  API_URI_CAMPAIGNS,
} from '../../../../api-client/api-client.service';

@Component({
  selector: "invite-candidat",
  templateUrl: './invite-candidat.html',
  styleUrls: ['./invite-candidat.css']
})
export class InviteCandidat {
  candidatID: any[];
  public campaigns: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<InviteCandidat>,
    public apiClientService: ApiClientService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  name_candidat = new FormControl('', [Validators.required]);

  ngOnInit() {
    // will log the entire data object
    // console.log('params id', this.data); // show id pass in params router
    this.apiClientService
      .get(API_URI_CAMPAIGNS + '/' + this.data)
      .subscribe(datas => {
        this.campaigns = [datas];
        // console.log('id campaign', this.campaigns);
      });
  }
}
