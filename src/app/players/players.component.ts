import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {Player} from '../shared/player.model';
import { PlayerService } from './player.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  @ViewChild('f') plForm: NgForm;
  wishes:boolean = false;

  @Input() players: Player[];

  
  @Output() 
  onAddPlayer: EventEmitter<Player> = new EventEmitter();

  @Output()
  incrementScore: EventEmitter<number> = new EventEmitter();
  @Output()
  decrementScore: EventEmitter<number> = new EventEmitter();
  @Output()
  showActive: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private plService: PlayerService) {
    
  }
  Check:boolean = false;
  doCheck(){
    this.Check = !this.Check;
    this.showActive.emit(this.Check);
  }
  name:string = '';
  score:number = null;
  resetForm() {
    this.name = '';
    this.score = null;
  }

  onIncrementScore(id:number):void{
    this.incrementScore.emit(id);
    
  }
  onDecrementScore(id:number):void{
    this.decrementScore.emit(id);
    
  }

  addPlayer(form:NgForm){
    const value = form.value;
    this.onAddPlayer.emit({
      id: undefined,
      name: value.name,
      score: value.score,
      active: true
    });
    if(value.name != "")
      document.getElementById("closeButton").click();
    
    this.resetForm();
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
    
  submit(){
    console.log(this.form.valid);
  
    if(this.form.valid){
      console.log(this.form.value);
    }
  }
}
