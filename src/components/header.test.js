import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});

	it('Should hide the info modal on page load', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('InfoModal').exists()).toEqual(false);
	})

	it('Should render and display info modal on click', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal(true);
		expect(wrapper.find('InfoModal').exists()).toEqual(true);
	});
});