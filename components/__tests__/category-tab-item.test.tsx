import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CategoryTabItem, { ItemData } from '../shared/category-tab-item';
import { Colors } from '@/constants/Colors';

describe('CategoryTabItem', () => {
    const item: ItemData = {
        id: 1,
        name: 'Fashion',
        slug: 'fashion',
    };

    const mockOnPress = jest.fn();

    it('renders correctly with item data', () => {
        const { getByText } = render(<CategoryTabItem item={item} onPress={mockOnPress} selected={false} />);
        expect(getByText('Fashion')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const { getByText } = render(<CategoryTabItem item={item} onPress={mockOnPress} selected={false} />);
        fireEvent.press(getByText('Fashion'));
        expect(mockOnPress).toHaveBeenCalled();
    });
});