import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import routes,{RouteTypes} from '../../Routes/routes';
import { Route, Switch, Redirect, useLocation, NavLink} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import { Button } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'      
    },
    drawer: {
      
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      backgroundColor:"#fff",
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: {
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar},
    drawerPaper: {
      backgroundColor:theme.palette.primary.main,
      width: drawerWidth,
    },
    content: {
      
      flexGrow:1,
      padding: theme.spacing(3),
      
    },
    activeclass: {
            
      '& .MuiListItem-button':{
        backgroundColor:"#3548b4",
        borderLeft:"4px solid white",
        borderRadius:3
    }
    },
    
    textdecor:{
      textDecoration:'none',
      color:'inherit'        
  },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  history: Window["history"]
}


const getRoutes = (routes: RouteTypes[]) => {
  
  return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        
          return (
              <Route
                  
                  path={prop.path}
                  component={prop.component}
                  key={key}
              />
          );
      } else {
          return null;
      }
  });
};



export default function Admin(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {pathname} = useLocation();

  const getBrandText = (path: string) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        pathname.indexOf(
          routes[i].path
        ) !== -1
      ) {
        return routes[i].title;
      }
    }
    return "Home";
  }
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      
      <img src="https://app.kiranvoleti.com/static/assets/images/logo-white.png" alt="logo" style={{padding:10,width:"100%",height:"15%",objectFit:"contain"}} />
      
     
      {/* <div className={classes.toolbar} />       */}
      {/* <Divider /> */}
      <List style={{color:"#fff"}}>  
          <NavLink to="/labs/dashboard" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><DashboardIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          </NavLink>  
          <NavLink to="/labs/my-projects" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><PlaylistAddCheckIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="My Projects" />
          </ListItem>
          </NavLink>
          <NavLink to="/labs/module-library" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><LibraryBooksIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="Module Library" />
          </ListItem>
          </NavLink>
          <NavLink to="/labs/billing" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><AttachMoneyIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="Billing" />
          </ListItem>
          </NavLink>
          <NavLink to="/labs/contact" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><MailIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          </NavLink>
          <NavLink to="/labs/usage" activeClassName={classes.activeclass} className={classes.textdecor}>    
          <ListItem button>
            <ListItemIcon><ContactSupportIcon style={{color:"#fff"}} /></ListItemIcon>
            <ListItemText primary="Usage" />
          </ListItem>
          </NavLink>
          
        
          
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon color="primary" />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Scraping Robot
          </Typography> */}
          <Button variant="outlined" color="primary">Add Scrapes to Balance</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        
        <div className={classes.toolbar} />
        
        <Typography variant="h4" component="p" gutterBottom={true}>
          {getBrandText(pathname)}
        </Typography><br></br>
        

               
          <Switch>
          {getRoutes(routes)}
          </Switch>
          
      </main>
    </div>
    <CssBaseline />
    </>
  );
}
