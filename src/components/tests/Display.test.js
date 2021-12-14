import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import mockFetchShow from './../../api/fetchShow'
jest.mock( './../../api/fetchShow')


const testShow = {
    name: 'test show',
    summary: 'test summary',
    seasons: [{
        id: 0,
        name: 'season 1',
        episode: []
    },
    {
        id: 0,
        name: 'season 1',
        episode: []
    }]
}

test('renders without errors with no props', ()=>{
    render(<Display />);
});


test('renders Show component when the button is clicked ', ()=>{
    render(<Display />);
    const button = screen.getByRole('button');
    userEvent.clickButton(button);

    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', ()=>{
    render(<Display />);
    const button = screen.getByRole('button');
    userEvent.clickButton(button);

    await waitFor(() => {
        const seasonOptions=screen.queryAllByTestId('season-option');

        expect(seasonOptions).toHaveLength(2)
    })
});
