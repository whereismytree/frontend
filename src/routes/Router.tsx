import React from 'react';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';
import { TreeInfo } from 'pages/TreeInfo';
import { SignIn } from 'pages/SignIn';
import { MyPage } from 'pages/MyPage';
import { ErrorPage } from 'pages/ErrorPage';
import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import PATH from 'constants/path';
import LocationMap from 'pages/TreeRegi/Map';
import LocationSearch from 'pages/TreeRegi/Search';
import TreeRegiDetail from 'pages/TreeRegi/Form';
import RegistedTreePage from 'pages/RegistedTreePage';

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

const myPageRouteObject = {
  myPage: {
    path: '',
    element: <MyPage />,
  },

  registedTree: {
    path: PATH.registInfoPage.slice(1),
    element: <RegistedTreePage />,
  },
};

export const Router = () => {
  const rootRoutes: RouteObject = {
    path: PATH.rootPage,
    element: <MainPage />,
  };

  const reviewRoute: RouteObject = {
    path: PATH.reviewPage,
  };

  const saveTreeRoute: RouteObject = {
    path: PATH.saveTreePage,
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
    element: <Outlet />,
    children: Object.values(myPageRouteObject),
  };

  const errorRoutes: RouteObject = {
    path: PATH.errorPage,
    element: <ErrorPage />,
  };

  const routes = [
    rootRoutes,
    reviewRoute,
    saveTreeRoute,
    mainRoutes,
    searchRoutes,
    treeInfoRoutes,
    registInfoRoutes,
    loginRoutes,
    myRoutes,
    errorRoutes,
  ];

  return useRoutes(routes);
};
