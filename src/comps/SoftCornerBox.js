import React, { useRef, useEffect } from 'react';

const RoundedSquare = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const size = 100; // Размер стороны квадрата
    const radius = 10; // Радиус скругления углов

    // Функция для рисования скруглённого квадрата
    const drawRoundedSquare = (ctx, x, y, size, radius) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + size - radius, y);
      ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
      ctx.lineTo(x + size, y + size - radius);
      ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
      ctx.lineTo(x + radius, y + size);
      ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.stroke();
    };

    // Очистка холста
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Рисование скруглённого квадрата
    drawRoundedSquare(context, 50, 50, size, radius);
  }, []);

  // Стили для позиционирования компонента в сетке
  const style = {
    gridArea: '1 / 1 / 2 / 2', // Занимает ячейку от первой строки до второй и от первой колонки до второй
  };

  return (
    <canvas ref={canvasRef} width="200" height="200" style={style} />
  );
};

export default RoundedSquare;