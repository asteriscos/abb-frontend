import ControlController from './control-controller';
import { Feature, State } from '../types';

export default class FeatureController {
  constructor() {
    this._features = [];
  }

  private _features: Feature[];

  /**
   * Gets a determined amount of features
   * @param amount 
   * @returns Feature[]
   */
  getFeatures(amount: number = 1): Feature[] {
    try {
      const data: Feature[] = [];
      while (data.length < amount) {
        data.push(this.generateFeature());
      }
      this._features = data;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      return this._features;
    }
  }

  /**
   * Creates a random single feature
   * @returns Feature
   */
  private generateFeature(): Feature {
    const possibleFeatures = ['Seam', 'Slot', 'Hole'];
    const states: State[] = ['check', 'warning', 'error'];
    let feature: Feature = {
      name: `Feature ${possibleFeatures[Math.floor(Math.random() * possibleFeatures.length)]}`,
      controls: new ControlController().getControls(),
      state: states[Math.floor(Math.random() * states.length)]
    };

    return feature;
  }
}
