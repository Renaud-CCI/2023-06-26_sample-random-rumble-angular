import { Capacity, capacityArray } from "./capacity.model"; 

export interface IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    power: number;
    powerMax: number;
    cardBg: string;
    capacities : Capacity[];
}
export class Player implements IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    power: number;
    powerMax: number;
    cardBg: string;
    capacities : Capacity[];

    constructor(id: number, name: string, pv: number, pvMax: number, power: number, powerMax: number, cardBg: string, capacities: Capacity[]) {
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.pvMax = pvMax;
        this.power = power;
        this.powerMax = powerMax;
        this.cardBg = cardBg;
        this.capacities = capacities;
    }
}

let playersToChooseArray : Array<[string, number, number, number, number, string, Capacity[]]> = [
    ['Bart', 50, 50, 40, 40, 'bg-body', capacityArray('bart')],

    ['Lisa', 50, 50, 30, 30, 'bg-body', capacityArray('lisa')],

    ['Maggie', 50, 50, 30, 30, 'bg-body', capacityArray('maggie')],

    ['Milhouse', 50, 50, 30, 30, 'bg-body', capacityArray('milhouse')],

    ['Martin', 50, 50, 30, 30, 'bg-body', capacityArray('martin')],

    ['Nelson', 50, 50, 50, 50, 'bg-body', capacityArray('nelson')],

    ['Tod', 50, 50, 30, 30, 'bg-body', capacityArray('tod')],

    ['Kearney', 50, 50, 40, 40, 'bg-body', capacityArray('kearney')],

    ['Ralf', 50, 50, 30, 30, 'bg-body', capacityArray('ralf')],

    ['Jimbo', 50, 50, 40, 40, 'bg-body', capacityArray('jimbo')],

]
// Le state initial contiendra nos 4 joueurs
export const initialPlayers: IPlayer[] = getPlayersArray();

function getRandom() {
    let aValues = [...(new Array(10)).keys()];
    
    let aResults = [];
    for (let i = 0; i < 4; i++) {
        let randomNumberIndex = Math.floor(Math.random() * aValues.length);
        let randomNumber = aValues[randomNumberIndex];
        aValues.splice(randomNumberIndex, 1); // Supprimer le nombre aléatoire de la liste des valeurs possibles
        aResults.push(randomNumber);
    }
    return aResults;
}

function getPlayersArray(){
    let numberArray = getRandom(),
        playersArray : IPlayer[] = [];

    for (let i = 0; i < 4; i++){
        let index : number = parseInt(numberArray[i].toString());
        playersArray.push(new Player(   i+1,
                                        playersToChooseArray[index][0].toString(),
                                        parseInt(playersToChooseArray[index][1].toString()),
                                        parseInt(playersToChooseArray[index][2].toString()),
                                        parseInt(playersToChooseArray[index][3].toString()),
                                        parseInt(playersToChooseArray[index][4].toString()),
                                        playersToChooseArray[index][5].toString(),
                                        playersToChooseArray[index][6],
                                    ))
    }
    // console.log('playersArray:', playersArray);
    return playersArray;

}
