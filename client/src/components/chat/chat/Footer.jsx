import { Box, Input, InputBase } from "@mui/material";

//icons
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

//api
import { uploadFile } from "../../../service/api";

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

const Footer = ({sendText, setValue, value, file, setFile, setImage})=>{
    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    },[file])
    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }
    return(
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input type="file" style={({display:"none"})} id="fileInput" onChange={(e)=>onFileChange(e)}/>
            <Search>
                <InputField placeholder="Type a message" onChange={(e)=>setValue(e.target.value)} onKeyPress={(e)=> sendText(e)} value={value}/>
            </Search>
            <MicIcon />
        </Container>
    );
}

export default Footer;