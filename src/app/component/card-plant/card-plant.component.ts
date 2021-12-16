import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.scss']
})
export class CardPlantComponent implements OnInit {
@Input() image: any;
  constructor() { }

  ngOnInit(): void {
    


  }

}
