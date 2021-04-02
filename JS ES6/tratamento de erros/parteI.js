class CustomError extends Error{
    constructor ({ message, data}){
        super(message);
        this.data = data;
    }
}

try{
 //console.log(name);
  const name = 'Laisa Lamir';
  const myError = new CustomError({
      message: 'Custom message on custom error',
      data: {
          type: 'Server error'
      }
    });

  throw myError;
} catch (err){
 // console.log(err);
  //console.log(err.data);
  if (err.data.type === 'Server error'){
      console.log('Laisa Lamir');
  } else{
    console.log('Camila Silva');
  }
} finally{
    console.log('Keep going ..');
}