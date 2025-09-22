import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MainRoute } from './Route/route'

const App = () => {
  return (
<RouterProvider router={MainRoute}/>
  )
}

export default App
