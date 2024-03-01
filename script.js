// Define an array of chemical elements with their atomic numbers, symbols, and atomic masses
var chemicalElements = [
  // Group 1 (Alkali metals - s-block)
  { name: "Hydrogen", symbol: "H", atomicNumber: 1, atomicMass: 1 },
  { name: "Lithium", symbol: "Li", atomicNumber: 3, atomicMass: 7 },
  { name: "Sodium", symbol: "Na", atomicNumber: 11, atomicMass: 23 },
  { name: "Potassium", symbol: "K", atomicNumber: 19, atomicMass: 39 },
  { name: "Rubidium", symbol: "Rb", atomicNumber: 37, atomicMass: 85 },
  { name: "Cesium", symbol: "Cs", atomicNumber: 55, atomicMass: 133 },
  { name: "Francium", symbol: "Fr", atomicNumber: 87, atomicMass: 223 },

  // Group 2 (Alkaline earth metals - s-block)
  { name: "Beryllium", symbol: "Be", atomicNumber: 4, atomicMass: 9 },
  { name: "Magnesium", symbol: "Mg", atomicNumber: 12, atomicMass: 24 },
  { name: "Calcium", symbol: "Ca", atomicNumber: 20, atomicMass: 40 },
  { name: "Strontium", symbol: "Sr", atomicNumber: 38, atomicMass: 88 },
  { name: "Barium", symbol: "Ba", atomicNumber: 56, atomicMass: 137 },
  { name: "Radium", symbol: "Ra", atomicNumber: 88, atomicMass: 226 },

  // Transition metals (d-block)
  { name: "Scandium", symbol: "Sc", atomicNumber: 21, atomicMass: 45 },
  { name: "Titanium", symbol: "Ti", atomicNumber: 22, atomicMass: 48 },
  { name: "Vanadium", symbol: "V", atomicNumber: 23, atomicMass: 51 },
  { name: "Chromium", symbol: "Cr", atomicNumber: 24, atomicMass: 52 },
  { name: "Manganese", symbol: "Mn", atomicNumber: 25, atomicMass: 55 },
  { name: "Iron", symbol: "Fe", atomicNumber: 26, atomicMass: 56 },
  { name: "Cobalt", symbol: "Co", atomicNumber: 27, atomicMass: 59 },
  { name: "Nickel", symbol: "Ni", atomicNumber: 28, atomicMass: 59 },
  { name: "Copper", symbol: "Cu", atomicNumber: 29, atomicMass: 64 },
  { name: "Zinc", symbol: "Zn", atomicNumber: 30, atomicMass: 65 },

  // Group 13 (p-block)
  { name: "Boron", symbol: "B", atomicNumber: 5, atomicMass: 11 },
  { name: "Aluminium", symbol: "Al", atomicNumber: 13, atomicMass: 27 },
  { name: "Gallium", symbol: "Ga", atomicNumber: 31, atomicMass: 70 },
  { name: "Indium", symbol: "In", atomicNumber: 49, atomicMass: 115 },
  { name: "Thallium", symbol: "Tl", atomicNumber: 81, atomicMass: 204 },

  // Group 14 (p-block)
  { name: "Carbon", symbol: "C", atomicNumber: 6, atomicMass: 12 },
  { name: "Silicon", symbol: "Si", atomicNumber: 14, atomicMass: 28 },
  { name: "Germanium", symbol: "Ge", atomicNumber: 32, atomicMass: 73 },
  { name: "Tin", symbol: "Sn", atomicNumber: 50, atomicMass: 119 },
  { name: "Lead", symbol: "Pb", atomicNumber: 82, atomicMass: 207 },

  // Group 15 (p-block)
  { name: "Nitrogen", symbol: "N", atomicNumber: 7, atomicMass: 14 },
  { name: "Phosphorus", symbol: "P", atomicNumber: 15, atomicMass: 31 },
  { name: "Arsenic", symbol: "As", atomicNumber: 33, atomicMass: 75 },
  { name: "Antimony", symbol: "Sb", atomicNumber: 51, atomicMass: 122 },
  { name: "Bismuth", symbol: "Bi", atomicNumber: 83, atomicMass: 209 },

  // Group 16 (p-block)
  { name: "Oxygen", symbol: "O", atomicNumber: 8, atomicMass: 16 },
  { name: "Sulfur", symbol: "S", atomicNumber: 16, atomicMass: 32 },
  { name: "Selenium", symbol: "Se", atomicNumber: 34, atomicMass: 79 },
  { name: "Tellurium", symbol: "Te", atomicNumber: 52, atomicMass: 128 },
  { name: "Polonium", symbol: "Po", atomicNumber: 84, atomicMass: 209 },

  // Group 17 (Halogens - p-block)
  { name: "Fluorine", symbol: "F", atomicNumber: 9, atomicMass: 19 },
  { name: "Chlorine", symbol: "Cl", atomicNumber: 17, atomicMass: 35 },
  { name: "Bromine", symbol: "Br", atomicNumber: 35, atomicMass: 80 },
  { name: "Iodine", symbol: "I", atomicNumber: 53, atomicMass: 127 },
  { name: "Astatine", symbol: "At", atomicNumber: 85, atomicMass: 210 },

  // Group 18 (Noble gases - p-block)
  { name: "Helium", symbol: "He", atomicNumber: 2, atomicMass: 4 },
  { name: "Neon", symbol: "Ne", atomicNumber: 10, atomicMass: 20 },
  { name: "Argon", symbol: "Ar", atomicNumber: 18, atomicMass: 40 },
  { name: "Krypton", symbol: "Kr", atomicNumber: 36, atomicMass: 84 },
  { name: "Xenon", symbol: "Xe", atomicNumber: 54, atomicMass: 131 },
  { name: "Radon", symbol: "Rn", atomicNumber: 86, atomicMass: 222 },
];

