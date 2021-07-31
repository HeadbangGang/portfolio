import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import './portfolio-footer.less'

export const PortfolioFooter = () => {
    const date = new Date
    return (
        <AppBar position='static' style={{ position: 'absolute', bottom: '0' }} color="default">
            <Toolbar style={{ justifyContent: 'flex-end' }}>
                <Typography variant="body1" color="inherit" >
                    { `© ${ date.getFullYear() } Tayden Flitcroft` }
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default PortfolioFooter