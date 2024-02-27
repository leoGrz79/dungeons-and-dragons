import Race from './Race';

class Halfling extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;
  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;