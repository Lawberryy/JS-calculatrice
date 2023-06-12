let resultBox = document.getElementById('result');
resultBox.textContent = '0';

// let's generate the 10 digit keys
let numbersKeysList = [0,1,2,3,4,5,6,7,8,9]
let numbersKeysSection = document.getElementById('calculator');

numbersKeysList.forEach(number => {
    let numberKey = document.createElement('div')
    numberKey.textContent = number
    numberKey.setAttribute('id', 'digit'+number)

    numbersKeysSection.appendChild(numberKey)

    numberKey.addEventListener('click', function(){
        appendNumber(number)
    })
});


function appendNumber(number) {
    if (resultBox.textContent === '0') {
        resultBox.textContent = number
    } else {
        resultBox.textContent += number;
    }
    console.log(number)
}

function appendOperator(operator) {
    if (resultBox.textContent === '0') {
        resultBox.textContent = operator
    } else {
        resultBox.textContent += operator;
    }
}

function calculate() {
    console.log('le résultat de ' + resultBox.textContent + ' est :')
    let historyBox = document.getElementById('history');
    let historyLine = document.createElement('div');
    historyLine.style.marginBottom = '8px';
    historyLine.textContent += resultBox.textContent + ' = ';
    historyBox.appendChild(historyLine);
    try {
        resultBox.textContent = eval(resultBox.textContent);
        console.log(resultBox.textContent)
        historyLine.textContent += resultBox.textContent;
    } catch (error) {
        resultBox.textContent = "Error: " + error.message;
        resultBox.style.fontSize = '22px';
        console.log("Une erreur s'est produite : " + error.message);
    }
}

function clearResult() {
    resultBox.textContent = "0";
    console.log('Clear Result')
}

function deleteLast() {
    let currentText = resultBox.textContent;
    if (currentText.length > 1) {
        resultBox.textContent = currentText.slice(0, -1); // Supprimer le dernier caractère de currentText
    } else {
        resultBox.textContent = '0'; // Si le texte contient un seul caractère, mettre à jour resultBox.textContent à "0"
    }
}