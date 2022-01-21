import React, {useEffect} from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import {useDispatch} from "react-redux"
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import "./style"
import logo from "./images/logo1.jfif"
import useStyles from "./style.js"
import { getPosts } from "./actions/posts";
const App=()=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    }, [dispatch])
    return (
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h3" align="center">NL IT Job Board</Typography>
                    {/*<img className={classes.image} src={logo} alt="logo" height="300" width={800}/>*/}
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                            <Grid item xs={12} sm={7}>
                                <Posts/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        )
}
export default App;