import React, { Fragment } from 'react';
import Select from 'react-select';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/home/Home';
////////////////---UI---///////////////
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
//import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
//import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

import { useEagerConnect, useInactiveListener } from './hooks';
import {
  injected
  // network,
  // walletconnect,
  // walletlink,
  // ledger,
  // trezor,
  // frame,
  // authereum,
  // fortmatic,
  // portis,
  // squarelink,
  // torus
} from './connectors';

// let ConnectorNames {
//   //Injected: 'Injected',
//   // Network = 'Network',
//   // WalletConnect = 'WalletConnect',
//   // WalletLink = 'WalletLink',
//   // Ledger = 'Ledger',
//   // Trezor = 'Trezor',
//   // Frame = 'Frame',
//   // Authereum = 'Authereum',
//   // Fortmatic = 'Fortmatic',
//   // Portis = 'Portis',
//   // Squarelink = 'Squarelink',
//   // Torus = 'Torus'
// }

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './css/App.css';

import { Header } from './components/layout/parts/Header';
import Loan from './components/layout/home/Loan';
import Terms from './components/layout/home/Terms';
import Privacy from './components/layout/home/Privacy';
import Createloan from './components/layout/uploads/Createloan';
import Companyreg from './components/layout/uploads/Companyreg';
import Dashboard from './components/layout/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Companies from './components/layout/companies/Companies';
import Details from './components/layout/companies/Details';
import  Request  from './components/layout/requests/Request';
import Login from './components/auth/Login';

const App = () => {
  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Route exact path='/' component={Home} />
            {/* <section className=''> */}
            <section>
              <Switch>
                <Route exact path='/loan/details/:id' component={Loan} />
                <Route
                  exact
                  path='/companies/details/:id'
                  component={Details}
                />
                <PrivateRoute exact path='/createloan' component={Createloan} />
                <PrivateRoute exact path='/requests' component={Request} />
                <PrivateRoute exact path='/companyreg' component={Companyreg} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/companies' component={Companies} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/terms' component={Terms} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </section>
            {/* <Footer /> */}
          </Fragment>
        </Router>
      </Provider>
    </Web3ReactProvider>
  );
};

export default App;
