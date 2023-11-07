let finalMassa = 0;
let finalMilei = 0;

const candidatos = [
  {
    nombre: "Massa",
    porcentajeVotos: 36.68,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#massa-massa"),
      porcentajeMilei: document.querySelector("#massa-milei"),
      porcentajeBlanco: document.querySelector("#massa-blanco"),
      resultadoMassa: document.querySelector("#resultado-massa-massa"),
      resultadoMilei: document.querySelector("#resultado-massa-milei"),
      resultadoBlanco: document.querySelector("#resultado-massa-blanco"),
      proporcionMassa: document.querySelector("#ma-ma"),
      proporcionMilei: document.querySelector("#ma-mi"),
      proporcionBlanco: document.querySelector("#ma-bl"),
    },
  },
  {
    nombre: "Milei",
    porcentajeVotos: 29.98,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#milei-massa"),
      porcentajeMilei: document.querySelector("#milei-milei"),
      porcentajeBlanco: document.querySelector("#milei-blanco"),
      resultadoMassa: document.querySelector("#resultado-milei-massa"),
      resultadoMilei: document.querySelector("#resultado-milei-milei"),
      resultadoBlanco: document.querySelector("#resultado-milei-blanco"),
      proporcionMassa: document.querySelector("#mi-ma"),
      proporcionMilei: document.querySelector("#mi-mi"),
      proporcionBlanco: document.querySelector("#mi-bl"),
    },
  },
  {
    nombre: "Bullrich",
    porcentajeVotos: 23.83,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#bullrich-massa"),
      porcentajeMilei: document.querySelector("#bullrich-milei"),
      porcentajeBlanco: document.querySelector("#bullrich-blanco"),
      resultadoMassa: document.querySelector("#resultado-bullrich-massa"),
      resultadoMilei: document.querySelector("#resultado-bullrich-milei"),
      resultadoBlanco: document.querySelector("#resultado-bullrich-blanco"),
      proporcionMassa: document.querySelector("#bu-ma"),
      proporcionMilei: document.querySelector("#bu-mi"),
      proporcionBlanco: document.querySelector("#bu-bl"),
    },
  },
  {
    nombre: "Schiaretti",
    porcentajeVotos: 6.78,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#schiaretti-massa"),
      porcentajeMilei: document.querySelector("#schiaretti-milei"),
      porcentajeBlanco: document.querySelector("#schiaretti-blanco"),
      resultadoMassa: document.querySelector("#resultado-schiaretti-massa"),
      resultadoMilei: document.querySelector("#resultado-schiaretti-milei"),
      resultadoBlanco: document.querySelector("#resultado-schiaretti-blanco"),
      proporcionMassa: document.querySelector("#sc-ma"),
      proporcionMilei: document.querySelector("#sc-mi"),
      proporcionBlanco: document.querySelector("#sc-bl"),
    },
  },
  {
    nombre: "Bregman",
    porcentajeVotos: 2.7,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#bregman-massa"),
      porcentajeMilei: document.querySelector("#bregman-milei"),
      porcentajeBlanco: document.querySelector("#bregman-blanco"),
      resultadoMassa: document.querySelector("#resultado-bregman-massa"),
      resultadoMilei: document.querySelector("#resultado-bregman-milei"),
      resultadoBlanco: document.querySelector("#resultado-bregman-blanco"),
      proporcionMassa: document.querySelector("#br-ma"),
      proporcionMilei: document.querySelector("#br-mi"),
      proporcionBlanco: document.querySelector("#br-bl"),
    },
  },
  {
    nombre: "en blanco",
    porcentajeVotos: 2.04,
    elementosHTML: {
      porcentajeMassa: document.querySelector("#blanco-massa"),
      porcentajeMilei: document.querySelector("#blanco-milei"),
      porcentajeBlanco: document.querySelector("#blanco-blanco"),
      resultadoMassa: document.querySelector("#resultado-blanco-massa"),
      resultadoMilei: document.querySelector("#resultado-blanco-milei"),
      resultadoBlanco: document.querySelector("#resultado-blanco-blanco"),
      proporcionMassa: document.querySelector("#bl-ma"),
      proporcionMilei: document.querySelector("#bl-mi"),
      proporcionBlanco: document.querySelector("#bl-bl"),
    },
  },
];

