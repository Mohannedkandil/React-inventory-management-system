import React, { Component }  from 'react';

import styles from "./App.module.css"
import { useState } from 'react';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';
import styled from "styled-components";

const Title = styled.h1 `
  color: ${(props) => (props.color ? props.color : "black")};
`;


const Para = styled.p `
  color: yellow;
  padding: 2rem;
  background-color: ${(props) => (props.color ? props.color : "black")};
`;


function App() {

  const [filters, setFilters] = useState({});

  const [data, setData] = useState({ items: []});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items}); // resetting the new item into a new data
    console.log(data);
  }


  return (
    <div className="App">
      <Title color="blue">Test</Title>
      <Para color="red">Mohanad Kandil</Para>
      <SearchBar updateSearchParams={updateFilters}/>
      <ItemsDisplay items = {data["items"]}/>
      <AddItem addItem = {addItemToData}/>
    </div>
  );
}

export default App;
