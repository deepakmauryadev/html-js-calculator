var result_showed = false;

function insert(num) {
    if(result_showed === true) {
        document.form.calc_screen.value = '';
        result_showed = false;
    }
    document.form.calc_screen.value += num;
}

function result() {
    var input = document.form.calc_screen.value;
    if(input) {
        result_showed = true;
        document.form.calc_screen.value = eval(document.form.calc_screen.value)
    } else {
        alert('Empty expression')
    }
}

function back() {
    var input = document.form.calc_screen.value
    var end  = input.length - 1;
    document.form.calc_screen.value = input.substring(0, end);
}

function all_clear() {
    document.form.calc_screen.value = '';
}