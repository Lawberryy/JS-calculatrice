let value;

let numbersKeysList = [0,1,2,3,4,5,6,7,8,9]

let resultBox = document.getElementById('result')
resultBox.textContent = 0


// let's generate the 10 digit keys
let numbersKeysSection = document.getElementById('calculator');

// Créer un objet pour stocker les valeurs correspondantes (au clic sur les numberKeys)
let values = {};

numbersKeysList.forEach(number => {
    let numberKey = document.createElement('div')
    numberKey.textContent = number
    numberKey.setAttribute('id', 'digit'+number)

    numbersKeysSection.appendChild(numberKey)

    // Assigner une valeur différente pour chaque number
    values[number] = number;
    // console.log(values[number]);

    // Ajouter un événement au clic sur chaque numberKey
    numberKey.addEventListener('click', function() {
        value = values[number];
        
        if (resultBox.textContent === '0') {
            resultBox.textContent = value;
        } else {
            resultBox.textContent += value; // Ajouter la valeur de value au contenu existant de resultBox.textContent
        }
        valueHistory.push(value);
        console.log(value);
    });
});

console.log(values)


// bouton remove de la calculatrice
let remove = document.querySelector('#remove');
let valueHistory = []; // Tableau pour stocker l'historique des valeurs (qui seront contenues dans resultBox.textContent)
remove.addEventListener('click', function() {
    let currentText = resultBox.textContent;
    if (currentText.length > 1) {
        resultBox.textContent = currentText.slice(0, -1); // Supprimer le dernier caractère de currentText
    } else {
        resultBox.textContent = '0'; // Si le texte contient un seul caractère, mettre à jour resultBox.textContent à "0"
    }
});


// bouton reset de la calculatrice
let reset = document.querySelector('#reset')
reset.addEventListener('click', function() {
    resultBox.textContent = 0
    valueHistory = []
})


// bouton comma (virgule)
let comma = document.querySelector('#comma');
comma.addEventListener('click', function() {
    // Vérifier si le contenu de resultBox.textContent est un nombre
    let currentValue = parseFloat(resultBox.textContent);
    if (!isNaN(currentValue)) { // si currentValue est un nombre (contraire de is not a number)
      // Ajouter une virgule uniquement si le contenu est un nombre
        let updatedValue = currentValue.toString() + '.';
        resultBox.textContent = updatedValue;
    }
});


// bouton percentage de la calculatrice
let percentage = document.getElementById('percent');
percentage.addEventListener('click', function() {
    let resultValue = parseFloat(resultBox.textContent, 10); // Convertir resultBox.textContent en un nombre décimal (il est important de mettre cette ligne à l'intérieur de la fonction et non à l'extérieur afin de toujours convertir en float la valeur la plus récente de resultBox.textContent)

    if (!isNaN(resultValue)) {
        let updatedValue = (resultValue / 100).toString();
        let decimalIndex = updatedValue.indexOf('.');
        if (decimalIndex !== -1) { // -1 est ce que renverrait decimalIndex s'il n'y avait pas de . dans updatedValue
            let decimalLength = updatedValue.length - decimalIndex - 1; // -1 car on supprime la position du '.' pour obtenir le bon nombre de chiffres après la virgule
            let precision = Math.min(decimalLength, 4); // prend le minimum entre decimalLength et 4 afin de définir le nombre de chiffres après la virgule (le nbre max sera donc tjrs de 4 chiffres après la virgule)
            updatedValue = parseFloat(updatedValue).toFixed(precision); // on reconvertit updatedValue en float en lui indiquant le nbre de chiffres après virgule
        }
        resultBox.textContent = updatedValue;
    }
    
    console.log('le résultat est : ' + resultValue)
});


let equalSign = document.getElementById('equals');
let sumBtn = document.getElementById('addition');
let minusBtn = document.getElementById('subtraction');
let multiBtn = document.getElementById('multiplication');
let divisionBtn = document.getElementById('division');


// système d'addition (+)
let currentNumber = 0;
let result = 0;
let operation = '';

sumBtn.addEventListener('click', function() {
    let inputValue = parseFloat(resultBox.textContent);
    if (!isNaN(inputValue)) {
        currentNumber += inputValue;
        resultBox.textContent = '';
        console.log(inputValue);
        operation = 'addition';
    }
});

// système de soustraction (-)
minusBtn.addEventListener('click', function() {
    let inputValue = parseFloat(resultBox.textContent);
    if (!isNaN(inputValue)) {
        currentNumber += inputValue;
        resultBox.textContent = '';
        console.log(inputValue);
        operation = 'subtraction';
    }
});

// système de multiplication (*)
multiBtn.addEventListener('click', function() {
    let inputValue = parseFloat(resultBox.textContent);
    if (!isNaN(inputValue)) {
        currentNumber += inputValue;
        resultBox.textContent = '';
        console.log(inputValue);
        operation = 'multiplication';
    }
});

// système de division (/)
divisionBtn.addEventListener('click', function() {
    let inputValue = parseFloat(resultBox.textContent);
    if (!isNaN(inputValue)) {
        currentNumber += inputValue;
        resultBox.textContent = '';
        console.log(inputValue);
        operation = 'division';
    }
});


//  equal sign
equalSign.addEventListener('click', function() {
    let inputValue = parseFloat(resultBox.textContent);
    if (!isNaN(inputValue)) {
        if (operation === 'addition') {
            result = currentNumber + inputValue;
        } else if (operation === 'subtraction') {
            result = currentNumber - inputValue;
        } else if (operation === 'multiplication') {
            result = currentNumber * inputValue;
        } else if (operation === 'division') {
            result = currentNumber / inputValue;
        }
        resultBox.textContent = result;
        currentNumber = 0;
        operation = '';

        console.log('le résultat est ' + result)
    }
});


// History
// resultBox.addEventListener('input', function() {
//     let historyDiv = document.getElementById('history');
//     historyDiv.textContent = resultBox.textContent;
// });

// equalSign.addEventListener('click', function() {
//     let historyDiv = document.getElementById('history');
//     historyDiv.textContent += resultBox.textContent + '\n';

//     // Faire défiler automatiquement vers le bas
//     historyDiv.scrollTop = historyDiv.scrollHeight;
// });