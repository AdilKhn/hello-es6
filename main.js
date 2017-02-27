import {getGlobalState, setGlobalState} from './MySingleton.js';



setGlobalState('name', 'homer');

console.log(getGlobalState('name'));
setGlobalState('name', 'marge');
console.log(getGlobalState('name'));
