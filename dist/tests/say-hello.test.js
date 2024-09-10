import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello raden', function () {
        expect(sayHello('raden')).toBe('Hello raden');
    });
});
