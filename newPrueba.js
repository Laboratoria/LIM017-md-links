import {mdLinks,  getLinks} from './md-links.js';
const rutaCorrecta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\texto.md';
const rutaErronea = 'src\textss.txt';
const rutatext = 'src\text.txt';
const rutaAbsoluta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\README.md';
const rutaCarpeta = 'C:\Users\Jimena\Downloads\laboratoria\LIM017-md-links\src';


const ruta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src\\Archivos\\prueba.md';
const rutaError = 'src/Archivos/pruebass.md'
const carpeta = 'C:\\Users\\Jimena\\Downloads\\laboratoria\\LIM017-md-links\\src';
console.log(mdLinks(ruta))
console.log(getLinks(mdLinks(ruta)))
//console.log(mdLinks(rutaCorrecta));
//console.log(getLinks(mdLinks(rutaCorrecta)))