import { Box, Input, InputBase } from "@mui/material";

//icons
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import styled from "@emotion/styled";

const Container = styled(Box)`
    height:55px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    & > *{
        margin:5px;
        color:#919191;
    }
`;

const Search = styled(Box)`
    background:#ffffff;
    border-radius:18px;
    width:calc(94% - 100px);
    ${'' /* width:calc(94%-100px); */}
`;

const InputField = styled(InputBase)`
    height:20px;
    width:100%;
    padding:20px;
    padding-left:25px;
    font-size:14px;
`;

const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform: rotate(40deg);
`;

const Footer = ()=>{
    return(
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <ClipIcon />
            <Search>
                <InputField placeholder="Type a message"/>
            </Search>
            <MicIcon />
        </Container>
    );
}

export default Footer;