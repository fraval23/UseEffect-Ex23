import React, { createContext, useCallback, useContext, useState } from 'react';
import OrderNameContext from './OrderNameContext';

const OrderWithContext = () => {
    let [ordername,setOrderName] = useState("Jane Doe");

    return (
        <OrderNameContext.Provider value={ordername} > 
        <div>           
            <h3> Getting value from state -- {ordername}</h3>
            <input type="text" onChange={(e) => setOrderName(e.target.value)} />
            <OrderIdWithContext/>

        </div>
        </OrderNameContext.Provider>
        
    );
};

export default OrderWithContext;


export const OrderIdWithContext = () => {
    const ordername = useContext(OrderNameContext);
    return (
        <div>
            <h2> Order id with context</h2>
            some order id here 
            Order name from parent component using context is {ordername}
            <OrderNameWithContext/>
        </div>
    );
};

export const OrderNameWithContext = () => {
    const ordername = useContext(OrderNameContext);
    return (
        <div>
            <h2> Order Name with context</h2>
            some order name here 
            Order name using context is {ordername}
        </div>
    );
};
