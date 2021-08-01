
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import DrawerComponent from './drawer'
import useSound from 'use-sound'
import drawerOpen from '../media/drawer-open.mp3'
import drawerClose from '../media/drawer-close.mp3'
import { useHistory } from 'react-router'
import Navbar from './navbar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${ drawerWidth }px)`,
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
        padding: theme.spacing(3),
    },
}))

export default function Wrapper (props) {
    const classes = useStyles()
    const history = useHistory()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [soundEffect, setSoundEffect] = useState(drawerOpen)
    const [play] = useSound(soundEffect)

    useEffect(() => {
        openDrawer ? setSoundEffect(drawerOpen) : setSoundEffect(drawerClose)
    }, [openDrawer])

    const handleClick = (path, drawerStatus) => {
        setOpenDrawer(drawerStatus ?? false)
        play()
        path && history.replace(path)
    }

    const sharedProps = { classes, handleClick, openDrawer, setOpenDrawer }

    return (
        <div className={ classes.root } style={{ overflowX: 'hidden', marginBottom: '50px' }}>
            <CssBaseline />
            <Navbar { ...sharedProps } />
            <DrawerComponent { ...sharedProps } />
            <main className={ classes.content }>
                <div className={ classes.toolbar } />
                { props.children }
            </main>
        </div>
    )
}
