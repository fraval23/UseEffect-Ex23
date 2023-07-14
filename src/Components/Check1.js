import { useEffect, useState } from "react";


const Check1 = () => {
   
   let [counter,setCounter] = useState(0);
   let [title,setTitle] = useState(" My title");


   useEffect(() => {
    console.log("hello from use effect no dependencies");
    });  


    useEffect(() => {
        console.log("hello from use effect empty array");
        document.title = title;        
    },[]);


   useEffect(() => {
    console.log("hello from use effect with counter");
    if(counter%2 == 0) {
        document.body.style.backgroundColor ="pink";
    }
    else {
        document.body.style.backgroundColor ="white";
    }
    }, [counter]);




    let clickHandler1 = () => {
        counter++;
        setCounter(counter);
        // if(counter%2 == 0) {
        //     document.body.style.backgroundColor ="pink";
        // }
        // else {
        //     document.body.style.backgroundColor ="white";
        // }
    }


    let clickHandler2 = () => {
        counter = counter+2;
        setCounter(counter);
        // if(counter%2 == 0) {
        //     document.body.style.backgroundColor ="pink";
        // }
        // else {
        //     document.body.style.backgroundColor ="white";
        // }
    }


    let changeTitleHandler = () => {
        setTitle("changed title");
    }
    useEffect( () => {
        document.title = title;
    },[title])


    return (
        <div>
            <h2> Check 1</h2>
            <button onClick={clickHandler1}> +1 Click to increment</button>
            <button onClick={clickHandler2}> +2  Click to increment</button> <br/>
           <button onClick={changeTitleHandler}>Click to change title </button>
            {counter}
        </div>
     );
}
 
export default Check1;