function getRandomElement() {
  // Generate a random index within the range of the chemicalElements array
  var randomIndex = Math.floor(Math.random() * chemicalElements.length);
  // Retrieve the element object at the random index
  return chemicalElements[randomIndex];
}

function displayElement() {
  var randomElement = getRandomElement();
  // Display the name and symbol of the random chemical element
  document.getElementById("elementInfo").textContent =
    "Element: " + randomElement.name + " (" + randomElement.symbol + ")";
  // Store the correct atomic number and atomic mass in data attributes
  document
    .getElementById("inputAtomicNumber")
    .setAttribute("data-correct-atomic-number", randomElement.atomicNumber);
  document
    .getElementById("inputAtomicMass")
    .setAttribute("data-correct-atomic-mass", randomElement.atomicMass);
}

function checkAnswers() {
  var inputAtomicNumber = parseInt(
    document.getElementById("inputAtomicNumber").value
  );
  var inputAtomicMass = parseFloat(
    document.getElementById("inputAtomicMass").value
  );
  var correctAtomicNumber = parseInt(
    document
      .getElementById("inputAtomicNumber")
      .getAttribute("data-correct-atomic-number")
  );
  var correctAtomicMass = parseFloat(
    document
      .getElementById("inputAtomicMass")
      .getAttribute("data-correct-atomic-mass")
  );
  var resultAtomicNumber = document.getElementById("resultAtomicNumber");
  var resultAtomicMass = document.getElementById("resultAtomicMass");

  // Check if the input atomic number matches the correct atomic number
  if (inputAtomicNumber === correctAtomicNumber) {
    resultAtomicNumber.textContent = "Atomic Number: Correct!";
  } else {
    resultAtomicNumber.textContent =
      "Atomic Number: Incorrect. Correct value is " + correctAtomicNumber + ".";
  }

  // Check if the input atomic mass matches the correct atomic mass
  if (
    !isNaN(inputAtomicMass) &&
    Math.abs(inputAtomicMass - correctAtomicMass) < 0.01
  ) {
    resultAtomicMass.textContent = "Atomic Mass: Correct!";
  } else {
    resultAtomicMass.textContent =
      "Atomic Mass: Incorrect. Correct value is " +
      correctAtomicMass.toFixed(2) +
      ".";
  }

  // Display a new element for the next question
  displayElement();
}

// Initial call to display the first element
displayElement();
