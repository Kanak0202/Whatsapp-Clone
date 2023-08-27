import { createContext, useState, useRef, useEffect } from "react";

//io
import {io} from "socket.io-client";

export const AccountContext = createContext(null); //This is our context

const AccountProvider = ({children})=>{
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setMessageFlag] = useState(false);
    const socket = useRef();

    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[]);

    return (
        <AccountContext.Provider value={{ account, setAccount, person, setPerson, socket, activeUsers, setActiveUsers, newMessageFlag, setMessageFlag}}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;

//Whatever we write in our value attribute we can export it as our context