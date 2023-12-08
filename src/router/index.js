import React from 'react';
import {
    createBrowserRouter,
    // createRoutesFromElements,  // for older router version lower 6
    // Route // for older router version lower 6
} from 'react-router-dom';
import HomePage from '../pages/Home';
import ProductsPage from '../pages/Products';
import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';
import ProductDetailPage from '../pages/ProductDetail';

// const routeDefinition = createRoutesFromElements(   //  for older router version lower 6
//   <Route>
//       <Route path="/" element={<HomePage/>}/>
//       <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// );
//
// const router = createBrowserRouter(routeDefinition)

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,  // to set default  route, that should be loaded when parent route is active
              //  path: '', // '/' - absolute path, thus here we need to use relative path
                element: <HomePage/> // component that should be rendered
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
            {
                path: 'products/:productId',
                element: <ProductDetailPage/>
            }
        ]
    },

]);

export default router;
