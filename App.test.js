import { render, screen, fireEvent } from '@testing-library/react';
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

  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent('Count: 1');
});

// Test für die Dekrementierung
test('prüft, ob der Zähler nach einem Klick auf "-" dekrementiert wird', () => {
  render(<App />);
  const decrementButton = screen.getByTestId('decrease');
  const incrementButton = screen.getByTestId('increase');
  const counterText = screen.getByTestId('counter-text');

  // Zähler inkrementieren, damit er nicht bei 0 bleibt
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent('Count: 0');
});

// Test für das Blockieren der Dekrementierung bei 0
test('prüft, ob Dekrementierung bei Zählerwert 0 blockiert wird', () => {
  render(<App />);
  const decrementButton = screen.getByTestId('decrease');
  const counterText = screen.getByTestId('counter-text');

  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent('Count: 0');
});