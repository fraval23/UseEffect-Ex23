import React, { createContext, useState } from 'react';

const OrderWithoutContext = () => {

let [ordername,setOrderName] = useState("JaneDoe");

    return (
        <div>
            <h1> Ordername without Context</h1>
            <input type="text" onChange={(e) => setOrderName(e.target.value) } />
           <br/>
           Ordername from state is - {ordername}
    <hr/>
    <OrderIdWithoutContext name={ordername}/>
        
        </div>
        
    );
};

export default OrderWithoutContext;

export const OrderIdWithoutContext = (props) => {
    return (
        <div>
            Some order Id here
            Order name from parent component {props.name}
            <OrderdateWithoutContext name={props.name}/>
        </div>
    );
};


export const OrderdateWithoutContext = (props) => {
    return (
        <div>
            Some order Date here
            Order name from parent component recieved from grandparent -{props.name}
        </div>
    );
};