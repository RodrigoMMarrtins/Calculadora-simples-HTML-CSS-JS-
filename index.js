function calculate() {
    event.preventDefault();
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let selector = document.querySelector("select").value

    let result = 0;
    switch(selector){
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
    }   

    let pResult = document.getElementById("result")
    pResult.innerHTML = result

    
}