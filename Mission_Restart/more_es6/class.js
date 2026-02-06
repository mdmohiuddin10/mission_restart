/**
 * class --> template
 * propertoies
 * method(a special type of function inside a class without the function keys)
 * 
 * object --
 * 
 */

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
        // console.log('colling the player', name);
    }
    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        return 'Barca'
    }
}

const player1 = new Player('tom jerry', 33);
player1.goal;
const player2 = new Player('tom', 35);
console.log(player1, player2);