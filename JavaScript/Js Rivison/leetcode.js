// function calc(val){

// return {
//         add(val1){
//             var a = val + val1
//             return a
//         },

//         sub(val1){
//             var b = val - val1
//             return b
//         }
//     }

//     // return obj
// }

// console.log(calc(5).add(5));                        
// console.log(calc(7).sub(3));  


// function calc(val){


//      function   add(val1){
//             var a = val + val1
//             return a
//         }

//        function sub(val1){
//             var b = val - val1
//             return b
//         }

//         return obj ={
//             add, sub
//         }

//     }

    
// console.log(calc(5).add(5));                        
// console.log(calc(7).sub(3));  


//     var createCounter = function(init) {

//     return obj = {
//         increment(init){
//           var a  = init++
//           return a 
//         },
    
//         decrement(init){
//           var b  = --init
//           return b 
//         },

//         reset(init){
//           var c = init
//           return c
//         }

//     }
// };


// const counter = createCounter()
// console.log(counter.increment(5));
// console.log(counter.reset(5));
// console.log(counter.decrement(5));



function square (n){
  return n*n
}

function memoize(func){
   let cache ={}

   return function(...args){
    
    let n = args[0]

    if(n in args){
      return cache[n]
    }

    else{
      let result = func(n)
      cache[n] = result
      return result
    }

   }
}


console.time();
let effResult = memoize(square)
console.log(effResult(5));
console.timeEnd();

console.time();
console.log(effResult(5));
console.timeEnd();




 
// console.time();
// console.log(square(5));
// console.timeEnd();


