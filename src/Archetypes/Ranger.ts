import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _createArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createArchetypeInstances;
  }

  override get name(): string {
    return this.name;
  }
}

export default Ranger;