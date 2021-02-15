import { Component,Input, Output,EventEmitter} from '@angular/core';
import {Player} from '../shared/player.model';
import { PlayerService } from '../players/player.service';
import orderBy from 'lodash/orderBy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() player: Player | undefined;
  @Output()
  increment : EventEmitter<number> = new EventEmitter();

  @Output()
  decrement: EventEmitter<number> = new EventEmitter();
  constructor(private plService: PlayerService) {
  }

  incrementScore(id:number){
    // console.log(id);
    this.increment.emit(id);
  }
  
  decrementScore(id:number){
    this.decrement.emit(id);
  }


}
