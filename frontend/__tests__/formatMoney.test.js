import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
    it('works with fractional dollars', () => {
        expect(formatMoney(5)).toEqual('$0.05');
        expect(formatMoney(50)).toEqual('$0.50');
        expect(formatMoney(7)).toEqual('$0.07');
        expect(formatMoney(80)).toEqual('$0.80');
    });

    it('leaves cents off for whole dollars', () => {
        expect(formatMoney(8000)).toEqual('$80');
        expect(formatMoney(200)).toEqual('$2');
        expect(formatMoney(100000000)).toEqual('$1,000,000');
    });

    it('works with whole and fractional dollars', () => {
        expect(formatMoney(8015)).toEqual('$80.15');
        expect(formatMoney(303)).toEqual('$3.03');
        expect(formatMoney(220)).toEqual('$2.20');
        expect(formatMoney(45083367523767533849)).toEqual('$450,833,675,237,675,300.00');
    });
});