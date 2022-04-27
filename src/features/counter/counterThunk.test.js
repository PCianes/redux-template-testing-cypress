import { configureStore } from '@reduxjs/toolkit';
import counterReducer, {
  incrementIfOdd,
  incrementAsync,
  selectCount
} from './counterSlice';

const initialState = {
  value: 3,
  status: 'idle',
};

describe('counter async thunk functions', () => {
  let store
  let config = {
    reducer: {
      counter: counterReducer,
    },
    preloadedState: {
      counter: initialState
    }
  }

  beforeEach(() => {
    store = configureStore(config);
  })

  it('should handle incrementIfOd: initial value is odd', () => {
    const amount = 3

    store.dispatch(incrementIfOdd(amount))

    expect(selectCount(store.getState())).toBe(initialState.value + amount)
  });

  it('should handle incrementIfOd: initial value 0 is not odd', () => {
    const amount = 3
    config.preloadedState.counter = { ...initialState, value: 0 }
    const store = configureStore(config);

    store.dispatch(incrementIfOdd(amount))

    expect(selectCount(store.getState())).toBe(0)
  });

  it('should handle incrementAsync', async () => {
    const amount = 10

    await store.dispatch(incrementAsync(amount))

    expect(selectCount(store.getState())).toBe(amount)
  });
});