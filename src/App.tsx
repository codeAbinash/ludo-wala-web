import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Download from './screens/Download'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/download',
    element: <Download />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
