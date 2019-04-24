import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class AparmentselectionService {

  private selectionChangedSource = new Subject<number>();

  selectionChanged$ = this.selectionChangedSource.asObservable();

  annouceSelection(apartmentid: number) {
    this.selectionChangedSource.next(apartmentid);
  }

  constructor() { }

}