import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
	it('Renders without crashing', () => {
		shallow(<InfoModal />);
	});

	it('Should fire onClose callback when close button is clicked', () => {
		// how exactly does this work? documentation seems to show jest.fn() being used with .mock?
		const callback = jest.fn();
		const wrapper = shallow(<InfoModal onClose={callback} />);
		wrapper.find('.close').simulate('click', {
			preventDefault() {}
		});
	});
});