import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

import SvgAllIcon from '../icons/all';
import { Colors } from '@/constants/Colors';
import FashionIcon from '../icons/fashion';
import HealthIcon from '../icons/health';
import TechnologyIcon from '../icons/technology';
import SportIcon from '../icons/sport';
import CustomIcon from '../icons/other';

export type ItemData = {
    id: number | string;
    name: string;
    slug: string;
};

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    selected: boolean
};

const CategoryTabItem: FC<ItemProps> = ({ item, onPress, selected }) => {
    return (
        <TouchableOpacity onPress={onPress} className={`mr-2 p-2 flex-col gap-y-2 items-center justify-center rounded-full`}>
            <View className={` ${selected ? 'bg-primary' : 'bg-secondary'} w-11 h-11 rounded-full flex-row items-center justify-center`}>
                {
                    item.slug === 'all' && <SvgAllIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
                {
                    item.slug === 'fashion' && <FashionIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
                {
                    item.slug === 'health' && <HealthIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
                {
                    item.slug === 'technology' && <TechnologyIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
                {
                    item.slug === 'sports' && <SportIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
                {
                    item.slug === 'other' && <CustomIcon width='18px' height='18px' fill={selected ? Colors.light.white : Colors.light.subText} />
                }
            </View>
            <Text className={`${selected ? 'text-primary font-natoSan600' : 'text-gray-300'}`}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryTabItem

const styles = StyleSheet.create({})