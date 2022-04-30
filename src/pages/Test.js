import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { QRCode } from 'react-qrcode-logo';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function Test() {
  const [state, setState] = useState([]);


  const updateState = (el, index) => {
    console.log("el", el, index);
    const temp = state;
    temp[index] = el;
    console.log("temp", temp)
    setState(JSON.parse(JSON.stringify(temp)));
  }
  const renderRows = (obj) => {

    return obj.map((el, index) => {
      console.log("ind", index, obj[index].url)
      return (
        <TableRow key={el.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>{el.id}</TableCell>
          <TableCell><TextField label="URL" value={obj[index].url} onChange={e => updateState({ ...el, url: e.target.value }, index)} /></TableCell>
          <TableCell> <QRCode 
          // logoImage='https://www.fenerbahce.org/getmedia/bf4b326b-90f0-4a6a-a332-edbfb6603de7/mobile-emblem-info.png.aspx?width=410&height=410&ext=.png'
           value={state[index].url} />
          </TableCell>
        </TableRow>
      )
    })

  }

  const addRow = () => {
    setState([...state, { id: state.length + 1, url: "" }])
  }

  return (
    <Box style={{ flexGrow: 1, flex: 1 }}>
      <Box>
        <Button onClick={addRow}>+</Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>QR</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderRows(state)}
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default Test