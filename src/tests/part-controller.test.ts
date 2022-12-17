import { PartController } from '../services';

describe('[PartHandler] Methods', () => {
  let PartHandler: PartController;
  beforeAll(() => {
    PartHandler = new PartController();
  });
  describe('getParts: ', () => {
    it('Gets 3 parts', () => {
      const QUANTITY = 3;
      const parts = PartHandler.getParts(QUANTITY);
      expect(parts.length).toBe(QUANTITY);
    });
  });

});