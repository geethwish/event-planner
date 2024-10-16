import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

// Created a custom drawer component to design custom side menu
import CustomDrawerContent from '@/components/custom-drawer-component';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: '#ffff'
                    }
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            />

        </GestureHandlerRootView>
    );
}
