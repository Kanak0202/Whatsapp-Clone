import { AppBar, Box, Toolbar, styled} from "@mui/material";

//components
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)`
    height:220px;
    background-color:#00A884;
    box-shadow:none;
`;

const Component = styled(Box)`
    height:100vh;
    background-color: #dcdcdc;
`;

const Messenger = () => {
  return (
    <Component>
        <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