// Función para limitar y ajustar los valores de los inputs
function limitarYAjustarInputs(input1, input2, input3) {
  let valorInput1 = parseFloat(input1.value) || 0,
    valorInput2 = parseFloat(input2.value) || 0,
    valorInput3 = parseFloat(input3.value) || 0;

  valorInput1 = Math.max(0, Math.min(100, valorInput1));

  // Ajustar el valor de input1 y recalcular input2 e input3
  valorInput2 = Math.max(0, Math.min(100 - valorInput1, valorInput2));
  valorInput3 = Math.max(
    0,
    Math.min(100 - valorInput1 - valorInput2, valorInput3)
  );

  // Ajustar el valor de input3 para asegurarse de que la suma sea 100
  valorInput3 = 100 - valorInput1 - valorInput2;

  input1.value = valorInput1;
  input2.value = valorInput2;
  input3.value = valorInput3;

  return { input1: valorInput1, input2: valorInput2, input3: valorInput3 };
}

// Función para calcular los porcentajes de Massa y Milei y actualizar el ancho de las barras de proporción
function calcularPorcentajes(candidato) {
  const porcentajeMassa = parseFloat(
    candidato.elementosHTML.porcentajeMassa.value
  );
  const porcentajeMilei = parseFloat(
    candidato.elementosHTML.porcentajeMilei.value
  );
  const porcentajeBlanco = parseFloat(
    candidato.elementosHTML.porcentajeBlanco.value
  );
  const totalVotos = candidato.porcentajeVotos;

  // Calcular el porcentaje para Massa y Milei
  const porcentajeParaMassa = (porcentajeMassa / 100) * totalVotos;
  const porcentajeParaMilei = (porcentajeMilei / 100) * totalVotos;
  const porcentajeParaBlanco = (porcentajeBlanco / 100) * totalVotos;

  // Actualizar los resultados en el HTML
  candidato.elementosHTML.resultadoMassa.textContent =
    porcentajeParaMassa.toFixed(2);
  candidato.elementosHTML.resultadoMilei.textContent =
    porcentajeParaMilei.toFixed(2);
  candidato.elementosHTML.resultadoBlanco.textContent =
    porcentajeParaBlanco.toFixed(2);

  // Actualizar el ancho de las barras de proporción
  candidato.elementosHTML.proporcionMassa.style.width = `${porcentajeMassa}%`;
  candidato.elementosHTML.proporcionMilei.style.width = `${porcentajeMilei}%`;
  candidato.elementosHTML.proporcionBlanco.style.width = `${porcentajeBlanco}%`;

  calcularResultadoFinal();
}

// Asignar la función a los eventos 'input' de los elementos de entrada
candidatos.forEach((candidato) => {
  candidato.elementosHTML.porcentajeMassa.addEventListener("input", () => {
    const porcentajes = limitarYAjustarInputs(
      candidato.elementosHTML.porcentajeMassa,
      candidato.elementosHTML.porcentajeMilei,
      candidato.elementosHTML.porcentajeBlanco
    );
    calcularPorcentajes(candidato);
  });

  candidato.elementosHTML.porcentajeMilei.addEventListener("input", () => {
    const porcentajes = limitarYAjustarInputs(
      candidato.elementosHTML.porcentajeMilei,
      candidato.elementosHTML.porcentajeMassa,
      candidato.elementosHTML.porcentajeBlanco
    );
    calcularPorcentajes(candidato);
  });
  candidato.elementosHTML.porcentajeBlanco.addEventListener("input", () => {
    const porcentajes = limitarYAjustarInputs(
      candidato.elementosHTML.porcentajeMilei,
      candidato.elementosHTML.porcentajeMassa,
      candidato.elementosHTML.porcentajeBlanco
    );
    calcularPorcentajes(candidato);
  });
});

