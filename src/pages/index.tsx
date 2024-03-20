import React from "react";
import FlexGrid from "@/comps/FlexGrid";
import RoundedBox from "@/comps/RoundedBox";
import { context_comp } from "../styles/general";

type Comp = {
  comp: React.ReactElement;
  flex?: string;
  marginLeft?: string;
  marginTop?: string;
};

const comps: Comp[] = [
  { comp: <h1> Список Продуктов </h1>, flex: "1 0 100%" },
  { comp: < RoundedBox src="texture.avif" />, flex: "0 1 50%" },
  { comp: < RoundedBox src="texture.avif" />, flex: "0 1 30%", marginLeft: 20/2 + "%", marginTop: 20/2 + "%" },
];

const IndexPage = () => { return (
  <div>
    < FlexGrid comps={comps} prop={context_comp} />
  </div>
)};

export default IndexPage;
