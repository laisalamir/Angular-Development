var prop1 =  'Digital Innovation One'

var obj = {
    prop1: prop1
};
console.log(obj);

// **********************

function method1 (){
    console.log('method called');
}

var obj = {
    method1
};
obj.method1()
// **********************

var obj1 = {
    sum: function sum(a, b){
        return a + b;
    }
};
console.log(obj1.sum(1, 5));
// **********************´

var propNome = 'test';
var obj3 = {};

obj3[propNome] = 'prop value';
console.log(obj3)