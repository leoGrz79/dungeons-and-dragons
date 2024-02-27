import Race from './Race';

class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;
  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;