import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { FlexGrid, TextBox, ImageBox } from "@/styls/_imports";
import { _context, _title } from "@/styls/_default";
import { _comp_props } from "@/styls/_interfaces";


const comps: _comp_props[][] = [[
    { comp: <TextBox value="Параметры печати" style = {_title} />, flex: '0 1 100%' },
  ],
  [
    { comp: <ImageBox value="texture.avif" />, flex: '0 1 30%' },  
    { comp: <ImageBox value="texture.avif" />, flex: '0 1 50%' },
]];


const IndexPage = () => { 
  return (
    <ChakraProvider>
      <FlexGrid value={comps} style={_context} />
    </ChakraProvider>
)};


export default IndexPage;


console.clear();