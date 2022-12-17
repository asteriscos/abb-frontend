import { useState } from "react";

/**
 * Returns an amount of random elements from an array
 * @param elements 
 * @param amount 
 * @returns 
 */
export const useRandomElements = (elements: Array<any>, amount: number = 5):
  [Array<any>, (elements: Array<any>) => void] => {

  const [randomElements, setRandomElements] = useState(elements);
  const setSlicedRandomElements = (elements: Array<any>) => {
    const slicedElements = [];

    // Push random elements in the response array until we get the desired amount
    while (slicedElements.length < amount) {
      const item = elements[Math.floor(Math.random() * elements.length)];
      slicedElements.push(item);
    }

    setRandomElements(slicedElements);
  }
  return [randomElements, setSlicedRandomElements];
}