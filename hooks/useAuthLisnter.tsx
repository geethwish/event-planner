import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '@/config/firebaseConfig';
import { setAuth, setUser } from '@/store/auth-slice';


const useAuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setAuth(user));

            }
        });

        return () => unsubscribe();
    }, [dispatch]);
};

export default useAuthListener;
