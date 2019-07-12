import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { electron } from 'electron';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    background: 'linear-gradient(45deg, #14538F 30%, #49849B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(20,83,143, .3)',
    color: 'white',
    height: 28,
    padding: '0 30px',
  },
});

class LoginPage extends React.Component {

  constructor(props){
      super(props);


  }

  componentDidMount(){

  }

  login(){
    const {ipcRenderer: ipc} = require('electron');
    ipc.send('open_mainView', { data : 'hola'} );
  }

  _renderMetas = ()=>{
    return (
        <Typography style={{position:'absolute', bottom:10}} variant="caption" display="block" gutterBottom>
          Oral Clinic v1.0.0
        </Typography>
        );
  } 

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.container} style={{borderRadius: 5,backgroundColor:'white', padding:10, width:'100%', height:'auto', display:'flex', justifyContent:'center', textAlign:'center', alignItems:'center', "flexDirection" :'column'}}>
          <TextField
           type="email"
            id="standard-full-width"
            label="Correo"
            placeholder="Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="password"
            id="standard-full-width"
            label="Contraseña"
            placeholder="Contraseña"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        <Grid style={{ marginBottom: 20 }} alignItems='left' container className={classes.container} spacing={0}>
          <Grid item xs={12} >
            <Link style={{ fontSize: 12 , color:'#14538F'}} component="button" variant="body2" onClick={(e) => {e.preventDefault()}}>
              Olvide mi contraseña
            </Link>
          </Grid>
        </Grid>
        <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button className={classes.root} onClick={this.login}>
              ENTRAR
            </Button>
        </div>
        <div style={{position:'relative'}}>
        </div>
        <Typography style={{marginTop:5}} variant="caption" display="block" gutterBottom>
          Ingrese usando su huella
        </Typography>
        {this._renderMetas()}
        </div>
      </form>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);