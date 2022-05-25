import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    //useState
    const [age, setage] = useState(20);
    const bithday = () => {
        setage(age + 1)
    }
    return (
        <div>
                
            <h1>
                HOLA {props.name}!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick = {bithday} >
                    Cumplir años
                </button>
            </div>

        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
