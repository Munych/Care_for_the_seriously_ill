import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="/pacient" element={<div>Pacient</div>} />
            </Route>
        </Routes>
    )
}