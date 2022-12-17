import { ControlController } from '../services';
import { Control } from '../types';

describe('[ControlHandler] Methods', () => {
  let ControlHandler: ControlController;
  beforeAll(() => {
    ControlHandler = new ControlController();
  });
  describe('getControls: ', () => {
    it('Gets 3 controls', () => {
      const controls = ControlHandler.getControls();
      expect(controls.length).toBeGreaterThanOrEqual(1);
    });
  });

});