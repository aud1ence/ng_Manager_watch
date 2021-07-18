import {Component, OnInit, SimpleChanges} from '@angular/core';
import {DateUtilService} from "../../service/date-util.service";

@Component({
  selector: 'app-life-time',
  templateUrl: './life-time.component.html',
  styleUrls: ['./life-time.component.css']
})
export class LifeTimeComponent implements OnInit {

  result!: string;

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit(): void {
  }

  onChange(value: any) {
    this.result = this.dateUtilService.getDiffToNow(value);
  }

}
