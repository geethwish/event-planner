import React from 'react';
import { render } from '@testing-library/react-native';
import OrganizerCard from './../shared/organizer-card';
import { ImageSourcePropType } from 'react-native';

describe('OrganizerCard', () => {
    const user = {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        profilePic: {} as ImageSourcePropType,
        phone: '123-456-7890',
        website: 'johndoe.com',
    };

    it('renders correctly with user data', () => {
        const { getByText } = render(<OrganizerCard user={user} />);
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('johndoe')).toBeTruthy();
    });
});