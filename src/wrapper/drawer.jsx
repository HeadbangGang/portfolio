import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { socialMediaData } from '../shared/components/social-media-icons/social-media-icons'

export default function DrawerComponent (props) {
    const theme = useTheme()
    const { classes, openDrawer, setOpenDrawer } = props

    return (
        <Drawer
            variant="permanent"
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
        >
            <div className={ classes.toolbar }>
                <IconButton onClick={ () => setOpenDrawer(!openDrawer) }>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={ text }>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={ text } />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {socialMediaData.map((data) => (
                    <ListItem button key={ data.name }>
                        <div className='MuiListItemIcon-root'>
                            <a href={ data.url } rel='noreferrer' target='_blank'>
                                <img src={ data.img } alt='' />
                            </a>
                        </div>
                        <ListItemText primary={ data.name } />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

DrawerComponent.propTypes = {
    classes: PropTypes.object,
    openDrawer: PropTypes.bool,
    setOpenDrawer: PropTypes.func
}