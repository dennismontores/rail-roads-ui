import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { Delete } from '@mui/icons-material'

const url = 'http://localhost:8080'

const DestinationTable = () => {
  const [rows, setRows] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  function getDestinations() {
    fetch(`${url}/railRoadCarDestinations/list`)
      .then((res) => res.json())
      .then((data) => setRows(data))
  }

  useEffect(() => {
    getDestinations()
  }, [])

  const handleClickOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSaveRequest = async () => {
    handleClose()

    const newDestination = {
      key: formRef.current['name'].value,
      value: formRef.current['priority'].value,
    }

    await fetch(`${url}/railRoadCarDestinations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDestination),
    })

    getDestinations()
  }

  const handleDeleteRequest = async (key) => {
    handleClose()

    await fetch(`${url}/railRoadCarDestinations/${key}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    getDestinations()
  }

  const formRef = useRef()

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Destinations
      </Typography>
      <Button sx={{ m: 1 }} variant="contained" onClick={handleClickOpen}>
        Add Destination
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add Destination</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <form ref={formRef}>
              <TextField autoFocus id="name" label="Name" />
              <TextField id="priority" label="Priority" />
            </form>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveRequest}>Save</Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="destinations table">
          <TableHead>
            <TableRow>
              <TableCell> Priority </TableCell>
              <TableCell> Name </TableCell>
              <TableCell> Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.key}>
                  <TableCell>{row.value}</TableCell>
                  <TableCell>{row.key}</TableCell>
                  <TableCell>
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={async () => {
                        await handleDeleteRequest(row.id)
                      }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default DestinationTable
