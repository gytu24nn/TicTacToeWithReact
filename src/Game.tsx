import React from 'react';
import Square from './square';

interface Props {
    board: string[];
    handleClick(index: number): void;
}

function Game(props: Props) {

    const {board, handleClick} = props;

    const styles = {
        boeard: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "300px"
        }
    }

    return(
        <div style={styles.boeard}>
            {board.map((value, index) => {
                return <Square value={value} key={index} index={index} handleClick={handleClick}  />
            })}
        </div>
    );
}

export default Game;