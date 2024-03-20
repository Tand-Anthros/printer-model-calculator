import React from "react";
import Table from "@/comps/Table";
import RoundedBox from "@/comps/RoundedBox";
import { out as general } from "../styles/general";


const data = [
  { id: 1, name: 'Продукт 1', price: 100 },
  { id: 2, name: 'Продукт 2', price: 200 },
];

const IndexPage = () => {

  return (
    <div style={general as any}>
      <h1>Список Продуктов</h1>
      <Table />
      <RoundedBox src="texture.avif"/>
    </div>
  );
};

export default IndexPage;