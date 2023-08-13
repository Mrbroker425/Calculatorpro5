let results = document.getElementById("InputNum");

let Calculator =(number)=>{
    results.value += number;
}

let Results=()=>{
    try {
        results.value = eval(results.value);
    } catch (error) {
        alert("Please enter correct Value");
    }
}
function Del(){
    results.value = results.value.slice(0,-1)
      
}
function Clear(){
    results.value=" ";
}