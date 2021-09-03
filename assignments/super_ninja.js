class Ninja{
    constructor(name,health,speed,strength){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name);
    }
    showStats(speed,strength,health){
        console.log(`speed: ${this.speed} strength: ${this.strength} health: ${this.health}`)
    }
    drinkSake(health){
        this.health = this.health + 10;
    
    
    }
}
class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name, 10,10,100,wisdom);
            this.wisdom = 10;
        
    }
    speakWisdom(){
        this.drinkSake();
        console.log('Pizza is good for you');

    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();