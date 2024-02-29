function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var inputValue = document.getElementById('display').value.trim();

    if(inputValue == ""){
        alert("Please enter your values.");
        return;
    }
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
