import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import {withStyles} from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons';

// Shared components
import {Facebook as FacebookIcon, Google as GoogleIcon} from 'icons';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';
import {FIELDS} from "../constants";

// Service methods
const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignIn extends Component {

  render() {
    const {classes, email, password, onChangeHandler, onFormSubmitHandler, errors, onBlurHandler} = this.props;

    let emailErrorUI, passwordUI;

    if (errors[FIELDS.EMAIL]) {
      emailErrorUI = (
        <Typography className={classes.fieldError} variant="body2">
          {errors[FIELDS.EMAIL]}
        </Typography>
      )
    }

    if (errors[FIELDS.PASSWORD]) {
      passwordUI = (
        <Typography className={classes.fieldError} variant="body2">
          {errors[FIELDS.PASSWORD]}
        </Typography>
      )
    }

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h1">
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={onFormSubmitHandler} action="javascript:void(0)">
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    Sign in with social media
                  </Typography>
                  <Button className={classes.facebookButton} color="primary" onClick={this.handleSignIn}
                          size="large" variant="contained">
                    <FacebookIcon className={classes.facebookIcon}/>
                    Login with Facebook
                  </Button>
                  <Button className={classes.googleButton} onClick={this.handleSignIn} size="large"
                          variant="contained">
                    <GoogleIcon className={classes.googleIcon}/>
                    Login with Google
                  </Button>
                  <Typography className={classes.sugestion} variant="body1">
                    or login with email address
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={onChangeHandler}
                      type="text"
                      value={email}
                      variant="outlined"
                      onBlur={onBlurHandler}
                    />
                    {emailErrorUI}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      name="password"
                      onChange={onChangeHandler}
                      type="password"
                      value={password}
                      variant="outlined"
                      onBlur={onBlurHandler}
                    />
                    {passwordUI}

                    <Button
                      className={classes.signInButton}
                      type="submit"
                      color="primary"
                      size="large"
                      variant="contained">
                      Sign in now
                    </Button>

                  </div>

                  <Typography className={classes.signUp} variant="body1">
                    Don't have an account?{' '}
                    <Link className={classes.signUpUrl} to="/sign-up">
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
