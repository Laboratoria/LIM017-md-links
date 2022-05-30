import {transformToAbsolutePath, validatePath, getFileMd} from '../md-links.js';

const routeTest = 'C:\\Users\\Madelen\\LIM017-md-links\\documents';
const readFileTest= 
[
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: './documents/file2.md'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: './documents/file2.md'
  }
];

describe('validatePath',()=>{
  it('show resolve path', () =>{
    expect(typeof validatePath('C:\\Users\\Madelen\\LIM017-md-links\\documents')).toBe('boolean');
  })
 });
 describe('validatePath',()=>{
  it('show resolve path', () =>{
    expect(typeof validatePath('C:\\Users\\MadelenLIM017-md-lin')).toBe('boolean');
  })
 });

describe('transformToAbsolutePath',()=>{
 it('show resolve path in windows', () =>{
  expect(transformToAbsolutePath('./documents')).toEqual(routeTest);
})
});

describe('getFileMd',()=>{
  it('show if it is a directory or a file', () =>{
   expect(getFileMd('./documents')).toEqual([ "documents\\file1.md", "documents\\file2.md", 
   "documents\\file3.md","documents\\file1.md", "documents\\file2.md","documents\\file3.md"]);
 })
 });