// Calcular el resultado final
const resultadoFinalMassa = document.querySelector("#resultadoFinalMassa");
const resultadoFinalMilei = document.querySelector("#resultadoFinalMilei");
const resultadoFinalBlanco = document.querySelector("#resultadoFinalBlanco");
var totalMassaElement = document.getElementById("totalMassaValor");
var totalMileiElement = document.getElementById("totalMileiValor");
var totalBlancoElement = document.getElementById("totalBlancoValor");

function calcularResultadoFinal() {
  let totalMassa = 0;
  let totalMilei = 0;
  let totalBlanco = 0;

  candidatos.forEach((candidato) => {
    const porcentajeMassa =
      parseFloat(candidato.elementosHTML.porcentajeMassa.value) || 0;
    const porcentajeMilei =
      parseFloat(candidato.elementosHTML.porcentajeMilei.value) || 0;
    const porcentajeBlanco =
      parseFloat(candidato.elementosHTML.porcentajeBlanco.value) || 0;

    if (
      !isNaN(porcentajeMassa) &&
      !isNaN(porcentajeMilei) &&
      !isNaN(porcentajeBlanco)
    ) {
      totalMassa += (porcentajeMassa / 100) * candidato.porcentajeVotos;
      totalMilei += (porcentajeMilei / 100) * candidato.porcentajeVotos;
      totalBlanco += (porcentajeBlanco / 100) * candidato.porcentajeVotos;
      totalMassaElement.textContent = totalMassa.toFixed(2) + "%";
      totalMileiElement.textContent = totalMilei.toFixed(2) + "%";
      totalBlancoElement.textContent = totalBlanco.toFixed(2) + "%";
    }
  });

  if (totalMassa + totalMilei !== 0) {
    finalMassa = (totalMassa / (totalMassa + totalMilei)) * 100;
    finalMilei = (totalMilei / (totalMassa + totalMilei)) * 100;

    resultadoFinalMassa.textContent = finalMassa.toFixed(2) + "%";
    resultadoFinalMilei.textContent = finalMilei.toFixed(2) + "%";
  } else {
    resultadoFinalMassa.textContent = "";
    resultadoFinalMilei.textContent = "";
  }
}

calcularResultadoFinal();

// Submit btn y pantalla modal
document.getElementById("submitBtn").addEventListener("click", function () {
  if (finalMassa === 0 && finalMilei === 0) {
    alert("Ingresá qué valores estimás de cada candidato");
  } else {
    let resultados = [];

    candidatos.forEach((candidato) => {
      const nombreCandidato = candidato.nombre;
      const porcentajeVotos = candidato.porcentajeVotos;
      const porcentajeMassa =
        parseFloat(candidato.elementosHTML.porcentajeMassa.value) || 0;
      const porcentajeMilei =
        parseFloat(candidato.elementosHTML.porcentajeMilei.value) || 0;

      resultados.push(
        `Del ${porcentajeVotos}% que sacó ${nombreCandidato}, <br>se van ${porcentajeMassa}% para Massa, ${porcentajeMilei}% para Milei.`
      );
    });

    calcularResultadoFinal();

    const screenshot = document.getElementById("screenshot");
    const resultadosCapturados = document.getElementById("resultadoCapturado");
    screenshot.style.display = "flex";
    resultadosCapturados.innerHTML = `
      <h3>RESULTADOS ESTIMADOS:</h3>
      <ul>
        ${resultados.map((resultado) => `<li>${resultado}</li>`).join("")}
      </ul>
      <div class="flex">
        <div>
          <img src="./img/massa.png" alt="massa" class="retratocapt"/>
        </div>
        <div>
          <span class="fontcapt">${finalMassa.toFixed(2)}%</span>
        </div>
      </div>
      <div class="flex">
        <div>
          <img src="./img/milei.png" alt="milei" class="retratocapt"/>
        </div>
        <div>
          <span class="fontcapt">${finalMilei.toFixed(2)}%</span>
        </div>
      </div>
    `;

    document
      .getElementById("screenshot")
      .addEventListener("click", function () {
        screenshot.style.display = "none";
      });
  }
});
