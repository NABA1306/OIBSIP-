# WebDev L1 · Task 3 — Temperature Converter Website

**Track:** Web Development & Designing (Level 1)

## Objective
An interactive tool that converts a temperature value between Celsius, Fahrenheit and Kelvin, with real-time input validation and physical edge-case handling.

## Tech stack
- HTML5
- CSS3
- Vanilla JavaScript

## Features implemented
- [x] Numeric input with validation — rejects empty or non-numeric input with an inline error
- [x] Unit selector dropdown (Celsius / Fahrenheit / Kelvin) for the input value
- [x] All three output units shown simultaneously after conversion
- [x] Convert button triggers the calculation
- [x] Result area with clearly labelled values, rounded to 2 decimal places
- [x] Absolute zero handling — any input below −273.15 °C (0 K) shows a friendly explanatory error instead of a nonsensical result
- [x] Clean, centred, blueprint-style UI with clear labels

## Conversion formulas used
- °C → °F: `F = C × 9/5 + 32`
- °F → °C: `C = (F − 32) × 5/9`
- °C → K: `K = C + 273.15`
- All conversions route through Celsius internally, so only two formulas need to be correct.

## How to run
Open `index.html` directly in a browser — no build step or server required.

## Folder contents
```
WebDev-L1-TemperatureConverter/
├── index.html
├── style.css
├── script.js
├── README.md
└── screenshots/
```
