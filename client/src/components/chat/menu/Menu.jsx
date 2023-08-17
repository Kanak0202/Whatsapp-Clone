import { Box } from "@mui/material";

//components
import Header from "./Header";
import Search from "./Search";
import styled from "@emotion/styled";

const Menu = ()=>{
    return (
        <Box>
            <Header />
            <Search />
        </Box>
    );
}

export default Menu;

