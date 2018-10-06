import React, { Component } from 'react'
import ProductList from './ProductList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AppProduct extends Component {
  render() {
    return (
      <div className="app-global">
       
        <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="title" color="inherit">
          <h2><center>Redux Observable</center></h2>
          </Typography>
        </Toolbar>
      </AppBar>
        <hr/>
        <ProductList />
        <hr/>
 
      </div>
    )
  }
}
