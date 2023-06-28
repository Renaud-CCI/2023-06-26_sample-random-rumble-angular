export interface IPlayer {
    id: number;

    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;
}
export class Player implements IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;

    constructor(id: number, name: string, pv: number, pvMax: number, mana: number, manaMax: number) {
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.pvMax = pvMax;
        this.mana = mana;
        this.manaMax = manaMax;
    }
}

// Le state initial contiendra nos 4 joueurs
export const initialPlayers: IPlayer[] = [
    // Dans ce tableau créons plusieurs instances de la classe player
    new Player(1, 'John', 80, 100, 30, 30),
    new Player(2, 'Jack', 100, 100, 30, 30),
    new Player(3, 'Jessy', 100, 100, 30, 30),
    new Player(4, 'Jenny', 100, 100, 20, 30)
];