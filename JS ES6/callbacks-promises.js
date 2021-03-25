// Callbacks
function doSomething(callback) {
    setTimeout(function () {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherthing(callback) {
    setTimeout(function () {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherthing(function (data) {
                    var processedData2 = data.split('');
                    try {
                    setTimeout(function () {
                        console.log(processedData, processedData2)
                    }, 1000);
                    } catch (err){
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        //handle error
    }
}
doAll();

// Promises
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherthingPromise = new Promise((resolve, reject) => {
  //  throw new Error('Something went wrong');
    setTimeout(function () {
        //did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data=> console.log(data)).catch(error=>console.log(error));
doSomethingPromise.then(data => doOtherthingPromise).then(data2 => console.log(data2)).catch();
/**Uma promise pode ter tres status
 * pending= quando esta pendente, ou seja, em execução
 * fulfilled= terminou de exevutar
 * rejected= Caso aconteça algum erro.
 */