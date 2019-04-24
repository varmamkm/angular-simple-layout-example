import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class AparmentselectionService {

  private selectionChangedSource = new Subject<number>();
  private newSelectionSource = new Subject<number>();

  selectionChanged$ = this.selectionChangedSource.asObservable();
  newSelection$ = this.newSelectionSource.asObservable();

  annouceSelection(apartmentid: number) {
    this.selectionChangedSource.next(apartmentid);
  }

  addNewSelection(apartmentid: number) {
    this.newSelectionSource.next(apartmentid);
  }

  constructor() { }

}