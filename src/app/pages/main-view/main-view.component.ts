import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  board: Board = new Board('Test Board',[
    new Column('Ideas',[
      'Get to work',
      'Pick up groceries'
    ]),
    new Column('Research', [
      'Go home',
      'Fall asleep'
    ]),
    new Column('Todo', [
      'Get up',
      'Brush teeth',
      'Take a shower'
    ]),
    new Column('Done', [
      'Check e-mail',
      'Walk dog'
    ])
  ])
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
