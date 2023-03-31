import React from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
  Stack,
  Hidden,
  Grid,
  Tooltip,
  Zoom,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchModal from "../components/SearchModal";
import useBlockChain from "../hooks/useBlockChain";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.background.light}`,
  },
  box: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appName: {
    color: theme.palette.text.primary,
  },
  mobileStack: {
    width: "100%",
  },
  mobileSearchConntainer: {
    width: "100%",
    paddingTop: theme.spacing(1),

    paddingBottom: theme.spacing(1),
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  const { currentAccount, connectWallet, onCreateFund, chainConnected } = props;

  return (
    <AppBar
      position="static"
      variant="outlined"
     
      className={classes.root}
      style={{
        backgroundColor: "transparent",
        zIndex:"-9000"
      }}
    >
      <Container maxWidth="lg">
        <Toolbar style={{height:"85px"}} disableGutters>
          <Hidden mdDown>
            <Box className={classes.box}>
              {/* <IconButton>
                <Avatar width="125px" alt="Remy Sharp" src="/images/logo.png" />
              </IconButton> */}
              <Typography variant="h2" className={ classes.appName }>
                <img width={"220PX"} src="/images/logo.png">
                </img>
               
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              {!currentAccount||!chainConnected ? (
                <Tooltip
                  TransitionComponent={Zoom}
                  arrow
                  title={currentAccount ? "Switch Network to Polygon Mumbai testnet" :  ""}
                >
                  <Button size="small" variant="contained" onClick={connectWallet}>
                    {currentAccount ? "Switch Network" :  "Connect Wallet"}
                  </Button>
                </Tooltip>
              ) : (
                <Button size="small" variant="contained" onClick={onCreateFund}>
                  Create Fund
                </Button>
              )}
              <SearchModal {...props} />
            </Stack>
          </Hidden>
          <Hidden mdUp>
             <Grid
                item
                sm={12}
                xs={12}
                className={classes.mobileSearchConntainer}
              >
                <SearchModal {...props} />
              </Grid>
            <Grid container className={classes.mobileStack}>
              <Grid item sm={12} xs={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box className={classes.box}>
                    <IconButton>
                      <Avatar alt="Remy Sharp" src="/images/logo.png" />
                    </IconButton>
                  
                  </Box>
                    {!currentAccount||!chainConnected ? (
                      <Button
                        size="small"
                      variant="contained"
                        onClick={connectWallet}
                      >
                        {currentAccount ? "Switch Network" :  "Connect Wallet"}
                      </Button>
                    ) : (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={onCreateFund}
                    >
                      Create Fund
                    </Button>
                  )}
                </Stack>
              </Grid>
             
            </Grid>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
