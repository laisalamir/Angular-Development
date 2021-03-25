fetch('/data.json').then(responseStream =>{
    responseStream.json();
});