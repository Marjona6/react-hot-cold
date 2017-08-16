import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Can start a new game', () => {
		const wrapper = shallow(<Game />);
		// Alter state to simulate a game in progress
		wrapper.setState({
			guesses: [5, 75, 50, 11],
			feedback: 'Cool',
			correctAnswer: -1 // Apparently having this negative is a good idea somehow? Why?
		});
		wrapper.instance().newGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Take a guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	});

	it('Lets users make guesses', () => {
		const wrapper = shallow(<Game />);
		// set correct answer to aim for
		wrapper.setState({
			correctAnswer: 100
		});
		wrapper.instance().guess(25);
		expect(wrapper.state('guesses')).toEqual([25]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

		wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([25, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(80);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(95);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
	});
});