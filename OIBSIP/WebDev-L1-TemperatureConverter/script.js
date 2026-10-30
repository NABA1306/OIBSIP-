const form = document.getElementById('convert-form');
const valueInput = document.getElementById('value');
const unitSelect = document.getElementById('unit');
const errorMsg = document.getElementById('error-msg');
const results = document.getElementById('results');

const outC = document.getElementById('out-c');
const outF = document.getElementById('out-f');
const outK = document.getElementById('out-k');

const ABSOLUTE_ZERO_C = -273.15;

function toCelsius(value, unit) {
  switch (unit) {
    case 'C': return value;
    case 'F': return (value - 32) * 5 / 9;
    case 'K': return value - 273.15;
  }
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.hidden = false;
  results.hidden = true;
}

function hideError() {
  errorMsg.hidden = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  hideError();

  const raw = valueInput.value.trim();

  // Reject empty or non-numeric input
  if (raw === '' || isNaN(Number(raw))) {
    showError('Please enter a valid number (e.g. 36.6, -40, 100).');
    return;
  }

  const value = Number(raw);
  const unit = unitSelect.value;
  const celsius = toCelsius(value, unit);

  // Edge case: nothing can be colder than absolute zero
  if (celsius < ABSOLUTE_ZERO_C - 0.001) {
    showError(
      `That's below absolute zero (${ABSOLUTE_ZERO_C}\u00B0C / 0K) \u2014 ` +
      `no physical temperature can go that low.`
    );
    return;
  }

  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  outC.textContent = `${celsius.toFixed(2)} \u00B0C`;
  outF.textContent = `${fahrenheit.toFixed(2)} \u00B0F`;
  outK.textContent = `${kelvin.toFixed(2)} K`;

  results.hidden = false;
});

// Clear stale results/errors as soon as the user edits the input again
valueInput.addEventListener('input', () => {
  hideError();
});
