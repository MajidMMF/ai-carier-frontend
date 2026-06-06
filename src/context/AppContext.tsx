import axios from "axios";
import { type ReactNode, createContext, useContext, useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { type AppContextType,  type User } from "../types";
import { server } from "../main";

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProps {
    children: ReactNode
}

export const AppProvider = ({ children }: AppProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(true)


    async function fetchUser() {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null)
                setIsAuth(false)
                setLoading(false)
                return
            }

            const { data } = await axios.get(`${server}/api/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setUser(data);   
            setIsAuth(true)
        } catch (error) {
            setUser(null)
            setIsAuth(false)
        } finally {
            setLoading(false)
        }
    }

    const LogoutUser = () => {
        localStorage.setItem("token", "");
        setUser(null)
        setIsAuth(false)
        toast.success("Logout successfully");
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <AppContext.Provider
            value={{ isAuth, loading, setIsAuth, setLoading, setUser, user, LogoutUser }}
        >
            {children}
            <Toaster />
        </AppContext.Provider>
    )
}

export const useAppData = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppdata must be used within appProvider")
    }
    return context;
}
