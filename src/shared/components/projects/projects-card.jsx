import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography
} from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import OpenInBrowser from '@material-ui/icons/OpenInBrowser'
import OpenInNew from '@material-ui/icons/OpenInNew'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '50.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    typography: {
        padding: theme.spacing(2),
    }
}))

export default function ProjectsCard (props) {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const [popOverElement, setPopOverElement] = useState(null)

    const { description, img, name, title, url } = props

    return (
        <div style={{ padding: '10px' }}>
            <Card className={ classes.root }>
                <CardHeader
                    action={
                        <IconButton onClick={ (e) => setPopOverElement(e.currentTarget) }>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={ name }
                />
                <a href='#' onClick={ () => setExpanded(!expanded) }>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { `${ name } by Tayden Flitcroft` }
                            <br />
                            { 'Hosted at: ' }
                            <a href={ url } target='_blank' rel="noreferrer">
                                { url }
                            </a>
                        </Typography>
                    </CardContent>
                </a>
                <CardActions disableSpacing>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={ clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        }) }
                        onClick={ () => setExpanded(!expanded) }
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={ expanded } timeout="auto" unmountOnExit>
                    <a href={ url } target='_blank' style={{ margin: '10px' }} rel="noreferrer">
                        <CardMedia
                            className={ classes.media }
                            image={ img.default }
                            title={ title }
                        />
                    </a>
                    <CardContent>
                        <Typography paragraph>
                            { description }
                        </Typography>
                    </CardContent>
                </Collapse>
                <Popover
                    open={ !!popOverElement }
                    onClose={ () => setPopOverElement(null) }
                    anchorEl={ popOverElement }
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List component="nav">
                        <a className='popover__text' href={ url }>
                            <ListItem button>
                                <ListItemIcon>
                                    <OpenInBrowser />
                                </ListItemIcon>
                                <ListItemText primary="View in this tab" />
                            </ListItem>
                        </a>
                        <a className='popover__text' target='_blank' href={ url } rel="noreferrer">
                            <ListItem button>
                                <ListItemIcon>
                                    <OpenInNew />
                                </ListItemIcon>
                                <ListItemText primary="View in a new tab" />
                            </ListItem>
                        </a>
                    </List>
                </Popover>
            </Card>
        </div>
    )
}

ProjectsCard.propTypes = {
    description: PropTypes.string,
    img: PropTypes.object,
    name: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}
