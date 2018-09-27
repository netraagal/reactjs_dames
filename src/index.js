import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Pion(props) {
    return (
        <button
            className = {`pion ${ props.color }`}
            onClick   = {props.onClick}
            data-x    = {props.x}
            data-y    = {props.y}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderPion(i, x, y, color) {
        return <Pion
            color   = {color}
            x       = {x}
            y       = {y}
            value   = {this.props.squares[i]}
            onClick = {() => this.props.onClick(i)}
        />;
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderPion(0, 0, 0, 'white')}
                    {this.renderPion(1, 0, 1, 'black')}
                    {this.renderPion(2, 0, 2, 'white')}
                    {this.renderPion(3, 0, 3, 'black')}
                    {this.renderPion(4, 0, 4, 'white')}
                    {this.renderPion(5, 0, 5, 'black')}
                    {this.renderPion(6, 0, 6, 'white')}
                    {this.renderPion(7, 0, 7, 'black')}
                    {this.renderPion(8, 0, 8, 'white')}
                    {this.renderPion(9, 0, 9, 'black')}
                </div>
                <div className="board-row">
                    {this.renderPion(10, 1, 0, 'black')}
                    {this.renderPion(11, 1, 1, 'white')}
                    {this.renderPion(12, 1, 2, 'black')}
                    {this.renderPion(13, 1, 3, 'white')}
                    {this.renderPion(14, 1, 4, 'black')}
                    {this.renderPion(15, 1, 5, 'white')}
                    {this.renderPion(16, 1, 6, 'black')}
                    {this.renderPion(17, 1, 7, 'white')}
                    {this.renderPion(18, 1, 8, 'black')}
                    {this.renderPion(19, 1, 9, 'white')}
                </div>
                <div className="board-row">
                    {this.renderPion(20, 2, 0, 'white')}
                    {this.renderPion(21, 2, 1, 'black')}
                    {this.renderPion(22, 2, 2, 'white')}
                    {this.renderPion(23, 2, 3, 'black')}
                    {this.renderPion(24, 2, 4, 'white')}
                    {this.renderPion(25, 2, 5, 'black')}
                    {this.renderPion(26, 2, 6, 'white')}
                    {this.renderPion(27, 2, 7, 'black')}
                    {this.renderPion(28, 2, 8, 'white')}
                    {this.renderPion(29, 2, 9, 'black')}
                </div>
                <div className="board-row">
                    {this.renderPion(30, 3, 0, 'black')}
                    {this.renderPion(31, 3, 1, 'white')}
                    {this.renderPion(32, 3, 2, 'black')}
                    {this.renderPion(33, 3, 3, 'white')}
                    {this.renderPion(34, 3, 4, 'black')}
                    {this.renderPion(35, 3, 5, 'white')}
                    {this.renderPion(36, 3, 6, 'black')}
                    {this.renderPion(37, 3, 7, 'white')}
                    {this.renderPion(38, 3, 8, 'black')}
                    {this.renderPion(39, 3, 9, 'white')}
                </div>
                <div className="board-row">
                    {this.renderPion(40, 4, 0, 'white')}
                    {this.renderPion(41, 4, 1, 'black')}
                    {this.renderPion(42, 4, 2, 'white')}
                    {this.renderPion(43, 4, 3, 'black')}
                    {this.renderPion(44, 4, 4, 'white')}
                    {this.renderPion(45, 4, 5, 'black')}
                    {this.renderPion(46, 4, 6, 'white')}
                    {this.renderPion(47, 4, 7, 'black')}
                    {this.renderPion(48, 4, 8, 'white')}
                    {this.renderPion(49, 4, 9, 'black')}
                </div>
                <div className="board-row">
                    {this.renderPion(50, 5, 0, 'black')}
                    {this.renderPion(51, 5, 1, 'white')}
                    {this.renderPion(52, 5, 2, 'black')}
                    {this.renderPion(53, 5, 3, 'white')}
                    {this.renderPion(54, 5, 4, 'black')}
                    {this.renderPion(55, 5, 5, 'white')}
                    {this.renderPion(56, 5, 6, 'black')}
                    {this.renderPion(57, 5, 7, 'white')}
                    {this.renderPion(58, 5, 8, 'black')}
                    {this.renderPion(59, 5, 9, 'white')}
                </div>
                <div className="board-row">
                    {this.renderPion(60, 6, 0, 'white')}
                    {this.renderPion(61, 6, 1, 'black')}
                    {this.renderPion(62, 6, 2, 'white')}
                    {this.renderPion(63, 6, 3, 'black')}
                    {this.renderPion(64, 6, 4, 'white')}
                    {this.renderPion(65, 6, 5, 'black')}
                    {this.renderPion(66, 6, 6, 'white')}
                    {this.renderPion(67, 6, 7, 'black')}
                    {this.renderPion(68, 6, 8, 'white')}
                    {this.renderPion(69, 6, 9, 'black')}
                </div>
                <div className="board-row">
                    {this.renderPion(70, 7, 0, 'black')}
                    {this.renderPion(71, 7, 1, 'white')}
                    {this.renderPion(72, 7, 2, 'black')}
                    {this.renderPion(73, 7, 3, 'white')}
                    {this.renderPion(74, 7, 4, 'black')}
                    {this.renderPion(75, 7, 5, 'white')}
                    {this.renderPion(76, 7, 6, 'black')}
                    {this.renderPion(77, 7, 7, 'white')}
                    {this.renderPion(78, 7, 8, 'black')}
                    {this.renderPion(79, 7, 9, 'white')}
                </div>
                <div className="board-row">
                    {this.renderPion(80, 8, 0, 'white')}
                    {this.renderPion(81, 8, 1, 'black')}
                    {this.renderPion(82, 8, 2, 'white')}
                    {this.renderPion(83, 8, 3, 'black')}
                    {this.renderPion(84, 8, 4, 'white')}
                    {this.renderPion(85, 8, 5, 'black')}
                    {this.renderPion(86, 8, 6, 'white')}
                    {this.renderPion(87, 8, 7, 'black')}
                    {this.renderPion(88, 8, 8, 'white')}
                    {this.renderPion(89, 8, 9, 'black')}
                </div>
                <div className="board-row">
                    {this.renderPion(90, 9, 0, 'black')}
                    {this.renderPion(91, 9, 1, 'white')}
                    {this.renderPion(92, 9, 2, 'black')}
                    {this.renderPion(93, 9, 3, 'white')}
                    {this.renderPion(94, 9, 4, 'black')}
                    {this.renderPion(95, 9, 5, 'white')}
                    {this.renderPion(96, 9, 6, 'black')}
                    {this.renderPion(97, 9, 7, 'white')}
                    {this.renderPion(98, 9, 8, 'black')}
                    {this.renderPion(99, 9, 9, 'white')}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i])
            return;

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner  = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button class="btn" onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        })

        let status;
        if (winner)
            status = 'Winner : ' + winner;
        else
            status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div className="game col-12">
                <div className="game-board col-6">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info col-6">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
