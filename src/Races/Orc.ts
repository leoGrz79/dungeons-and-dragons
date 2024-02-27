import Race from './Race';

export default class Orc extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;
  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }
}