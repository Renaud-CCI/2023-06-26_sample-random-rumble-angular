export interface IMonster { 
  id: number; 
  name: string; 
  pvMax: number, 
  pv: number, 
} 
  
export const initialMonster: IMonster = { 
  id: 1, 
  name: 'Monster', 
  pvMax: 1000, 
  pv: 1000, 
};
