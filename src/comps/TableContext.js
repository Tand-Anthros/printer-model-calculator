import React, { useState } from 'react';

// Компонент GridTable, который принимает размеры колонок и строк в качестве props
const GridTable = ({ columns, rows, children }) => {
  // Создание стилей для сетки
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    height: '100vh',
  };

  return (
    <div style={gridStyle}>
      {children}
    </div>
  );
};

// Корневой компонент, который управляет созданием и стилями таблиц
const App = () => {
  const [gridProps, setGridProps] = useState({
    columns: 3,
    rows: 3,
  });

  // Функция для изменения количества колонок
  const changeColumns = (newColumns) => {
    setGridProps(prev => ({ ...prev, columns: newColumns }));
  };

  // Функция для изменения количества строк
  const changeRows = (newRows) => {
    setGridProps(prev => ({ ...prev, rows: newRows }));
  };

  return (
    <>
      <button onClick={() => changeColumns(4)}>4 Колонки</button>
      <button onClick={() => changeRows(4)}>4 Строки</button>
      {/* Создание таблицы с динамическими размерами */}
      <GridTable columns={gridProps.columns} rows={gridProps.rows}>
        {/* Здесь можно разместить другие компоненты */}
      </GridTable>
      {/* Можно добавить еще таблицы с разными размерами */}
    </>
  );
};

export default App;