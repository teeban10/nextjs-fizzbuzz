import React, { useState } from 'react'

const index = () => {

    const [number, setNumber] = useState("");
    const [fizzbuzz, setFizzBuzz] = useState("");

    const numChange = event => {
        let num = event.target.value;
        setNumber(num);
        setFizzBuzz("");
        console.log(typeof parseInt(num));
        if (num % 3 === 0 && num % 5 === 0) {
            setFizzBuzz('FizzBuzz')
        } else if (num % 3 === 0) {
            setFizzBuzz('Fizz')
        } else if (num % 5 === 0){
            setFizzBuzz('Buzz')
        }

    }
    return (
        <div>
            <input type="number" name="number" onChange={numChange}/>
            <h1>{number }</h1>
            <h2> {fizzbuzz}</h2>
        </div>
    )
}

export default index
