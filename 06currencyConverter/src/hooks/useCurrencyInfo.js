import { useState, useEffect } from "react"; 

function useCurrencyInfo (currency) {
    const [data,setData] = useState({}) //The useState hook is used to manage the state of the currency data.
    useEffect(() => { //The useEffect hook is used to perform side effects, such as fetching data from the API. It runs after the component mounts and whenever the currency prop changes.
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);  //The first console.log(data) statement is inside the useEffect hook. It logs the current state of data immediately after it has been set with the fetched currency information. This allows you to see the data that was just fetched from the API.
    },[currency])
    console.log(data); //The second console.log(data) statement is outside the useEffect hook but still inside the useCurrencyInfo custom hook. It logs the current state of data whenever the component re-renders due to changes in props or state.
    return data
}

export default useCurrencyInfo;