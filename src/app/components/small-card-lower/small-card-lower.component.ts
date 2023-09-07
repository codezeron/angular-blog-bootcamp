import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-small-card-lower',
  templateUrl: './small-card-lower.component.html',
  styleUrls: ['./small-card-lower.component.css']
})
export class SmallCardLowerComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }
}
