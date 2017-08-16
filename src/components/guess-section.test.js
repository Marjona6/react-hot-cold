import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});

	it('Renders feedback properly', () => {
		const feedback = "Here is some example feedback";
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);
	});
});