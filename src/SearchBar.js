import {useState} from "react";
import React, { Component }  from 'react';
function SearchBar(props){
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState(0); 
    const [brand, setBrand] = useState(""); 
    const [type, setType] = useState(""); 
    
    const searchButtonPressed = () => {
        props.updateSearchParams({name: name, price:price, type:type, brand:brand});
    }
    return(
        <div className="container">
            <div className="row">
                <h2>Search for an Item</h2>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor = "name-field">Name:</label>
                    <input className = "form-control" id="name-field" type="text" val = {name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor = "name-field">Name:</label>
                    <input className = "form-control"  id="name-field" type="text" val = {name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor = "price-field">Max Price:</label>
                    <input className = "form-control"  id="price-field" type="number" val = {price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor = "type-field">Type:</label>
                    <input className = "form-control"  id="type-field" type="text" val = {type} onChange={(e) => setType(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor = "brand-field">Brand:</label>
                    <input className = "form-control"  id="brand-field" type="text" val = {brand} onChange={(e) => setBrand(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-4">
                <div className = "col-4" />
                    <button type="button" className = "col-4 btn btn-primary" onClick={searchButtonPressed}>Search</button> 
            </div>
        </div>
    );
}
export default SearchBar;