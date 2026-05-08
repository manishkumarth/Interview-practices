import React, { useCallback, useMemo, useState } from 'react'
import Child1 from './child1'

export default function Parent() {

    const [name, setName] = useState("rahul");
    const [count, setCount] = useState(0);

    const fn = useCallback(() => {
        setName(pre => pre + 1);
    }, []);

    const changeCount = () => {
        setCount(pre => pre + 1);
    };

    const expensivCal = useMemo(() => {
        console.log("Expensive Calculation Running");
        let total = 0;
        for (let i = 0; i < 10000; i++) {
            total += i;
            console.log("i")
        }
        console.log("calculation exit")
        return total;
    },[])

    return (
        <>
            <h1>{expensivCal}</h1>

            <button onClick={changeCount}>
                {count}
            </button>

            <Child1 name={name} fn={fn} />
        </>
    )
}