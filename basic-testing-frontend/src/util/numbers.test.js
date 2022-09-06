import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";


describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        const value = '1';
    
        const result = transformToNumber(value);
    
        expect(result).toBeTypeOf('number');
    });
    
    it('should yield NaN for non-transformable values', () => {
        const value = 'v';
    
       const result = transformToNumber(value);
        
        expect(result).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    });
});