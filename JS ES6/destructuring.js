var arr =['Apple','Banana','Orange',['Tomato']];

var apple = arr[0];
var banana= arr[1];
var orange= arr[2];
var tomato = arr[3][0];

// destructurung assignment

var [apple2, banana2, orange2, [tomato2]]= ['Apple', 'Banana','Orange',['tomato']];
//console.log(apple, apple2);
console.log(tomato2)