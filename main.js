let num = [1,2,3,4,5,6,7,8,9,10,11,12];

function multiply(b){
    for(i=0; i<num.length; i++){
        let result = num[i] * b;
        console.log(`${num[i]} * ${b} = ${result}`);
    }   
}
multiply(2);


