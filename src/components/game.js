import React from 'react';

// import all the components
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default function Game(props) {
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
};

// export default class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // all of this data stays internal to the Game component
//             guesses: [],
//             feedback: 'Take a guess!',
//             correctAnswer: Math.floor(Math.random() * 100) + 1,
//         };
//     }

// // a function to start a new game; clears out guesses
//     newGame() {
//         this.setState({
//             guesses: [],
//             feedback: 'Take a guess!',
//             correctAnswer: Math.floor(Math.random() * 100) + 1,
//         });
//     }

//     guess(guess) {
//         guess = parseInt(guess, 10);
//         if (isNaN(guess)) {
//             this.setState({
//                 feedback: 'Please enter a valid number'
//             });
//             return;
//         }

//         const difference = Math.abs(guess - this.state.correctAnswer);

//         let feedback;
//         if (difference >= 50) {
//             feedback = 'You\'re Ice Cold...';
//         }
//         else if (difference >= 30) {
//             feedback = 'You\'re Cold...';
//         }
//         else if (difference >= 10) {
//             feedback = 'You\'re Warm';
//         }
//         else if (difference >= 1) {
//             feedback = 'You\'re Hot!';
//         }
//         else {
//             feedback = 'You got it!';
//         }

//         this.setState({
//             feedback,
//             guesses: [...this.state.guesses, guess]
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Header onNewGame={() => this.newGame()}/>
//                 <GuessSection feedback={this.state.feedback}
//                     onGuess={(guess) => this.guess(guess)} />
//                 <GuessCount count={this.state.guesses.length} />
//                 <GuessList guesses={this.state.guesses} />
//             </div>
//         );
//     }
// }

