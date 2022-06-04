/* eslint-disable no-undef */
const {
  mdLinks,
} = require('../src/index.js');

describe('mdLinks', () => {
  const arrayOfObjectsWithValidateFalse = [
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\HP\\Documents\\Laboratoria-LIM017\\MD-links\\LIM017-md-links\\sampleDirectory\\directory3\\archive3.md',
    },
  ];
  it('Debería devolverme un array de objetos de links con las propiedades href,text,file', () => {
    return mdLinks('./sampleDirectory/directory3/archive3.md', { validate: false })
      .then((resolve) => {
        expect(resolve).toEqual(arrayOfObjectsWithValidateFalse);
      });
  });
  const arrayOfObjectsWithValidateTrue = [
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\HP\\Documents\\Laboratoria-LIM017\\MD-links\\LIM017-md-links\\sampleDirectory\\directory3\\archive3.md',
      status: 200,
      ok: 'OK',
    },
  ];
  it('Debería devolverme un array de objetos de links con las propiedades href,text,file,status y ok', () => {
    return mdLinks('./sampleDirectory/directory3/archive3.md', { validate: true })
      .then((resolve) => {
        expect(resolve).toEqual(arrayOfObjectsWithValidateTrue);
      });
  });
  it('Debería devolverme un string "there are no links"', () => {
    return mdLinks('./sample.md')
      .catch((reject) => {
        expect(reject).toBe('there are no links');
      });
  });
  it('Debería devolverme un string "the path is invalid"', () => {
    return mdLinks('./personalDirectory.md', { validate: true })
      .catch((reject) => {
        expect(reject).toBe('the path is invalid');
      });
  });
});
