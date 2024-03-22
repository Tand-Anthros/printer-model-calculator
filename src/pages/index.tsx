import React from "react";
import FlexGrid from "@/comps/FlexGrid";
import RoundedBox from "@/comps/RoundedBox";
import SimpleText from "@/comps/SimpleText";
import { _context, _title, _rounded_box } from "@/styls/_default";
import { $test } from "@/funcs/$testing";


type Comp = {
  comp: React.ReactElement;
  width?: string;
  flex?: string;
  marginLeft?: string;
  marginTop?: string;
  fontSize?: string;
};


const comps: Comp[][] = [
  [
    { comp: <SimpleText value="Список продуктов :3" style = {_title} />, flex: "1 0 100%" },
  ],
  [
    { comp: <RoundedBox value="texture.avif" style = {_rounded_box} />, flex: "1 1 50%" },
    { comp: <RoundedBox value="texture.avif" style = {_rounded_box} />, flex: "0 1 50%" },
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