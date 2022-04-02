
let s = 60
let m = 60
let h = 24

let contain = document.querySelector("div");

function count(){
    if(h == 0 && m == 0 && s == 0){
        alert("nice one");
        clearInterval(x)
        
    } else if(h!== 0 && m !== 0 && s== 0){
        m --
        s = 59

    }else if(h!==0 && m == 0 && s==0){
        h--
        m = 59
        s = 59
    }else if (h == 0 && m !== 0 && s == 0){
        m--
        s = 59
    }else{
        s--
    }
    contain.innerText = `${h}hr ${m}m ${s}s`
}
let x = setInterval(count, 1000)



