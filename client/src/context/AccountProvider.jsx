import { createContext, useState } from "react";

export const AccountContext = createContext(null); //This is our context

const AccountProvider = ({children})=>{
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    return (
        <AccountContext.Provider value={{ account, setAccount, person, setPerson}}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;

//Whatever we write in our value attribute we can export it as our context