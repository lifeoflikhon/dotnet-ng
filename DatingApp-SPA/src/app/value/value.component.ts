import { Component, OnInit } from '@angular/core';
import { ValueService } from './value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private valueService: ValueService) { }

  ngOnInit(): void {
    this.valueService.getValues().subscribe((values) => {
      this.values = values;
    });
  }

}
