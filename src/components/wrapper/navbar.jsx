import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar (props) {
  const { classes, handleClick, openDrawer } = props

  return (
    <AppBar
      position="fixed"
      color="default"
      className={ clsx(classes.appBar, {
        [classes.appBarShift]: openDrawer,
      }) }
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={ () => {
            handleClick(null, !openDrawer)
          } }
          edge="start"
          className={ clsx(classes.menuButton, {
            [classes.hide]: openDrawer,
          }) }
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Tayden Flitcroft Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object,
  handleClick: PropTypes.func,
  openDrawer: PropTypes.bool,
  setOpenDrawer: PropTypes.func
}
