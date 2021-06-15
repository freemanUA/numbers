import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import NumbersScreen from './src/features/numbers/screens/NumbersScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NumbersScreen />
    </Provider>
  );
};

export default App;
