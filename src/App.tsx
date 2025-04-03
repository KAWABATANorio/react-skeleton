import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <Typography variant="h1">Vite + React</Typography>
      <Box className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>
      <Typography sx={{ color: '#888' }}>Click on the Vite and React logos to learn more</Typography>
    </>
  )
}

export default App
