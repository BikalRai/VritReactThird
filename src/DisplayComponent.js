import React from 'react';

const DisplayComponent = (arr) => {
    console.log(arr.arr);
    return (
        <>
            <ul>
                {arr.arr.map((elem, index) => (
                    <li key={index}>{elem}</li>
                ))}
            </ul>
        </>
    );
};

export default DisplayComponent;
