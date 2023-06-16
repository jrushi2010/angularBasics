import{Calculator} from './testservice';

describe('testservice',()=>{
    it('should add 2 numbers',()=>{
        const service = new Calculator();
        expect(service.add(2,2)).toBe(4);
    });
    it('should sub 2 numbers',()=>{
        const service = new Calculator();
        expect(service.subtract(2,2)).toBe(0);
    });
    it('should multiply 2 numbers',()=>{
        const service = new Calculator();
        expect(service.multiply(2,2)).toBe(4);
    });
})