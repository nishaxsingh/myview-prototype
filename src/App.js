import React from 'react';
import Logo from './ppl-logo.png';
import Charities from './charities.json'
import './App.css';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function App() {
  const items = Charities.charities.map( (charity) => {
    return (
    <TableRow key={charity.type}>
    <TableCell component="th" scope="row">
      {charity.type}
    </TableCell>
    <TableCell align="right">{charity.charity}</TableCell>
    <TableCell align="right">{charity.society}</TableCell>
    <TableCell align="right">{charity.description}</TableCell>
    </TableRow>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" />
        <h1>
          Supported Charities
        </h1>
      </header>
   
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>type</TableCell>
            <TableCell align="right">charity</TableCell>
            <TableCell align="right">society</TableCell>
            <TableCell align="right">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
      </Table>
    </Paper>
    </div>
     );




}

export default App;
