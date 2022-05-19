let btns = document.querySelectorAll('button');
let output = document.getElementById('output');

const mathOperations = ["*", "/", "+", "-"];

var input = "";
var wasOperandPressed = false


for (i of btns) {
    i.addEventListener('click', event => {
        var buttonValue = event.target.textContent;

        // if button pressed is a number...
        if(parseInt(buttonValue) || buttonValue == "0" || buttonValue == "."){
            //... Add to string
            input += buttonValue;
        }

        // If button is a math operator and it is a logically good time to add math operator...
        else if (mathOperations.includes(buttonValue) && input.length > 0 && !mathOperations.includes(input.slice(-1)) && wasOperandPressed == false){
            // ... add math operator
            input += buttonValue;
            wasOperandPressed = true
        }

        // If the backspace was pressed...
        else if(buttonValue == "D"){
            // ... Remove last value from input
            input = input.slice(0,-1);
        }

        // If  clear button was pressed...
        else if(buttonValue == "CLS"){
            // ... reset input
            input = ""
        }

        if (buttonValue != "="){
            output.value = input;
        }else{

            numerators = input.split(/[/,+,*,-]+/)
            operations = input.replace(/[0-9,.]/g, '');

            let value = numerators[0];

            
            for (let i = 0; i < operations.length; i++) {

                if(operations[i] == "*"){
                    value = value * numerators[i+1]
                }else if(operations[i] == "/"){
                    value = value / numerators[i+1]
                }else if(operations[i] == "+"){
                    value = parseFloat(value) + parseFloat(numerators[i+1])
                }else if(operations[i] == "-"){
                    value = value - numerators[i+1]
                }

            }
            
            output.value = value;
            wasOperandPressed = false;
        }

  });
}
