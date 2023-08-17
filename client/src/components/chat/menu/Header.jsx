import { useContext } from "react";

import {AccountContext} from "../../../context/AccountProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

//icons
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//components
import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)`
    height:44px;
    background:#ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;
`;

const Wrapper= styled(Box)`
    margin-left:auto;
    & > *{
        margin-left:2px;
        padding:8px;
        color:#000;
    };
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`; 

const Image = styled('img')({
    height:40,
    width:40,
    borderRadius:"50%"
})

const Header = ()=>{
    const {account} = useContext(AccountContext);
    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" />
                <Wrapper>
                    <ChatIcon />
                    <HeaderMenu />
                </Wrapper>
            </Component>
        </>
    );
}

export default Header;