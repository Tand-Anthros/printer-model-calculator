import React from 'react';
import ReactDOM from 'react-dom';
import { newDefaultScheduler, Stream } from 'most';
import App from './App.js';

// Создание наблюдаемого (stream) объекта
const stream = new Stream({
  run: (sink, scheduler) => {
    sink.event(scheduler.now(), 'Hello');
    sink.event(scheduler.now(), 'Functional Reactive Programming');
    sink.end(scheduler.now());
    return {
      dispose: () => {}
    };
  }
});

// Подписка на наблюдаемый объект и вывод в консоль
stream.observe(x => console.log(x));

// Рендеринг корневого компонента React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
