import * as React from 'react'
import {auth} from '../services/firebase';

import {useAlert} from './alert/alertContext';
export const AuthContext = React.createContext({} as any);

export function useAuth() {
    return React.useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    const alert = useAlert();

    async function singup(email: string, password: string, name: string, foto?: string) {
        await auth.createUserWithEmailAndPassword(email, password)
            .then(() => {

                currentUser.updateProfile({
                    displayName: name, 
                    photoURL: foto || 'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'
                })

            })
        return 
    }

    async function login(email: string, password: string) {
        await auth.signInWithEmailAndPassword(email, password)
        .then((res: any) => {
            const {displayName, email, uid, photoURL, emailVerified} = res.user;
            const user = {displayName, email, uid, photoURL, emailVerified}
            console.log(user)
            window.localStorage.setItem('@User', JSON.stringify(user));
            console.log(`User ${email} logged in`)
        })
        .catch(err => {
            alert.setAlert(err.code, err.message)
        })
        
    }

    function logout() {
        return auth.signOut()
    }
    
    function updateEmail(email: string) {
        return currentUser.updateEmail(email)
    }
    
    function updatePassword(password: string) {
        return currentUser.updatePassword(password)
    }

    function updateProfile(name: string, photo?: string) {
        currentUser.updateProfile({
            displayName: name,
            photoURL: photo || 'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg',
        })
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false) //not render the app until have the current user
        })

        return unsubscribe
    }, [])
    
    const value: any = {
        currentUser,
        singup,
        login,
        logout,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}