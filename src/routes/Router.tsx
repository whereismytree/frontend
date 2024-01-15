import React from 'react';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';
import { TreeInfo } from 'pages/TreeInfo';
import { SignIn } from 'pages/SignIn';
import { MyPage } from 'pages/MyPage';
import { ErrorPage } from 'pages/ErrorPage';
import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import PATH from 'constants/path';
import Redirect from 'pages/SignIn/Redirect';
import LocationMap from 'pages/TreeRegi/Map';
import LocationSearch from 'pages/TreeRegi/Search';
import TreeRegiDetail from 'pages/TreeRegi/Form';

export const Router = () => {
  const rootRoutes: RouteObject = {
    path: PATH.rootPage,
    element: <MainPage />,
  };

  const mainRoutes: RouteObject = {
    path: PATH.mainPage,
    element: <MainPage />,
  };

  const searchRoutes: RouteObject = {
    path: PATH.searchPage,
    element: <SearchPage />,
  };

  const treeInfoRoutes: RouteObject = {
    path: PATH.treeInfoPage,
    element: <TreeInfo />,
  };

  const registRouteObject = {
    search: {
      path: 'search',
      element: <LocationSearch />,
    },

    map: {
      path: 'map',
      element: <LocationMap />,
    },

    detail: {
      path: 'detail',
      element: <TreeRegiDetail />,
    },
  };

  const registInfoRoutes: RouteObject = {
    path: `${PATH.registInfoPage}/*`,
    element: <Outlet />,
    children: Object.values(registRouteObject),
  };

  const loginRoutes: RouteObject = {
    path: PATH.loginPage,
    element: <SignIn />,
  };

  const myRoutes: RouteObject = {
    path: PATH.myPage,
    element: <MyPage />,
  };

  const errorRoutes: RouteObject = {
    path: PATH.errorPage,
    element: <ErrorPage />,
  };

  const redirectdRoute: RouteObject = {
    path: PATH.redirectPage,
    element: <Redirect />,
  };

  const routes = [
    rootRoutes,
    mainRoutes,
    searchRoutes,
    treeInfoRoutes,
    registInfoRoutes,
    loginRoutes,
    myRoutes,
    errorRoutes,
    redirectdRoute,
  ];

  return useRoutes(routes);
};
