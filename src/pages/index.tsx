import React from "react";

import { FlexGrid, SimpleText, ImageBox } from "@/styls/_imports";
import { _context, _title, _rounded_box } from "@/styls/_default";
import { _comp_props } from "@/styls/_interfaces";
import { $test } from "@/funcs/$testing";


const comps: _comp_props[][] = [
  [
    { comp: <SimpleText value="Список продуктов :3" style = {_title} />, flex: "0 1 100%" },
  ],
  [
    { comp: <ImageBox value="texture.avif" style = {_rounded_box} />, flex: "0 1 30%" },  
    { comp: <ImageBox value="texture.avif" style = {_rounded_box} />, flex: "0 1 70%" },
  ]
];


const IndexPage = () => { return (
  <div>
    <FlexGrid value={comps} style={_context} />
  </div>  
)};


export default IndexPage;


console.clear();
$test();