import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matselect',
  templateUrl: './matselect.component.html',
  styleUrls: ['./matselect.component.css']
})
export class MatselectComponent implements OnInit {

  SelectedValue: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
