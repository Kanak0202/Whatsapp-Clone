import { Box } from "@mui/material";

//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import styled from "@emotion/styled";

const Menu = ()=>{
    return (
        <Box>
            <Header />
            <Search />
            <Conversations />
        </Box>
    );
}

export default Menu;

