import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { FlexGrid, FlexColumn, FlexRow, Space, TextBox, ImageBox } from "@/styls/_imports";
import { _context, _subtitle, _title } from "@/styls/_default";
import { _comp_props } from "@/styls/_interfaces";


const comps: _comp_props[] = [
  { comp: <FlexRow rowIndex = {0} value = {[
    { comp: <TextBox value="Параметры печати" style = {_title} />, flex: '0 1 100%' },
  ]}/> },
  { comp: <Space value = "0.5vw"/> },
  { comp: <FlexRow rowIndex = {0} value = {[
    { comp: <ImageBox value="example.avif"/>, flex: '0 1 44%' },
    { comp: <Space value = "0 1 10%"/>, flex: '0 1 6%'},
    { comp: <FlexColumn columnIndex = {0} value = {[
      { comp: <TextBox value = "Исходные данные" style = {_subtitle}/> },
      { comp: <TextBox value = "Загрузить модель" /> },
      { comp: <FlexRow rowIndex = {0} value = {[
        { comp: <ImageBox value="texture.avif" />, flex: '0 1 7%' },  
        { comp: <ImageBox value="texture.avif" />, flex: '0 1 7%' },
      ]
      }/> },
    ]}/>, flex: '0 1 50%'}
  ]
  }/>},
];


const IndexPage = () => { 
  return (
    <ChakraProvider>
      <FlexGrid value={comps} style={_context} />
    </ChakraProvider>
)};


export default IndexPage;


console.clear();