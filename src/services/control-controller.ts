import { Control, State } from '../types';

export default class ControlController {
  constructor() {
    this._controls = [];
  }

  private _controls: Control[];

  /**
   * Gets controls
   * @returns Control[]
   */
  getControls(): Control[] {
    try {
      const possibleControls = ['X', 'Y', 'Z', 'Diameter', 'Length'];
      const data: Control[] = [];
      const randomIterationsAmount = Math.ceil(Math.random() * 6)
      for (let i = 0; i < randomIterationsAmount; i++) {
        possibleControls.forEach((controlName) => {
          data.push(this.generateControl(controlName));
        });
      }
      this._controls = data;
    } catch (error) {
      console.log('error: ', error);
    } finally {
      return this._controls;
    }
  }

  /**
   * Generates a single control with random values
   * @param controlName 
   * @returns Control
   */
  private generateControl(controlName: string): Control {
    const states: State[] = ['check', 'warning', 'error'];
    let control: Control = {
      name: controlName,
      state: states[Math.floor(Math.random() * states.length)],
      dev: Math.floor(Math.random() * 1),
      devOut: Math.floor(Math.random() * 1)
    };

    return control;
  }
}
