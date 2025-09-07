import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    const fetchUser = async () => {
        setUser(dummyUserData)
    }

    const fetchUserChats = async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }


    useEffect(()=> {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            
        }else{
            document.documentElement.classList.remove('dark');
        }

    },[theme])

    useEffect(()=>{
        if(user){
            fetchUserChats()
        }
        else{
            setChats([])
            setSelectedChat(null)
        }
    },[user])

    const value = {
        navigate, 
        user, 
        setUser,
        fetchUser, 
        chats, 
        setChats, 
        selectedChat, 
        setSelectedChat, 
        theme,
        setTheme
    }
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}