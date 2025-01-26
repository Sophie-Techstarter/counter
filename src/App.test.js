import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Matcher wie `toHaveTextContent`
import App from './App';

// Test, ob der Zähler korrekt initialisiert ist
test('prüft, ob die Komponente korrekt geladen wird und der Zähler bei 0 beginnt', () => {
  render(<App />);
  const counterText = screen.getByTestId('counter-text');
  expect(counterText).toHaveTextContent('Count: 0');
});

// Test für die Inkrementierung
test('prüft, ob der Zähler nach einem Klick auf "+" inkrementiert wird', () => {
  render(<App />);
  const incrementButton = screen.getByTestId('increase');
  const counterText = screen.getByTestId('counter-text');

  fireEvent.click(incrementButton); // Klick auf "+"
  expect(counterText).toHaveTextContent('Count: 1'); // Erwartung: Zähler ist jetzt 1
});

// Test für die Dekrementierung
test('prüft, ob der Zähler nach einem Klick auf "-" dekrementiert wird', () => {
  render(<App />);
  const incrementButton = screen.getByTestId('increase');
  const decrementButton = screen.getByTestId('decrease');
  const counterText = screen.getByTestId('counter-text');

  fireEvent.click(incrementButton); // Zähler auf 1 setzen
  fireEvent.click(decrementButton); // Zähler um 1 dekrementieren
  expect(counterText).toHaveTextContent('Count: 0'); // Erwartung: Zähler ist wieder 0
});

// Test für das Blockieren der Dekrementierung bei 0
test('prüft, ob Dekrementierung bei Zählerwert 0 blockiert wird', () => {
  render(<App />);
  const decrementButton = screen.getByTestId('decrease');
  const counterText = screen.getByTestId('counter-text');

  fireEvent.click(decrementButton); // Klick auf "-", obwohl Zähler schon 0 ist
  expect(counterText).toHaveTextContent('Count: 0'); // Erwartung: Zähler bleibt bei 0
});
