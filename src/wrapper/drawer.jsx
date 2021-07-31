import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { SwipeableDrawer, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { AccountTree, Description, Home, Work } from '@material-ui/icons'
import { socialMediaData } from '../shared/components/social-media-icons/social-media-icons'
import { useHistory } from 'react-router'

export default function DrawerComponent (props) {
    const history = useHistory()
    const theme = useTheme()
    const { classes, openDrawer, setOpenDrawer } = props

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
                <IconButton onClick={ () => setOpenDrawer(!openDrawer) }>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <List>
                <ListItem button onClick={ () => history.replace('/') }>
                    <ListItemIcon>
                        <Home style={{ color: 'black' }} />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={ () => history.replace('/work-history') }>
                    <ListItemIcon>
                        <Work />
                    </ListItemIcon>
                    <ListItemText primary='Work History' />
                </ListItem>
                <ListItem button onClick={ () => history.replace('/projects') }>
                    <ListItemIcon>
                        <AccountTree />
                    </ListItemIcon>
                    <ListItemText primary='Projects' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={ () => props.setShowModal(true) }>
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary='Resume/CV' />
                </ListItem>
            </List>
            <Divider />
            <List>
                {socialMediaData.map((data) => (
                    <a key={ data.name } href={ data.url } rel='noreferrer' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button >
                            <ListItemIcon>
                                { data.iconComponent }
                            </ListItemIcon >
                            <ListItemText primary={ data.name } href={ data.url } rel='noreferrer' target='_blank' />
                        </ListItem>
                    </a>
                ))}
            </List>
        </SwipeableDrawer>
    )
}

DrawerComponent.propTypes = {
    classes: PropTypes.object,
    openDrawer: PropTypes.bool,
    setOpenDrawer: PropTypes.func,
    setShowModal: PropTypes.func
}
