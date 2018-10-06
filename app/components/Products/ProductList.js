import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ping,getUsers } from '../../actions/index'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  fontSize:{
    fontSize:'14 !important',
    color:'red'
  },
  table: {
    minWidth: 700,
    fontSize: '2rem',
    color:red
  },
  body: {
    fontSize: 14,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class ProductList extends Component {
  constructor(props){
    super(props);
    
    this.getUsers = this.getUsers.bind(this);

  
    this.state={
      id:0,

    }
  }

 createData(name, calories, fat, carbs, protein) {
  let id = this.state.id +1;
  this.setState({id: id})
  return { id, name, calories, fat, carbs, protein };
}


  getUsers(){
    this.props.buttonClickedMethod();
    this.forceUpdate();
  }
  render() {

    return (
      <div>
      


 
        <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell-header">ID</TableCell>
            <TableCell className="tableCell-header">FirstName</TableCell>
            <TableCell className="tableCell-header" >LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.users!= undefined &&
            this.props.users.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell className="tableCell" >{row.id}</TableCell>
                <TableCell className="tableCell" >{row.firstname}</TableCell>
                <TableCell className="tableCell" >{row.lastname}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <Button variant="outlined"  color="primary" onClick={this.getUsers} className={styles.button}> load users </Button>

      </div>
    )
  }
}



function mapStateToProps(state) {

 const users = state.get('users').items;

  return {
    users : users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    buttonClickedMethod: () => dispatch(getUsers()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductList)
