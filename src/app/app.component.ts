import { Component, OnInit } from '@angular/core';
import { ArrayService } from './arr.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private arrService: ArrayService) {}

  doubledArray?: number[] | string | number;
  ngOnInit() {
    this.doubledArray = 'Array with values * 2 is...';
    setTimeout(() => {
      this.arrService
        .getData()
        .pipe(map((arr) => arr.map((value) => value * 2)))
        .subscribe((data) => {
          this.doubledArray = data;
          console.log('Array with values * 2: ', data);
        });
      setTimeout(() => {
        this.doubledArray = 'Array with even numbers only...';
        setTimeout(() => {
          this.arrService
            .getData()
            .pipe(
              map((arr) => arr.map((value) => value * 2)),
              map((arr) => arr.filter((value) => value % 2 === 0))
            )
            .subscribe((data) => {
              this.doubledArray = data;
              console.log('Even numbers: ', data);
            });
          setTimeout(() => {
            this.doubledArray =
              'Sum of elements of doubled array [2,4,6,8,10]...';
            setTimeout(() => {
              this.arrService
                .getData()
                .pipe(
                  map((arr) => arr.map((value) => value * 2)),
                  map((arr) => arr.filter((value) => value % 2 === 0)),
                  map((arr) => arr.reduce((acc, value) => acc + value, 0))
                )
                .subscribe((data) => {
                  this.doubledArray = data;
                  console.log('Sum: ', data);
                });
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
}
