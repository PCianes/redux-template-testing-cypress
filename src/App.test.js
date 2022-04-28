import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe('<App>', () => {
  test('renders learn react link', () => {
    renderApp()

    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });

  test('renders title: "Redux template"', () => {
    renderApp()

    const title = screen.getByText(/redux template/i);

    expect(title).toBeInTheDocument();
  });

  test('title with H1', () => {
    renderApp()

    const title = screen.getByText(/redux template/i);

    expect(title.tagName).toBe('H1')
  })

  test('title with white color', () => {
    renderApp()

    const title = screen.getByText(/redux template/i);
    const style = window.getComputedStyle(title)

    expect(title).toMatchSnapshot()
    expect(style.color).toBe('rgb(255, 255, 255)')
  })

  test('render redux link to official website', () => {
    renderApp()

    const link = screen.getByText(/react redux/i)

    expect(link.tagName).toBe('A')
    expect(link.href).toBe('https://react-redux.js.org/')
  })
})

