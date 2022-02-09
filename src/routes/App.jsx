import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
// Pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import Account from '../pages/Account';
import Signup from '../pages/Signup';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.scss';

const App =() => {
    const initialState = useInitialState();

    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/password-recovery" element={<PasswordRecovery/>}/>
                        <Route exact path="/send-email" element={<SendEmail/>}/>
                        <Route exact path="/new-password" element={<NewPassword/>}/>
                        <Route exact path="/account" element={<Account/>}/>
                        <Route exact path="/signup" element={<Signup/>}/>
                        <Route exact path="/checkout" element={<Checkout/>}/>
                        <Route exact path="/orders" element={<Orders/>}/>
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;