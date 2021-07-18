import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: any;

  constructor(private dictionaryService: DictionaryService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => console.log(paramMap.get('id')))
  }


}
