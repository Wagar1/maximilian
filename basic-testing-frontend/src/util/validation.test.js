import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validateStringNotEmpty()', ()=>{
    it('to throw an error if an empty string value passed to the function', () => {
        const input = '';
    
        const resultFn = () => { validateStringNotEmpty(input); }
    
        expect(resultFn).toThrow('');
    });
    
    it('should not throw an error if non-empty string will be provided', () => {
        const input = 'value';
    
        const resultFn = () => { validateStringNotEmpty(input); };
    
        expect(resultFn).not.toThrow();
    });
    
    it('should throw an error if anything except string will be provided', () => {
        const inputInt = 1;
        const inputBoolean = true;
    
        const resultFn = () => { validateStringNotEmpty(inputInt); }
        const resultFn2 = () => { validateStringNotEmpty(inputBoolean); }
    
        expect(resultFn).toThrow();
        expect(resultFn2).toThrow();
    });
});

describe('validateNumber()', () => {
    it('should throw an error if non-numeric value was provided', () => {
        const input = NaN;
        const input2 = '1';
    
        const resultFn = () => { validateNumber(input); }
        const resultFn2 = () => { validateNumber(input2); }
    
        expect(resultFn).toThrow();
        expect(resultFn2).toThrow();
    });
});