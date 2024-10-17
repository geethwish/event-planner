import React from 'react';
import { render } from '@testing-library/react-native';
import SectionTitle from './../shared/section-title';
// import { Href } from 'expo-router';

describe('SectionTitle', () => {
    it('renders correctly with title only', () => {
        const { getByText } = render(<SectionTitle title="Test Title" />);
        expect(getByText('Test Title')).toBeTruthy();
    });

    it('renders correctly with title and link', () => {
        const link = { url: '/test-url', text: 'Test Link' };
        const { getByText, getByRole } = render(<SectionTitle title="Test Title" link={link} />);

        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Link')).toBeTruthy();
        expect(getByRole('link')).toBeTruthy();
    });

    it('does not render link if link prop is undefined', () => {
        const { queryByRole } = render(<SectionTitle title="Test Title" />);
        expect(queryByRole('link')).toBeNull();
    });
});