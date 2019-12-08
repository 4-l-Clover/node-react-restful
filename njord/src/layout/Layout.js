import React, { Component, Suspense } from 'react';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

const DefaultFooter = React.lazy(() => import('./Footer'));
const DefaultHeader = React.lazy(() => import('./Header'));

let ViewPage = React.lazy(() => import('../proposal/view'));

if (localStorage.getItem('role') == 3) {
  ViewPage = React.lazy(() => import('../proposal/create'));
}


class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    this.label = "View Proposals";
    if (localStorage.getItem('role') == 3) {
      this.label = "Create Proposal";
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  signOut(e) {
    e.preventDefault();

    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('avatar');
    window.location.href = '/';
    // history.push('/');
  }

  render() {
    return (
      <div className="app">

        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>

        <div className="app-body">

          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
              <Suspense>
                <ul>
                  <li>{this.label}</li>
                </ul>
              </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>

          <main className="main">
            <ViewPage/>
          </main>
        </div>

        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>

      </div>
    );
  }
}

export default DefaultLayout;
