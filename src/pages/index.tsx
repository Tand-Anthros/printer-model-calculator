import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { FlexGrid, SimpleText, ImageBox } from "@/styls/_imports";
import { _context, _title, _rounded_box } from "@/styls/_default";
import { _comp_props } from "@/styls/_interfaces";
import { $test } from "@/funcs/$testing";


const comps: _comp_props[][] = [[
    { comp: <SimpleText value="Список продуктов :3" style = {_title} />, flex: "0 1 200%" },
  ],
  [
    { comp: <ImageBox value="texture.avif" style = {{ ... _rounded_box }} />, flex: "0 1 30%" },  
    { comp: <ImageBox value="texture.avif" style = {{ ... _rounded_box }} />, flex: "0 1 50%"},
]];


const IndexPage = () => { 
  return (
    <ChakraProvider>
      <FlexGrid value={comps} style={_context} />
    </ChakraProvider>
)};


export default IndexPage;


console.clear();
$test();