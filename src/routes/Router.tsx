import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';
import { TreeInfo } from 'pages/TreeInfo';
import { SignIn } from 'pages/SignIn/SocialLogin';
import { MyPage } from 'pages/MyPage';
import { LandingPage } from 'pages/LandingPage';
import PATH from 'constants/path';
import Redirect from 'pages/SignIn/Redirect';
import LocationMap from 'pages/TreeRegi/Map';
import LocationSearch from 'pages/TreeRegi/Search';
import TreeRegiDetail from 'pages/TreeRegi/Form';
import Nickname from 'pages/SignIn/ProfileSetting';

export const Router = () => {
  const landingRoute: RouteObject = {
    path: PATH.landingPage,
    element: <LandingPage />,
  };

  const mainRoute: RouteObject = {
    path: PATH.mainPage.root,
    element: <Outlet />,
    children: [
      { path: '', element: <MainPage /> },
      { path: PATH.mainPage.children.search, element: <SearchPage /> },
    ],
  };

  const loginRoute: RouteObject = {
    path: PATH.loginPage.root,
    element: <Outlet />,
    children: [
      { path: '', element: <SignIn /> },
      { path: PATH.loginPage.children.profileSetting, element: <Nickname /> },
      { path: PATH.loginPage.children.redirect, element: <Redirect /> },
    ],
  };

  const treeRoute: RouteObject = {
    path: PATH.treePage.root,
    element: <Outlet />,
    children: [
      { path: PATH.treePage.children.dynamicParam, element: <TreeInfo /> },
      {
        path: PATH.treePage.children.regist.root,
        element: <Outlet />,
        children: [
          { path: '', element: <SearchLocation /> },
          { path: PATH.treePage.children.regist.children.map, element: <RegistMap /> },
          { path: PATH.treePage.children.regist.children.detail, element: <TreeRegiDetail /> },
        ],
      },
    ],
  };

  const reviewRoute: RouteObject = {
    path: PATH.reviewPage.root,
    element: <Outlet />,
    children: Object.values(registRouteObject),
  };

  const loginRouteObject = {
    outlet: {
      path: '',
      element: <SignIn />,
    },

    setting: {
      path: 'setting',
      element: <Nickname />,
    },
  };

  const loginRoutes: RouteObject = {
    path: PATH.loginPage,
    element: <Outlet />,
    children: Object.values(loginRouteObject),
  };

  const myRoutes: RouteObject = {
    path: PATH.myPage,
    element: <MyPage />,
  };

  const saveRoutes: RouteObject = {
    path: PATH.savePage,
    element: <SavePage />,
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
    saveRoutes,
    errorRoutes,
    redirectdRoute,
  ];

  return useRoutes(routes);
};
