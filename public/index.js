import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import { RouterProvider } from 'react-router-dom';
import { AppProviders } from '../config/globalVariable';


const root = createRoot(document.getElementById('root'));

root.render(
    <AppProviders>
        <RouterProvider router={App} />
    </AppProviders>
);
