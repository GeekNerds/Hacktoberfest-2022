import React, { useState } from 'react'

function Bmicalc() {
    const [height, setheight] = useState("");
    const [weight, setweight] = useState("");
    const [show, setshow] = useState(false);
    const [Bmi, setBmi] = useState('');
    const [Range, setRange] = useState('');
    const [Min, setMin] = useState('');
    const [Max, setMax] = useState('');
    const handler = (e) => {
        if (e.target.name === "height") {

            setheight(e.target.value);
        }
        if (e.target.name === "weight") {

            setweight(e.target.value);
        }
    }
    const handlesub = async () => {
        setBmi((weight / ((height / 100) * (height / 100))).toFixed(2))
        setshow(true);
        let temp, wtemp = weight;
        while (true) {
            temp = wtemp / ((height / 100) * (height / 100)).toFixed(2)
            if (temp <= 18.4) {
                setMin(wtemp + 1);
                break
            }
            else {
                wtemp--;
            }
        }
        while (true) {
            temp = wtemp / ((height / 100) * (height / 100)).toFixed(2)
            if (temp > 24.9) {
                setMax(wtemp);
                break
            }
            else {
                wtemp++;
            }
        }
        if (Bmi >= 0 && Bmi <= 18.4) {
            setRange('under weight');
        }
        else if (Bmi > 18.4 && Bmi <= 24.9) {
            setRange('healthy weight');
        }

        else if (Bmi > 24.9) {
            setRange('overweight');
        }

    }
    return (
        <>
            <div className="flex justify-center flex-col">
                <h1 className="w-full bg-blue-700 h-14 text-center text-xl pt-2"> BMI CALCULATOR</h1>
                <p className="text-center mt-5"> enter your height in centimeters</p>
                <input type="number" name="height" className="border-2  items-center  block w-40 m-auto " value={height} onChange={handler} />
                <p className="text-center mt-5"> enter your weight in kg</p>
                <input type="number" name="weight" className="border-2  items-center  block w-40 m-auto " value={weight} onChange={handler} />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-28 m-auto mt-3" onClick={handlesub}>
                    Submit
                </button>
                {
                    show && <>
                        <p className="text-center mt-5"> Your Bmi is {Bmi} </p>
                        <p className="text-center mt-5"> Your Suggestion weight range is between {Min} - {Max}</p>
                        <p className="text-center mt-5"> You are in a {Range} range </p>
                    </>
                }
            </div>

        </>
    )
}

export default Bmicalc