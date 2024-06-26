import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
      <nav className={classes.navbar}>
            <ul className={classes.navbarUl}>
              <li className="left"><a className={classes.navbarLink} href="http://localhost:3000/profile">DreamScaper Muse</a></li>
              <li className={classes.navbarLi}><a className={classes.navbarLink} href="http://localhost:3001/">Memories</a></li>
              <li className={classes.navbarLi}><a className={classes.navbarLink} href="http://localhost:3000/Journal.html">Journal</a></li>
              <li className={classes.navbarLi}><a className={classes.navbarLink} href="http://127.0.0.1:8009">Dream AI</a></li>
            </ul>
          </nav>
        <Typography className={classes.heading} variant="h6" align="center">
          Memories
          {/* Navigation bar */}
          
        </Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
