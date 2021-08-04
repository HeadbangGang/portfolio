import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { SwipeableDrawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { AccountTree, Description, Home, Work, Email } from '@material-ui/icons'
import { socialMediaData } from '../shared/components/social-media-icons/social-media-icons'

export default function DrawerComponent (props) {
    const theme = useTheme()
    const { classes, handleClick, openDrawer, setOpenDrawer } = props

    return (
        <SwipeableDrawer
            className={ clsx(classes.drawer, {
                [classes.drawerOpen]: openDrawer,
                [classes.drawerClose]: !openDrawer,
            }) }
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: openDrawer,
                    [classes.drawerClose]: !openDrawer,
                }),
            }}
            open={ openDrawer }
            onOpen={ () => setOpenDrawer(true) }
            onClose={ () => setOpenDrawer(false) }
            variant="permanent"
        >
            <div className={ classes.toolbar }>
                <IconButton onClick={ handleClick }>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <List>
                <ListItem
                    button
                    onClick={ () => handleClick('/') }
                >
                    <ListItemIcon>
                        <Home style={{ color: 'black' }} />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={ () => handleClick('/work-history') }
                >
                    <ListItemIcon>
                        <Work />
                    </ListItemIcon>
                    <ListItemText primary='Work History' />
                </ListItem>
                <ListItem
                    button
                    onClick={ () => handleClick('/projects') }
                >
                    <ListItemIcon>
                        <AccountTree />
                    </ListItemIcon>
                    <ListItemText primary='Projects' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={ () => handleClick('/resume') }
                >
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary='Resume/CV' />
                </ListItem>
            </List>
            <Divider />
            <List>
                { socialMediaData.map((data) => (
                    <a key={ data.name } href={ data.url } rel='noreferrer' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button >
                            <ListItemIcon>
                                { data.iconComponent }
                            </ListItemIcon >
                            <ListItemText primary={ data.name } />
                        </ListItem>
                    </a>
                )) }
            </List>
            <Divider />
            <List>
                <a href='mailto:taydengoodeill@gmail.com'>
                    <ListItem
                        button
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon >
                        <ListItemText primary='Email Me' />
                    </ListItem>
                </a>
            </List>
        </SwipeableDrawer>
    )
}

DrawerComponent.propTypes = {
    classes: PropTypes.object,
    handleClick: PropTypes.func,
    openDrawer: PropTypes.bool,
    setOpenDrawer: PropTypes.func
}
