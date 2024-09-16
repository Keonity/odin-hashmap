import './styles.css';
import { HashMap } from './hashmap';

console.log(`Welcome To The Eye Of Odin Weather Project`);

const newHash = new HashMap();
const newHash2 = new HashMap(32);
console.log(newHash.getLength());
console.log(newHash2.getLength());