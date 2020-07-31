const { sum, sub, div, mult, sumTri } = require('../teste')

describe('A função sum deve somar os objetos', () => {

    it('deve somar os dois parametros', () => {
        expect(sum(1, 2)).toBe(3)
        expect(sum(4, 2)).toBe(6)
        expect(sum(4, 5)).toBe(9)
        expect(sum(0, 2)).toBe(2)
    })
    it('deve retornar undefined ao calcular com !number', () => {
        expect(sum('string', 2)).toBe(undefined)
    });
});


describe(' A função deve subtair os dois paramentros um do outro', () => {
    it('Deve subtrair os dois parametros', () => {
        expect(sub(1, 2)).toBe(-1)
        expect(sub(10, 2)).toBe(8)
        expect(sub(50, 43)).toBe(7)
        expect(sub(4, 3)).toBe(1)


        //expect(sub('string', 2)).toBe(undefined)

    })
});
describe('A função mult deve multiplicar os parametros', () => {
    it('deve multiplicar os dois parametros', () => {
        expect(mult(1, 2)).toBe(2)
        expect(mult(2, 2)).toBe(4)
        expect(mult(4, 2)).toBe(8)
        expect(mult(8, 2)).toBe(16)


        //  expect(mult('string', 2)).toBe(undefined)      
    })

});
describe('A função mulTri devera somar 3 numeros', () => {
    it('deve somar  os tres parametros', () => {
        expect(sumTri(1, 2, 6)).toBe(9)
        expect(sumTri(2, 2, 6)).toBe(10)
        expect(sumTri(4, 2, 6)).toBe(12)
        expect(sumTri(8, 2, 6)).toBe(16)


        //  expect(mult('string', 2)).toBe(undefined)      
    })

});

