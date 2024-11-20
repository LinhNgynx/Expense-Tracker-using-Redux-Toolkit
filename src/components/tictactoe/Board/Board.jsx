import React, { useState } from "react";
import Elem from "../Elem/Elem";

export default function Board() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [playerX, setPlayerX] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWin = (board) => {
    const size = board.length;

    for (let row = 0; row < size; row++) {
      if (board[row][0] !== "" && board[row].every((cell) => cell === board[row][0])) {
        return board[row][0];
      }
    }

    for (let col = 0; col < size; col++) {
      if (board[0][col] !== "" && board.every((row) => row[col] === board[0][col])) {
        return board[0][col];
      }
    }

    if (board[0][0] !== "" && board.every((_, idx) => board[idx][idx] === board[0][0])) {
      return board[0][0];
    }
    if (board[0][size - 1] !== "" && board.every((_, idx) => board[idx][size - 1 - idx] === board[0][size - 1])) {
      return board[0][size - 1];
    }

    return null; 
  };

  const handleClick = (x, y) => {
    if (board[x][y] !== "" || winner) return;

    const newBoard = board.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === x && colIndex === y ? (playerX ? "X" : "O") : cell
      )
    );

    setBoard(newBoard);

    const gameWinner = checkWin(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setTimeout(()=>alert(`${gameWinner} wins!`), 100);
    } else {
      setPlayerX((prev) => !prev);
    }
  };

  const resetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayerX(true);
    setWinner(null);
  };

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <Elem
                    value={cell}
                    setValue={() => handleClick(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner && <h2>{winner} wins!</h2>}
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}
