import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ArrayService {
  arr = [1, 2, 3, 4, 5];
  getData() {
    return of(this.arr);
  }
}
