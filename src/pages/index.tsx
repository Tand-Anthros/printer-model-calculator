import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { FlexGrid, FlexColumn, FlexRow, Space, TextBox, ImageBox } from "@/styls/_imports";
import { _context, _subtitle, _title } from "@/styls/_default";
import { _comp_props } from "@/styls/_interfaces";


const comps: _comp_props[] = [
  { comp: <FlexRow rowIndex = {0} value = {[
    { comp: <TextBox value="Параметры печати" style = {_title} />, flex: '0 1 100%' },
  ]}/>},

  { comp: <Space value = "0.5vw"/> },
  { comp: <FlexRow rowIndex = {0} value = {[
    { comp: <Space />, flex: '0 1 6%'},
    { comp: <FlexColumn columnIndex = {0} value = {[
      { comp: <Space value = "3vw"/> },
      { comp: <ImageBox value="example.avif"/>},
    ]}/>, flex: '0 1 38%'}, 
    { comp: <Space />, flex: '0 1 9%'},

    { comp: <FlexColumn columnIndex = {0} value = {[
      { comp: <Space value = "5vw"/> },
      { comp: <TextBox value = "Исходные данные" style = {_subtitle}/> },
      { comp: <TextBox value = "Загрузить модель" /> },
      { comp: <TextBox value = "Выбрать технологию" /> },
      { comp: <TextBox value = "Выбрать материал" /> },
      { comp: <TextBox value = "Выбрать цвет" /> },
      { comp: <TextBox value = "Выбрать заполнение" /> },
      { comp: <TextBox value = "Качество поверхности" /> },
      { comp: <TextBox value = "Качество деталей" /> },

      { comp: <Space value = "1vw"/> },
      { comp: <TextBox value = "Пост обработка" style = {_subtitle} /> },
      { comp: <TextBox value = "Сглаживаение следов печати" /> },
      { comp: <FlexRow rowIndex = {0} value = {[
        { comp: <TextBox value = "Покраска" /> },
        { comp: <Space />, flex: '0 1 5%'},
        { comp: <TextBox value = "Выбрать цвет:"/> },
        { comp: <Space />, flex: '0 1 2%'},
        { comp: <ImageBox value="texture.avif" />, flex: '0 1 5%' },  
        { comp: <ImageBox value="texture.avif" />, flex: '0 1 5%' },
      ]}/> },
      { comp: <Space value = "1.5vw"/> },
      { comp: <FlexRow rowIndex = {0} value = {[
        { comp: <TextBox value = "Отправить на печать" /> },
        { comp: <Space />, flex: '0 1 7%'},
        { comp: <TextBox value = "Сохранить в личном кабинете" /> },  
      ]}/> },      
    ]}/>, flex: '0 1 47%'}
    
  ]}/>}, 
  { comp: <Space value = "99vw"/> },
];


const IndexPage = () => { 
  return (
    <ChakraProvider>
      <FlexGrid value={comps} style={_context} />
    </ChakraProvider>
)};


export default IndexPage;


console.clear();