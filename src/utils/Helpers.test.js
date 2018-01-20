import * as Helpers from './Helpers'

test("Helpers camelCaseToReadable Works", () => {
   expect(Helpers.camelCaseToReadable('wantToRead')).toBe('Want To Read');
});