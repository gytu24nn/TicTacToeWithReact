import React from 'react';

interface Props {
    name: string | null;
    handleRestart(): void;  
}

function Finnished(props: Props) {

    const {name, handleRestart} = props;

    return (
        <div>
            <h1>Finnished</h1>
            <h2>winner: {name} won the game</h2>

            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default Finnished;