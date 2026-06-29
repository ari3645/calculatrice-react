import './App.css'

function App() {
  const calculate = () => {
    const input1 = document.getElementById('number1');
    const input2 = document.getElementById('number2');
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    let result;

    if (isNaN(num1)) {
      resultDiv.textContent = "Erreur : Veuillez entrer un premier nombre valide.";
      return;
    }

    if (operation !== 'squareRoot' && operation !== 'percentage') {
      if (isNaN(num2)) {
        resultDiv.textContent = "Erreur : Veuillez entrer un deuxième nombre valide.";
        return;
      }
    }

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          result = "Erreur (Division par 0 !)";
        } else {
          result = num1 / num2;
        }
        break;
      case 'pow':
        result = Math.pow(num1, num2);
        break;
      case 'squareRoot':
        if (num1 < 0) {
          result = "Erreur (Nombre négatif !)";
        } else {
          result = Math.sqrt(num1);
        }
        break;
      case 'percentage':
        result = num1 / 100;
        break;
      default:
        result = 'Opération invalide';
    }

    resultDiv.textContent = `Résultat : ${result}`;
  };

  return (
    <div id="calculator" style={{ margin: "50px", textAlign: "center" }}>
      <input type="number" id="number1" placeholder="Nombre 1" />
      <input type="number" id="number2" placeholder="Nombre 2 (si requis)" />
      
      <select id="operation">
        <option value="add">Addition (+)</option>
        <option value="subtract">Soustraction (-)</option>
        <option value="multiply">Multiplication (×)</option>
        <option value="divide">Division (÷)</option>
        <option value="pow">Puissance (x^y)</option>
        <option value="squareRoot">Racine Carrée (√x)</option>
        <option value="percentage">Pourcentage (% de x)</option>
      </select>

      <button onClick={calculate}>Calculer</button>
      <div id="result" style={{ marginTop: "20px", fontWeight: "bold" }}></div>
    </div>
  );
}

export default App;
