bind

funtion abc(){
  console.log(this.a);
}

Function.protoType.bind = (fn, obj) => {
  return function() {
    fn.call(obj);
  };
}

var obj1 = {
  a: 'vinit',
};
var ca = bind(abc, obj1);
var y = x.abc.bind()

ca();
abc()

cache function

function cache(func){
    var store = {};
    return function(arg1, arg2) {
       if (store[arg1][arg2]) {
          return store[arg1][arg2];
       }
       var sum = func();
       store[arg1] = {};
       store[arg1][arg2] = sum;
       return sum;
    }
}

function sum(a,b) { return a+b;}
function multi(a,b) { return a*b;}

var cacheSum1 = cache(sum);
var cacheMulti1 = cache(multi);

typeof cacheSum1

cacheSum1(2,3) - 5
cacheSum1(3,4) - 7
cacheSum1(2,3) - 5
cacheMulti1(2,3) - 5
