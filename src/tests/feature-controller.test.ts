import { FeatureController } from '../services';

describe('[FeatureHandler] Methods', () => {
  let FeatureHandler: FeatureController;
  beforeAll(() => {
    FeatureHandler = new FeatureController();
  });
  describe('getFeatures: ', () => {
    it('Gets 3 features', () => {
      const QUANTITY = 3;
      const features = FeatureHandler.getFeatures(QUANTITY);
      expect(features.length).toBe(QUANTITY);
    });
  });

});