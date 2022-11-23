import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import "./header.css"
import "./event/test.js"
import store from './app/store';
import { Provider } from 'react-redux';
//import "Component" form "PATH" 형식으로 컴포넌트를 가져올 수 있다.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 디버깅과 관련있는 텍스트
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
