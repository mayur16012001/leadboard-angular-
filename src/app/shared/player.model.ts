export class Player{
    constructor(public id:number,public name:string,public score:number,public active:boolean){
        this.id = id;
        this.name = name;
        this.score = score;
        this.active = active;
    }
}