import { Box } from '@mui/material';
import React from 'react'
import { QRCode } from 'react-qrcode-logo';

function Test() {
  return (
    <Box>
      <Box>
        Test
      </Box>
      <Box>
      <QRCode logoImage='https://www.fenerbahce.org/getmedia/bf4b326b-90f0-4a6a-a332-edbfb6603de7/mobile-emblem-info.png.aspx?width=410&height=410&ext=.png' value="https://fenerbahce.org" />
      </Box>
    </Box>
  )
}

export default Test