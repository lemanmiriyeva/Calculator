const darkMode = document.querySelector('#dark-mode');
const mode = document.querySelector('#mode');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
function setValue(val)
{
    result.value+=val
}
function calculate()
{
    let x = result.value
    let y = eval(x)
    result.value = y
}
function clearFunction()
{
    result.value = ""
}
darkMode.addEventListener('click',()=>{
    if (mode.getAttribute('href')=='style.css'){
        mode.href='dark.css';
    }
    else{
        mode.href='style.css';
    }
})