import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
// import { Dialog3Component } from './dialog3/dialog3.component';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.css']
})
export class MatdialogComponent implements OnInit {
  name: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(Dialog1Component);

  }

  openDialog2(){
    this.dialog.open(Dialog2Component).afterClosed().subscribe(res =>{

      console.log(res);
    })
  }

  // openDialog3(){
  //   this.dialog.open(Dialog3Component,{
  //     data : this.name
  //   })
  // }
}
