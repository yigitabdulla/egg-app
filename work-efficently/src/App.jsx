// App.jsx
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Store from './components/Store';
import "./styles/App.scss"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/store",
          element:<Store/>,
        },
      ]
    },

  ]);

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
