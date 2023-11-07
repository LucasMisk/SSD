import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SharedService {
  private _stream$ = new BehaviorSubject("");
  public stream$ = this._stream$.asObservable();

  send(msg : string) {
    this._stream$.next(msg);
  }
}
