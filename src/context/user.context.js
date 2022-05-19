import { createContext, useContext, useState } from "react"
import { AuthContext } from "./auth.context"


const UserContext = createContext();

const UserProvider = UserContext.Provider;

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const { user } = useContext(AuthContext)

    async function getAllUsers() {
        setIsPending(true)
        await fetch("/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.token}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                setError(err);
            });
        setIsPending(false);
    }
    

    return <UserProvider value={{isPending, users, error, getAllUsers}}>{children}</UserProvider>
}


export{UserContext, UserContextProvider}