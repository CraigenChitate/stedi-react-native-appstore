import sayHello from '../utils/hello.josiah.mjs.mjs';
import assert from 'assert';

it ("Tests Hello World", ()=>{
   const hello = sayHello();
   console.log(hello);
   assert.equal(hello, "hello");
});