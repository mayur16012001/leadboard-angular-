import { Component, OnInit } from '@angular/core';
import {Player} from './shared/player.model';
import {PlayerService} from './players/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  players:Player[] = [];
  constructor(private plService: PlayerService) { }
  act:boolean;
  onIncrementScore(id: number): void{
    this.plService.incrementScoreById(id);
    if(this.act)
      this.players = this.plService.getPlayers();
    else
      this.players = this.plService.showOnly();
  }
  onDecrementScore(id:number): void{
    this.plService.decrementScoreById(id);
    if(this.act)
    this.players = this.plService.getPlayers();
  else
    this.players = this.plService.showOnly();
  }
  onShowActive(check:boolean):void{
    if(check){
      this.act = true;
      this.players = this.plService.getPlayers();
     
    }else{
      this.act = false;
      this.players = this.plService.showOnly(); 
    }
    

  }
  public ngOnInit(): void{
    this.act = false;
    this.players = this.plService.showOnly();
  }
  onAddPlayer(player: Player): void{
    this.plService.addPlayerScore(player);
    if(this.act)
      this.players = this.plService.getPlayers();
    else
      this.players = this.plService.showOnly();
  }
  title = 'leadboard';
  
}
