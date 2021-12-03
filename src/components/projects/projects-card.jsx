import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import OpenInBrowser from '@material-ui/icons/OpenInBrowser'
import OpenInNew from '@material-ui/icons/OpenInNew'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
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
    <Card className="project-card__root">
      <CardHeader
          action={
            <IconButton onClick={ (e) => setPopOverElement(e.currentTarget) }>
              <MoreVertIcon />
            </IconButton>
          }
          title={ name }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { 'Hosted at: ' }
          <a href={ url } target="_blank" rel="noreferrer">
            { url }
          </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
        { img?.default &&
          <a className="project-card__media-wrapper" href={ url } target="_blank" rel="noreferrer">
            <CardMedia
              className="project-card__media"
              image={ img.default }
              title={ title }
            />
          </a> }
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
          <a className="popover__text" href={ url }>
            <ListItem button>
              <ListItemIcon>
                <OpenInBrowser />
              </ListItemIcon>
              <ListItemText primary="View in this tab" />
            </ListItem>
          </a>
          <a className="popover__text" target="_blank" href={ url } rel="noreferrer">
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
  )
}

ProjectsCard.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}
