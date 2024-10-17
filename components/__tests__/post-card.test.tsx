import React from 'react';
import { render } from '@testing-library/react-native';
import PostCard from '../shared/post-card';
import { IPost } from '@/store/posts-slice';

describe('PostCard', () => {
    const mockPost: IPost = {
        id: 1,
        title: 'Test Post Title',
        body: 'This is a test post body.',
        userId: 0
    };

    it('renders correctly with given data', () => {
        const { getByText } = render(<PostCard data={mockPost} />);

        expect(getByText('Test Post Title')).toBeTruthy();
        expect(getByText('This is a test post body.')).toBeTruthy();
        expect(getByText('Joan Westernburg')).toBeTruthy();
        expect(getByText('Jul 27')).toBeTruthy();
        expect(getByText('3.2k')).toBeTruthy();
        expect(getByText('12')).toBeTruthy();
    });
});