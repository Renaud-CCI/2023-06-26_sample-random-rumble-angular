
export interface Cost {
  name: string;
  value: number;
  Icon: string;
}
export interface Capacity {
  name: string;
  btnBootstrapColor : string;
  cost: Cost;
  type: string;
  damage: number;
  Icon: string;
}

export function capacityArray(playerString: string): Capacity[]{
  let capacities: Capacity[] = [],
      iconHeart: string = "💗",
      iconPower: string = "💪",
      iconHeartBreak: string = "💔",
      iconHeartRenovated: string = "💖";

  switch (playerString) {
    case 'bart':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 6, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Lance-pierre", btnBootstrapColor: "btn-info", cost: { name: "power", value: 12, Icon: iconPower }, damage: 80, type: "attack", Icon: iconHeartBreak },
        { name: "Krusty burger", btnBootstrapColor:"btn-success", cost: { name: "rien", value: 2, Icon: iconPower }, damage: 25 , type: "soloHeal", Icon: iconHeartRenovated}
      ];
      break;

    case 'lisa':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Soin de groupe", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50 , type: "groupHeal", btnBootstrapColor:"btn-success" , Icon: iconHeartRenovated },
        { name: "Lecture", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 20 , type: "soloPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'maggie':
      capacities = [
        { name: "Pleurs", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 25, type: "attack", Icon: iconHeartBreak },
        { name: "Sieste", cost: { name: "power", value: 10, Icon: iconPower }, damage: 20 , type: "soloHeal", btnBootstrapColor:"btn-success", Icon: iconHeartRenovated},
        { name: "Sucette", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 20 , type: "soloPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'milhouse':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Krusty burger", cost: { name: "power", value: 10, Icon: iconPower }, damage: 20 , type: "milhouseSoloHeal", btnBootstrapColor:"btn-success", Icon: iconHeartRenovated},
        { name: "Ventoline", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 20 , type: "milhouseSoloPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'martin':
      capacities = [
        { name: "Soin", cost: { name: "power", value: 5, Icon: iconPower }, damage: 25 , type: "soloHeal", btnBootstrapColor:"btn-success", Icon: iconHeartRenovated},
        { name: "Soin de groupe", cost: { name: "power", value: 10, Icon: iconPower }, damage: 10 , type: "groupHeal", btnBootstrapColor:"btn-success" , Icon: iconHeartRenovated },
        { name: "Regain de force de groupe", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 20 , type: "groupPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'nelson':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Coup de pied", btnBootstrapColor: "btn-info", cost: { name: "power", value: 15, Icon: iconPower }, damage: 80, type: "attack", Icon: iconHeartBreak },
        { name: "Tabassage", btnBootstrapColor: "btn-info", cost: { name: "power", value: 20, Icon: iconPower }, damage: 100, type: "attack", Icon: iconHeartBreak },
      ];
      break;

    case 'tod':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 20, Icon: iconPower }, damage: 10, type: "attack", Icon: iconHeartBreak },
        { name: "Soin de groupe", cost: { name: "power", value: 10, Icon: iconPower }, damage: 25 , type: "groupHeal", btnBootstrapColor:"btn-success" , Icon: iconHeartRenovated },
        { name: "Regain de force de groupe", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 25 , type: "groupPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'kearney':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Coup de pied", btnBootstrapColor: "btn-info", cost: { name: "power", value: 20, Icon: iconPower }, damage: 80, type: "attack", Icon: iconHeartBreak },
        { name: "Regain de force de groupe", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 20 , type: "groupPower", btnBootstrapColor:"btn-primary", Icon: iconPower}
      ];
      break;

    case 'ralf':
      capacities = [
        { name: "Coup de Ralf", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "ralfAttack", Icon: iconHeartBreak },
        { name: "Soin de groupe", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50 , type: "ralfHealth", btnBootstrapColor:"btn-success" , Icon: iconHeartRenovated },
        { name: "Regain de force de groupe", cost: { name: "pv", value: 10, Icon: iconHeart }, damage: 50 , type: "ralfpower", btnBootstrapColor:"btn-primary", Icon: iconPower}
        ];
        break;

    case 'jimbo':
      capacities = [
        { name: "Coup de poing", btnBootstrapColor: "btn-info", cost: { name: "power", value: 10, Icon: iconPower }, damage: 50, type: "attack", Icon: iconHeartBreak },
        { name: "Coup de pied", btnBootstrapColor: "btn-info", cost: { name: "power", value: 20, Icon: iconPower }, damage: 80, type: "attack", Icon: iconHeartBreak },
        { name: "Tabassage", btnBootstrapColor: "btn-info", cost: { name: "power", value: 30, Icon: iconPower }, damage: 100, type: "attack", Icon: iconHeartBreak },
      ];
      break;
  }
  return capacities;
}
