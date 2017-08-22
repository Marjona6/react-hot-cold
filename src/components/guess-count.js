import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
	// props is passed in as a parameter
	// no need to declare constructor, super, or state here
	// because it is a "dumb" component!
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

const mapStateToProps = state => ({
	count: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
