import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import App from '../component/App';

describe('TicTacGame', () => {
    it('should start the game when clicking the start', () => {
        let app = mount(<App/>);
        app.find('button.start').at(0).simulate('click');
        expect(app.find('tableRow').toBe(true))
    });

    it('should restart the game when clicking the restart', () => {
        let app = mount(<App/>);
        app.find('button.restart').at(0).simulate('click');
        expect(app.find('tableRow').toBe(false))
    });
    it('step status correctly', () => {
        let app = mount(<App/>);
        const firstPlayer = app.find('div.status').children().first().text()
        expect(firstPlayer).toEqual('Next player: X')
        const button = app.find('button.square').first()
        button.simulate('click')
        const secondPlayer = app.find('div.status').children().first().text()
        expect(secondPlayer).toBe('Next player: O')
    })
    it('result correctly', () => {
        let app = mount(<App/>);
        app.find('button.square').at(1).simulate('click')
        app.find('button.square').at(4).simulate('click')
        app.find('button.square').at(5).simulate('click')
        app.find('button.square').at(8).simulate('click')
        app.find('button.square').at(9).simulate('click')
        const winner = app.find('div.status').children().first().text()
        expect(winner).toBe('Winner: X')
    })
});