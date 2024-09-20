import './styles.css';
import { HashMap } from './hashmap';

console.log(`Welcome To The Odin Hashmap Project`);

const newHash = new HashMap();
const newHash2 = new HashMap(32);
console.log(newHash.getLength());
console.log(newHash2.getLength());

console.log(`Apple Hash; ` + newHash.hash(`apple`));
console.log(`New Hash; ` + newHash.hash(`b`));
console.log(`Banana Hash; ` + newHash.hash(`banana`));
console.log(`Berry Hash; ` + newHash.hash(`berry`));
newHash.set('apple', 'red');
newHash.hashmap[2].toString();

newHash.set('b', 'blue');
newHash.hashmap[2].toString();
newHash.set('apple', 'fruit');
newHash.hashmap[2].toString();

console.log(newHash.get(`apple`));
console.log(newHash.get(`b`));

console.log(newHash.has(`apple`));
console.log(newHash.has(`fl`));