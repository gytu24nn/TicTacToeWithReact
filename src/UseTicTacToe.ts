import { useState, useEffect } from "react";

interface ReturnValue {
    board: string[],
    gameStatus: string,
    winner: string | null,
    handleClick: (index: number) => void;
    handleRestart: () => void; 
    HandleStart: (players: string[]) => void;
}

export default (): ReturnValue => {

    const [board, setBorard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState <string | null>(null);
    const [gameStatus, SetGameStatus] = useState("created");
    const [players, setPlayers] = useState(["", ""]);

    useEffect(() => {

        if (gameStatus !== "started") return;

        const winningPositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let winningPositionsIndex = 0;
        let winner: string | null = null;

        while(winningPositionsIndex < winningPositions.length && !winner) {
            const boardPositionsToCheck = winningPositions[winningPositionsIndex];
            const boradValuesToCheck = boardPositionsToCheck.map(
                (index) => board[index]
            );
            const checkingValue = boradValuesToCheck[0];
            const isFinnished = boradValuesToCheck.every(
                (value) => value === checkingValue && checkingValue
            )
            winner = !isFinnished ? null : checkingValue;
            winningPositionsIndex ++;
        }
        if(winner) {
            setWinner(winner === "X" ? players[0] : players[1]);
            SetGameStatus("finnished");
            return;
        }
        SetGameStatus(board.filter((value) => !value).length ? "started" : "finnished");

    }, [board, players, gameStatus])
    
    const handleClick = (index: number): void => {
        if(index < 0 || index > 9 || winner) return;
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        setBorard(newBoard);
        const newTurn = turn === "X" ? "0" : "X";
        setTurn(newTurn);
    };

    const HandleStart = (players: string[]) => {
        setPlayers(players)
        setTurn("X")
        SetGameStatus("started")
    }

    const handleRestart = () => {
        setBorard(Array(9).fill(""));
        setWinner("");
        SetGameStatus("created")
    }



    return{board, gameStatus, winner, handleClick, handleRestart, HandleStart}
}
