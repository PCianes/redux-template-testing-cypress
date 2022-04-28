import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Counter } from './Counter';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIfOdd,
} from './counterSlice';

const renderCounter = () => {
  store.dispatch = jest.fn()
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

describe('<Counter>', () => {
  test('clicking the "+" button dispatch increment action', () => {
    renderCounter()
    const button = screen.getByText("+");

    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalledWith(increment())
  });

  test('clicking the "-" button dispatch decrement action', () => {
    renderCounter()
    const button = screen.getByText("-");

    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalledWith(decrement())
  });

  test('clicking the "add amount" button dispatch incrementByAmount action', () => {
    renderCounter()
    const button = screen.getByText(/amount/i);

    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalledWith(incrementByAmount(2))
  });

  test('clicking the "add async" button dispatch incrementAsync action', () => {
    renderCounter()
    const button = screen.getByText(/async/i);

    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalledTimes(1)
  });

  test('clicking the "add if odd" button NOT dispatch incrementIfOdd action', () => {
    renderCounter()
    const button = screen.getByText(/odd/i);

    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).not.toHaveBeenCalledWith(incrementIfOdd(2))
  });

  test('clicking the "add if odd" button dispatch incrementIfOdd action', () => {
    renderCounter()
    const button = screen.getByText(/odd/i);
    const incrementButton = screen.getByText("+");

    fireEvent.click(incrementButton)
    fireEvent.click(button)

    expect(button).toBeInTheDocument();
    expect(store.dispatch).toHaveBeenCalledTimes(2)
  });
})
