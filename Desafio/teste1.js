let limit = parseInt(gets());
for (let i=0; i < limit; i++){
    let line = gets().split(" ");
    let x = parseInt(line[0]);
    let y = parseInt(line[1]);
    if (y == 0){
        console.log("divisao impossivel");
    }else{
        let divisao = parseFloat(x / y).toFixed(1);
        console.log(divisao);
    }
}