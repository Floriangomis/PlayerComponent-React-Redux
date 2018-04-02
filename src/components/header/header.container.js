import React, { Component } from 'react';
import HeaderPresentational from './header.presentational';

export default class Header extends Component {
  render() {
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
    return (
        <HeaderPresentational title={title} subtitle={subtitle} btns={btns} />
    )
  }
};
