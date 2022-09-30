import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../dictionary/service/dictionary.service";
import {Dictionary} from "../dictionary/model/dictionary";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionarys: Dictionary = null;
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const name = paramMap.get("name");
      this.dictionarys = this.dictionaryService.findByName(name);
    })
  }

  ngOnInit(): void {
  }

}
