import { useEffect, useState, useContext } from "react";

import { getUsers } from "../../../service/api";
import { Box, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

import Conversation from "./Conversation";
import styled from "@emotion/styled";

const Component = styled(Box)`
    hieght: 81vh;
    overflow:overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity:0.6;
`;

const Conversations = ({text})=>{
    const {account} = useContext(AccountContext);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers();
            const filteredData = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    },[text]);
    return(
        <Component>
            {
                users.map(user=>{
                        return(
                            user.sub != account.sub && 
                            <Box key={user.sub}>
                            <Conversation user={user} />
                            <StyledDivider />
                            </Box>

                        );
                    
                })
            }
        </Component>
    );
}

export default Conversations;