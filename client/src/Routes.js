import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main1 as MainLayout1, Minimal1 as MinimalLayout1 } from './layouts';
import {
  Shop as ShopView,
  Settings1 as Settings1View,
  Main as MainView,
  Business as BusinessView,
} from './views';
import { Main as MainLayout, Minimal as MinimalLayout } from "./Admin/layouts";
import { MainStore as MainLayoutStore, MinimalStore as MinimalLayoutStore } from "./Store/layouts";
import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Orders as OrdersView,
  Vehical as VehicalView,
  Deliveries as DeliveriesView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  FormPasswordReset as FormPasswordResetView,
  AdminUserRequests as AdminUserRequestsView,
} from "./Admin/views";
import {
  Dashboard as DashboardViewStore,
  ProductList as ProductListViewStore,
  UserList as UserListViewStore,
  Typography as TypographyViewStore,
  Icons as IconsViewStore,
  Account as AccountViewStore,
  Settings as SettingsViewStore,
  SignUp as SignUpViewStore,
  SignIn as SignInViewStore,
  NotFound as NotFoundViewStore,
} from './Store/views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/shop"
      />
      <RouteWithLayout
        component={ShopView}
        exact
        layout={MainLayout1}
        path="/shop"
      />
      <RouteWithLayout
        component={MainView}
        exact
        layout={MainLayout1}
        path="/main"
      />
      <RouteWithLayout
        component={Settings1View}
        exact
        layout={MainLayout1}
        path="/settings"
      />
      <RouteWithLayout
        component={BusinessView}
        exact
        layout={MinimalLayout1}
        path="/business"
      />
     <RouteWithLayout
            component={DashboardView}
            exact
            layout={MainLayout}
            path="/admin/Dashboard"
          />
          <RouteWithLayout
            component={AdminUserRequestsView}
            exact
            layout={MainLayout}
            path="/admin/UserRequests"
          />
          <RouteWithLayout
            component={ProductListView}
            exact
            layout={MainLayout}
            path="/admin/Products"
          />
          <RouteWithLayout
            component={UserListView}
            exact
            layout={MainLayout}
            path="/admin/Users"
          />
          <RouteWithLayout
            component={FormPasswordResetView}
            exact
            layout={MainLayout}
            path="/admin/Password"
          />
          <RouteWithLayout
            component={TypographyView}
            exact
            layout={MainLayout}
            path="/admin/Typography"
          />
          <RouteWithLayout
            component={OrdersView}
            exact
            layout={MainLayout}
            path="/admin/Orders"
          />
          <RouteWithLayout
            component={DeliveriesView}
            exact
            layout={MainLayout}
            path="/admin/Deliveries"
          />
          <RouteWithLayout
            component={VehicalView}
            exact
            layout={MainLayout}
            path="/admin/Vehical"
          />
          <RouteWithLayout
            component={AccountView}
            exact
            layout={MainLayout}
            path="/admin/Account"
          />
          <RouteWithLayout
            component={SettingsView}
            exact
            layout={MainLayout}
            path="/admin/Settings"
          />
          <RouteWithLayout
            component={SignUpView}
            exact
            layout={MinimalLayout}
            path="/admin/Signup"
          />
          <RouteWithLayout
            component={SignInView}
            exact
            layout={MinimalLayout}
            path="/admin/Signin"
          />
          <RouteWithLayout
            component={NotFoundView}
            exact
            layout={MinimalLayout}
            path="/admin/Notfound"
          />
           <RouteWithLayout
            component={DashboardViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/dashboard"
          />
          <RouteWithLayout
            component={ProductListViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/history"
          />
          <RouteWithLayout
            component={UserListViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/users"
          />

          <RouteWithLayout
            component={TypographyViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/typography"
          />
          <RouteWithLayout
            component={IconsViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/icons"
          />
          <RouteWithLayout
            component={AccountViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/account"
          />
          <RouteWithLayout
            component={SettingsViewStore}
            exact
            layout={MainLayoutStore}
            path="/store/settings"
          />
          <RouteWithLayout
            component={SignUpViewStore}
            exact
            layout={MinimalLayoutStore}
            path="/store/signup"
          />
          <RouteWithLayout
            component={SignInViewStore}
            exact
            layout={MinimalLayoutStore}
            path="/store/signin"
          />
          <RouteWithLayout
            component={NotFoundViewStore}
            exact
            layout={MinimalLayoutStore}
            path="/store/notfound"
          />


    </Switch>
  );
};

export default Routes;
