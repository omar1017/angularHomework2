import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Word } from "../Models/Word";
import { combineLatestWith, map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DictionaryService {

  constructor(private http : HttpClient) {
  }

  getWord(wordSearch : string) : Observable<Word> {
    return this.http.get<Word>("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordSearch);
  }

}
