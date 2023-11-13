import React from "react";
import { MainPage } from "pages/MainPage";
import { SearchPage } from "pages/SearchPage";
import { TreeInfo } from "pages/TreeInfo";
import { TreeRegi } from "pages/TreeRegi";
import { SignIn } from "pages/SignIn";
import { MyPage } from "pages/MyPage";
import { ErrorPage } from "pages/ErrorPage";
import { useRoutes, RouteObject } from "react-router-dom";

export const Router = () => {
  const rootRoutes: RouteObject = {
    path: "/",
    element: <MainPage />,
  };

  const mainRoutes: RouteObject = {
    path: "/main",
    element: <MainPage />,
  };

  const searchRoutes: RouteObject = {
    path: "/search",
    element: <SearchPage />,
  };

  const treeInfoRoutes: RouteObject = {
    path: "/treeinfo",
    element: <TreeInfo />,
  };
  const registInfoRoutes: RouteObject = {
    path: "/regist",
    element: <TreeRegi />,
  };

  const loginRoutes: RouteObject = {
    path: "/login",
    element: <SignIn />,
  };

  const myRoutes: RouteObject = {
    path: "/my",
    element: <MyPage />,
  };

  const errorRoutes: RouteObject = {
    path: "/error",
    element: <ErrorPage />,
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
  ];

  return useRoutes(routes);
};
