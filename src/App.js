import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routerLoader } from './loaders/Loader';

function App() {
  const router = routerLoader();
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
