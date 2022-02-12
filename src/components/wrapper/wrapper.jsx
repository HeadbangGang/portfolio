import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerComponent from './drawer'
import { useHistory } from 'react-router'
import Navbar from './navbar'

const drawerWidth = 240

export default function Wrapper ({ children }) {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      height: '100%'
    },
  }))

  const history = useHistory()
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()

  const handleClick = (path, override) => {
    setOpenDrawer(override || (openDrawer && !openDrawer))
    path && history.replace(path)
  }

  const sharedProps = { classes, handleClick, openDrawer, setOpenDrawer }

  return (
    <div style={{ display: 'flex', overflowX: 'hidden', height: '100%' }}>
      <Navbar { ...sharedProps } />
      <DrawerComponent { ...sharedProps } />
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        <div className="portfolio-container">
          { children }
        </div>
      </main>
    </div>
  )
}
