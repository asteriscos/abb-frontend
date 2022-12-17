import { Part } from '../types';
import FeatureController from './feature-controller';

export default class PartController {
  constructor() {
    this._parts = [];
  }

  private _parts: Part[];

  /**
   * Gets a determined amount of parts
   * @param amount 
   * @returns Part[]
   */
  getParts(amount: number = 1): Part[] {
    try {
      const data: Part[] = [];
      while (data.length < amount) {
        data.push(this.generatePart());
      }
      this._parts = data;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      return this._parts;
    }
  }
/**
 * Generate a single random part
 * @returns Part
 */
  private generatePart(): Part {
    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    const MAX_FEATURES = 7, MIN_FEATURES = 1;
    const featuresAmount = Math.max(MIN_FEATURES, Math.floor(Math.random() * MAX_FEATURES));

    let part: Part = {
      name: `Part ${chars[Math.floor(Math.random() * chars.length)]}`,
      features: new FeatureController().getFeatures(featuresAmount)
    };

    return part;
  }
}
