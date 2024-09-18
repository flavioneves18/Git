import React from 'react';

export const Button = ({ operacao, somadiminui }) => {
    return (
        <button onClick={somadiminui}>
            <h1>{operacao}</h1>
        </button>
    );
}

