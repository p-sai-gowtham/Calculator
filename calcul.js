const inp = document.querySelector('input')

document.addEventListener('click', clickBtn)
function clickBtn(e) {
    e.preventDefault();
    const val = e.target.value;
    if (val != 'clear' && val != 'reset' && val != '=' && val != 'nagation') {
        inp.value += val;
    } else if (val == 'clear') {
        inp.value = inp.value.substring(0, inp.value.length - 1);
    } else if (val == 'reset') {
        inp.value = '';
    } else if (val == '=') {
        inp.value = eval(inp.value);
    } else if (val == 'nagation') { 
        if (inp.value.substring(0, 1) == '-') {
            inp.value = inp.value.substring(1, inp.value.length);
        } else if (inp.value.substring(0, 1) != '-') { 
            inp.value = `-${inp.value}`;
        }
    }
}
