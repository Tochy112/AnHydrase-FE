
//listing the zones in a multi-dimensional array

const zone = [
    [" Niger", "Benue", "Nassarawa","Plateau","Kogi", "Kwara"],
    ["Jagawa", "Kano", "Katsina", "Kaduna", "Kebbi", "Zamfara", "Sokoto"],
    [ "Gombe", "Bauchi", "Yobe", "Borno", "Adamawa", "Taraba" ],
    ["Akwa-Ibom", "Cross-River", "Bayelsa", "Rivers", "Delta", "Edo"],
    ["Abia", "Imo", "Ebonyi", "Enugu", "Anambara"],
    ["Ekiti", "Ondo", "Osun", "Oyo", "Ogun", "Lagos"]
];

console.log(zone[0].length);
console.log(zone[1].length);
console.log(zone[2].length);
console.log(zone[3].length);
console.log(zone[4].length);
console.log(zone[5].length);


//multiplication table
let num = [1,2,3,4,5,6,7,8,9,10,11,12];

function multiply(b){

    for(i=0; i<num.length; i++) {
        b = prompt('input a number to get the multiplication table:' );
        let result = num[i] * b;
        console.log(`${num[i]} * ${b} = ${result}`); 
    }
}
multiply();






//COMPUTING AREA OF A CIRCLE

/*let PIE = 3.14;
let r;
function area(r) {
    console.log ( 'Area =' + " " + PIE * Math.pow(r, 2));
} */
// area(4);

//OBJECT

/* const dev ={
    id: '1',

    skills:{
        php:'good'
    }
}; */

// console.log(dev.skills["php"]);
