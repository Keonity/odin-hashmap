import './styles.css';
import { HashMap } from './hashmap';

console.log(`Welcome To The Odin Hashmap Project`);

const newHash = new HashMap();
console.log(newHash.getLength());

newHash.clear();
console.log(newHash.hashmap[2]);
console.log(newHash.entries());

console.log(`Final Test`);
newHash.set(`apple`, `red`);
console.log(newHash.entries());
newHash.set(`banana`, `yellow`);
console.log(newHash.entries());
newHash.set(`carrot`, `orange`);
newHash.set(`dog`, `brown`);
newHash.set(`elephant`, `gray`);
newHash.set(`frog`, `green`);
newHash.set(`grape`, `purple`);
newHash.set(`hat`, `black`);
newHash.set(`ice cream`, `white`);
newHash.set(`jacket`, `blue`);
newHash.set(`kite`, `pink`);
console.log(newHash.entries());
console.log(newHash.hashmap);
newHash.set(`lion`, `golden`);
newHash.set(`moon`, `silver`);
console.log(newHash.entries());
console.log(newHash.hashmap);
console.log(newHash.capacity);
console.log(newHash.entries());
newHash.set(`nether`, `red`);
newHash.set(`opal`, `rainbow`);
console.log(newHash.entries());
console.log(newHash.capacity);
console.log(newHash.size);
console.log(newHash.hashmap);
console.log(newHash.has(`moon`));
console.log(newHash.get(`moon`));

// 15 entries