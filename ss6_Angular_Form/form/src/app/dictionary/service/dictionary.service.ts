import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Dictionary[] = [
    {word:"dog", mean:"Quỳnh", detail:"Ngu"},
    {word:"cat", mean:"Huy", detail:"Ngu như Quỳnh"},
    {word:"pig", mean:"Hùng", detail:"Đập đá"},
  ]
  constructor() { }

  getAll() {
    return this.dictionarys;
  }

  findByName(name: string) {
    for (let i = 0; i < this.dictionarys.length; i++) {
        if (name===this.dictionarys[i].word){
            return this.dictionarys[i];
        }
    }
    return null;
  }
}
