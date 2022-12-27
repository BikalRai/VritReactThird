import React from 'react';
import DisplayComponent from './DisplayComponent';

const List = () => {
    const arr = ['Python', 'JavaScript', 'C Programming'];
    return (
        <>
            <DisplayComponent arr={arr} />
        </>
    );
};

export default List;
