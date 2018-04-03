import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from './header.container';
import HeaderPresentational from './header.presentational';

describe('Header', () => {

    test('Should mounth the component correctly without any bug', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });


    test('Render a Header', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Render a Header Presentational', () => {
        const { title, subtitle, btns } = {
            title: 'O T P O',
            subtitle: 'One drop everyday',
            btns: [
                {
                    value: 'Twitter',
                    icon: 'icon-twitter-squared',
                    link: 'https://twitter.com/_Otpo'
                },
                {
                    value: 'spotify',
                    icon: 'icon-spotify',
                    link: 'Mon spotify'
                },
                {
                    value: 'instagram',
                    icon: 'icon-instagram',
                    link: 'https://www.instagram.com/f_gomis/'
                }
            ]
        };
        const wrapper = shallow(
            <HeaderPresentational title={title} subtitle={subtitle} btns={btns}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

});
