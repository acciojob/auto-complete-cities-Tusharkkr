import React, { useState } from "react";

const cities =
    [
        "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Surat", "Vadodara", "Ludhiana", "Agra", "Varanasi", "Meerut", "Amritsar", "Ranchi", "Raipur", "Chandigarh", "Coimbatore", "Mysore", "Guwahati", "Dehradun", "Noida", "Gurgaon", "Jodhpur", "Udaipur", "Gwalior", "Jabalpur", "Aurangabad", "Nashik", "Thane", "Faridabad", "Ghaziabad", "Allahabad", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Jamshedpur", "Dhanbad", "Bilaspur", "Shimla", "Panaji", "Imphal", "Aizawl", "Itanagar", "Shillong", "Gangtok", "Kohima", "Agartala"
    ];

const Autocomplete = () => {

    let [input, setInput] = useState('')
    let [city, setCity] = useState('')

    // setCity(input)

    function handleParaClick(e){
        setCity(e.target.innerText)
        setInput('')
    }

    return (
        <div className="Autocomplete">
            <h1>Search cities of India</h1>
            <input type="text" onChange={(e)=>{setInput(e.target.value), setCity(e.target.value)}} value={city}></input>
            {input && <div className="innerDiv">
                {cities.filter(value=>value.toLowerCase().includes(input.toLowerCase())).map(value=>(
                <li onClick={handleParaClick}>{value}</li>
            ))}
            </div>}
        </div>
    )
}

export default Autocomplete
