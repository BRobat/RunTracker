import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../models/activity.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activities: IActivity

  constructor() { }

  ngOnInit() {
  }

}
