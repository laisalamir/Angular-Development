function log(value){
console.log(value);
}

log('test');
/* ************* */
var sumOld = function (a, b){
    return a + b;
};
console.log(sumOld(5,15));

// arrow functions

var sum = (a, b) => a + b;
console.log(sum(5,5));


var sum = (a, b) =>{
    var x = 10;
    if( a + b) {

    }
    return a + b;
};
function Car(){
    this.foo = 'bar'
}
console.log(new Car());

var createObj = () => ({test: 123 });
console.log(createObj());

/* ************* */
var obj = {
    showContext: function showContext(){
        this.log('teste');

        setTimeout(
            function(){
                console.log(this);
        }.bind(this),
         1000
         );
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

/* ************* */
var obj = {
    showContext1: function showContext1(){
        //this = obj
        setTimeout(()=>{
            this.log('After 1000ms');
        },1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext1();