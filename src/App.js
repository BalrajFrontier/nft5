import ReactDOM from 'react-dom/client';
import React, {useState, createContext} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CreateEvent from './component/CreateEvent';
import AppContext from './AppContext';
import Home from './component/Home';
import Detail from './component/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/create-event',
    element: <CreateEvent/>
  },
  {
    path:`/events/:id`,
    element: <Detail/>
  }
]);

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  return (
    <AppContext.Provider
        value={{
          walletAddress, setWalletAddress}}
          >
       <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
export default App;
