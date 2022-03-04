import { Add } from '@mui/icons-material'
import { Box, Typography, Fab } from '@mui/material'

export const PageHeader = ({onButtonClick:handleClick, title, buttonTitle, isCreateButton}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: (theme) => theme.spacing(2),
      }}>
      <Typography sx={{ fontSize: (theme) => theme.spacing(3), fontWeight: 'bold' }}>{title}</Typography>

      <Fab
          sx={{ margin: '10px', padding: (theme) => theme.spacing(2) }}
          variant="extended"
          color="primary"
          onClick={handleClick}>
          {isCreateButton && <Add sx={{ mr: 1 }} />}
          {buttonTitle}
      </Fab>
    </Box>
  )
}
