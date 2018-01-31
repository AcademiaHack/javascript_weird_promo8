// var a = "1";
// var b = "2";

// var c = b;
// var d = c + "5";

// var a = [];
// console.log(typeof(a));
// console.log(typeof([]));
// console.log(typeof(array));

// console.log(typeof(NaN));

// var a = 1;
// var b = [1,2,3];
// var c = "hola mundo";
// var d = { hola: "mundo" }
// var e = function() {
//   console.log('chao mundo');
// }

// function e() {
//   var f;
//   console.log('chao mundo');
//   f = function() {
//     console.log('KHE?');
//   }
//   f();
// }

// console.log(e());

// var c = 5;

// function hola() {
//   var a = 1;

//   (function chao() {
//     var b = 2;
//     console.log(c);
//     console.log(a);
//     console.log(b);
//     return b;
//   })();
// }

// hola();

// function each(array, callback) {
//   for(var i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
//   console.log('EACH EXITOSO');
// }

// console.log('HOLA');
// each([2,3,4], function(el){
//   console.log(el);
// });
// console.log('CHAO');

// var balance = {
//   left: 0,
//   right: 0
// };

// var bucketLeft = {
//   current: 0,
//   max: 20
// };
// var bucketRight = {
//   current: 0,
//   max: 40
// };

// var leftInterval = setInterval(function(){
//   if(bucketLeft.current < bucketLeft.max) {
//     bucketLeft.current++;
//   } else {
//     clearInterval(leftInterval);
//   }
//   console.log("|"+bucketLeft.current+"| " + " |"+bucketRight.current+"|");
// }, 1000);

// var rightInterval = setInterval(function(){
//   if(bucketRight.current < bucketRight.max) {
//     bucketRight.current += 2;
//   } else {
//     clearInterval(rightInterval);
//   }
//   console.log("|"+bucketLeft.current+"| " + " |"+bucketRight.current+"|");
// }, 500);

// console.log(leftInterval);

// for(var i = 0; i < 5; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 3000);
// }

// var b = 4;

// for(var i = 0; i < 5; i++) {
//   setTimeout((function outer(a){
//     return function inner() {
//       // console.log(a);
//       console.log(b);
//     }
//   }(i)), 3000);
// }

var test = {
  prop: 42,
  func: function() {
    return this.prop;
  }
}
console.log(test.func());