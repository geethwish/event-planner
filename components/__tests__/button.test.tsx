import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../shared/button';

describe('CustomButton', () => {
    let onPressMock: jest.Mock;

    beforeEach(() => {
        onPressMock = jest.fn();
    });

    it('renders correctly with Button variant', () => {
        const { getByText } = render(
            <CustomButton onPress={onPressMock} label="Click Me" variant="Button" classNames="extra-class" />
        );
        expect(getByText('Click Me')).toBeTruthy();
    });

    it('renders correctly with Link variant', () => {
        const { getByText } = render(
            <CustomButton onPress={onPressMock} label="Click Me" variant="Link" classNames="extra-class" />
        );
        expect(getByText('Click Me')).toBeTruthy();
    });

    it('calls onPress when Button is pressed', () => {
        const { getByText } = render(
            <CustomButton onPress={onPressMock} label="Click Me" variant="Button" classNames="extra-class" />
        );
        fireEvent.press(getByText('Click Me'));
        expect(onPressMock).toHaveBeenCalled();
    });

    it('calls onPress when Link is pressed', () => {
        const { getByText } = render(
            <CustomButton onPress={onPressMock} label="Click Me" variant="Link" classNames="extra-class" />
        );
        fireEvent.press(getByText('Click Me'));
        expect(onPressMock).toHaveBeenCalled();
    })
});