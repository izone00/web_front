import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import "./header.css"
import "./event/test.js"
//import "Component" form "PATH" 형식으로 컴포넌트를 가져올 수 있다.
import Room from './Room'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 디버깅과 관련있는 텍스트
  <React.StrictMode>
    {/* <App /> */}
    <Room />
  </React.StrictMode>
);
