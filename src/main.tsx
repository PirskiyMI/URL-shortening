import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupStore } from './store/index.ts';
import { Provider } from 'react-redux';
import './firebase.ts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './store/slices/userSlice.ts';

const store = setupStore();

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
   if (user) {
      store.dispatch(setUser({ id: user.uid, email: user.email, token: user.accessToken }));
   }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
);
