let output=document.getElementById('screen');

const display = (num) => {
    output.value += num
}
const Calculate = () => {
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert('Invalid input')
    }
}
const Clear = () => {
    output.value = "";
}
const del = () => {
    output.value = output.value.slice(0,-1)
}