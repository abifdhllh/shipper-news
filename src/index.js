import React from 'react';

// Navigation
import AppNavigation from 'navigations';

// Redux
import {Provider} from 'react-redux';
import {store, persistor} from 'shared-state/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  // To see all the requests in the chrome Dev tools in the network tab.
  XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
