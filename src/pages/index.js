import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './index.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import VendiaAPIService from '../services/vendiaAPIService';

function createData(
    motorNumber , partNumber
  ) {
    return { motorNumber , partNumber };
  }

    // const rows = [
    // createData('Motor one', 'Part one'),
    // createData('Motor two', 'Part Two'),
    // ]


const Home = () => {
    // const rows = [];
    const [motorName, setMotorName] = React.useState('');
    const [partName, setPartName] = React.useState('');
    const [rows, setRows] = React.useState([]);
    const handleMotorChange = (event) => {
        setMotorName(event.target.value);
    };
    const handlePartChange = (event) => {
        setPartName(event.target.value);
    };

    const addMotorData = ()=>{
    //   ADD API call
        VendiaAPIService.addMotorData(motorName,partName).then(response=>{
            console.log(response.result._id);
            if(response.result._id){
                setMotorName('');
                setPartName('');
            }
            else{
                alert('Something\'s wrong');
            }
        });
    }

    const getLatestData = ()=>{
        VendiaAPIService.getMotorData().then(response=>{
            console.log(response.items);
            setRows(response.items);
        });
    }
  return (
    <div class="grid-container" style={{display:'flex',alignItems:'center',height:'60vh'}}> 
        <div class="grid-item">
            <div style={{border:'1px solid red'}}>
                <h2>Motor Form</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="outlined-basic"
                        label="Motor Number"
                        value={motorName}
                        onChange={handleMotorChange}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Part Number"
                        value={partName}
                        onChange={handlePartChange}
                        variant="outlined"
                    />
                    </Box>
                {/* {/* <TextField id="outlined-basic" label="Motor Number" variant="outlined"/> */}
                <Button variant="contained" onClick={addMotorData}>ADD MOTOR</Button>
            </div>
            
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Motor Number</TableCell>
                            <TableCell align="left">Part Number</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.serialNumber}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.serialNumber}
                            </TableCell>
                            <TableCell align="left">{row.partNumber}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Button variant="contained" onClick={getLatestData}>GET LATEST DATA TO TABLE</Button>
        </div>
        {/* <div class="grid-item">
            <div style={{border:'1px solid red'}}>
                <h2>Battery Form</h2>
                <TextField id="outlined-basic" label="Motor Number" variant="outlined"/>
                <TextField id="outlined-basic" label="Part Number" variant="outlined"/>
                <Button variant="contained">ADD BATTERY</Button>
            </div>
            <div>
                Battery data table
            </div>
        </div> */}

    </div>
  )
}

export default Home;