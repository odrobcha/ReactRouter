import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

//<Outlet/>  // place where chilld rout element has to be placed
function RootLayout () {
    return (
      <Fragment>
          <MainNavigation></MainNavigation>
          <main>
              <Outlet/>
          </main>
      </Fragment>
    );

}

export default RootLayout;
