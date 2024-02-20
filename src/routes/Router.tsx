import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';
import { TreeInfo } from 'pages/TreeInfo';
import { SignIn } from 'pages/SignIn/SocialLogin';
import { MyPage } from 'pages/MyPage';
import { LandingPage } from 'pages/LandingPage';
import PATH from 'constants/path';
import SearchLocation from 'pages/TreeRegi/Search';
import Redirect from 'pages/SignIn/Redirect';
import ReviewDetailPage from 'pages/ReviewDetailPage';
import RegistMap from 'pages/TreeRegi/Map';
import TreeRegiDetail from 'pages/TreeRegi/Form';
import Nickname from 'pages/SignIn/ProfileSetting';
import SavePage from 'pages/SavePage';
import RegistedTreePage from 'pages/RegistedPage';
import RegistReviewPage from 'pages/RegistedReviewPage';

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
    children: [
      { path: PATH.reviewPage.dynamicParam, element: <ReviewDetailPage /> },
      // 리뷰 등록 페이지
      { path: `${PATH.reviewPage.children.regist}/:treeId`, element: null },
      // 리뷰 수정 페이지
      { path: `${PATH.reviewPage.children.edit}/:reviewId`, element: null },
    ],
  };

  const myRoute: RouteObject = {
    path: PATH.myPage.root,
    element: <Outlet />,
    children: [
      { path: '', element: <MyPage /> },
      { path: PATH.myPage.children.savedTrees, element: <SavePage /> },
      { path: PATH.myPage.children.registedTrees, element: <RegistedTreePage /> },
      { path: PATH.myPage.children.registedReviews, element: <RegistReviewPage /> },
    ],
  };

  const routes = [landingRoute, mainRoute, treeRoute, reviewRoute, loginRoute, myRoute];

  return useRoutes(routes);
};
