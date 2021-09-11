import React,{useContext} from "react";
import { MovieContext } from "./MovieContext";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MovieList from "./MovieList";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Nav=()=>{
    const classes = useStyles();
    const [movies,setMovies]=useContext(MovieContext);

    return(
        <div className="navbar">
            <AppBar position="static">
             <Toolbar>
              <Typography variant="h6" className={classes.title}>
                     <span className="sameli">
                     <h3>Sree Chakram</h3>
                     <p>List of Movies:{movies.length}</p>
                     </span>
            
             </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
}
export default Nav;