const { transformState } = require('../../src/util/stateUtil');

describe('StateUtil', () => {
    test('should find state UF when valid', () => {
        expect(transformState('sp')).toBe('SP');
    });

    test('should not find state UF when invalid', () => {
        expect(transformState('Sa')).toBeNull();
    });

    test('should find state when valid', () => {
        expect(transformState('são paulo')).toBe('SP');
    });

    test('should not find state when invalid', () => {
        expect(transformState('são paulos')).toBeNull();
    });

    test('should find state name when not normalized', () => {
        expect(transformState('SaO pAuLo')).toBe('SP');
    });
});
