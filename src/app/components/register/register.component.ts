import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedValue?: string;
  countries = [
    'Thai Binh',
    'Van Chuong',
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
