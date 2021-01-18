import {Player} from '../shared/player.model';
import orderBy from 'lodash/orderBy';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class PlayerService{
    
    private players:Player[] = [
        {id:1,name:"Mayur",score:5,active:true},
        {id:2,name:"Ujjwal",score:6,active:true},
        {id:3,name:"Harshit",score:0,active:false}
    ];
    constructor(private toastr:ToastrService){

    }
    show:Player[] = this.players;
    showOnly(){
        this.show = this.players.filter(player => player.active === true);
            return orderBy(this.show,'score','desc');
    }
    getPlayers():Player[]{
        return orderBy(this.players,'score','desc');
    }
    
    addPlayerScore(p:Player){
        if(this.players.map(p => p.name).includes(p.name)){
            this.toastr.error('Player Exist !!','Error',{
                timeOut:1000,
                progressBar:true,
                progressAnimation:'increasing',
                
              });
            return;
        }
        if(p.name == ""){
            this.toastr.warning('Player Name Required!!','Warning',{
                timeOut:2000,
                progressBar:true,
                progressAnimation:'increasing',
              });
              return;
        }
        if(p.score < 0 || p.score === null ){
            p.score = 0;
        }
        let i  = orderBy(this.players,['id'],['desc'])[0] ? orderBy(this.players,['id'],['desc'])[0].id : 1;
        this.players.push({
            id: i+1,
            name:p.name,
            score:p.score,
            active:true
        });
        // this.getPlayers();
        this.toastr.success('Player Added Success!!','',{
            timeOut:2000,
            progressBar:true,
            progressAnimation:'increasing',
          });
          return;
        document.getElementById("closeButton").click();
    }
     
    incrementScoreById(id:number){
        var player = this.players.find(p => p.id === id);
        if(player.active == false){
            player.active = true;
        }
        player.score ++;
        
        
    }

    decrementScoreById(id:number){
        var player = this.players.find(p => p.id === id)
        if(player.active === false){
            player.active = true;
            return
        }
        player.score--;
        if(player.score < 0){
            player.score = 0;
            player.active = false;
        }
    }
    
    
    
} 
