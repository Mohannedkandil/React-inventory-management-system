import React, { Component }  from 'react';
function ItemsDisplay(props){
    const showItem = (item) => {
        return (
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th>{item.type}</th>
                <th>{item.brand}</th>
            </tr>
        );
    }
    // use map to render all the list at the same time
    return (
        <div className="container">
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            </tr>
                    </thead>
                    <tbody>
                        {props.items.map(showItem)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ItemsDisplay;