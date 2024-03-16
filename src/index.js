import React from 'react';
import ReactDOM from 'react-dom';
import TableContext from './comps/TableContext.js';
import SoftCornerBox from './comps/SoftCornerBox.js';

// Рендеринг корневого компонента React
ReactDOM.render(
  <React.StrictMode>
    <TableContext />
    <SoftCornerBox />
  </React.StrictMode>,
  document.getElementById('root')
);

//чистка консоли после запуска
window.onload = function() {
  console.clear();
};