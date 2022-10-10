import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Link, Outlet} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <Link to="/">Home</Link>
            <Link to="/a">A</Link>
            <Link to="/a/b">AB</Link>
            <Link to="/qwe">Wrong</Link>
            <Outlet />
        </div>,
        children: [
            {
                path: '/',
                element: <div>Home</div>
            },
            {
                path: '/a',
                element: <div>Hello A</div>,
            },
            {
                path: '/a/b',
                element: <div>Hello AB</div>
            },
        ],
        errorElement: <div>404</div>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
