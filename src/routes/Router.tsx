import { useRoutes, RouteObject, Outlet } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SearchPage } from 'pages/SearchPage';
import { TreeInfo } from 'pages/TreeInfoPage';
import { MyPage } from 'pages/MyPage';
import { LandingPage } from 'pages/LandingPage';
import { ErrorPage } from 'pages/ErrorPage';
import SignIn from 'pages/LoginPage/SocialLogin';
import PATH from 'constants/path';
import SearchLocation from 'pages/TreeRegistPage/AddressSearch';
import Redirect from 'pages/LoginPage/Redirect';
import ReviewDetailPage from 'pages/ReviewDetailPage';
import RegistMap from 'pages/TreeRegistPage/LocationPickerMap';
import TreeRegiDetail from 'pages/TreeRegistPage/TreeDetailForm';
import Nickname from 'pages/LoginPage/ProfileSetting';
import SavePage from 'pages/SavedTreePage';
import RegistedTreePage from 'pages/MyTreePage';
import RegistReviewPage from 'pages/MyReviewPage';
import ReviewRegistAndEditPage from 'pages/ReviewRegistAndEditPage';
import useUser from 'hooks/useUser';
import Unauthorized from 'components/Guides/Unauthorized';
import SessionExpiredGuide from 'components/Guides/SessionExpired';

const Router = () => {
  const { isLogin } = useUser();
  const AuthElement = (element: JSX.Element) => (isLogin ? element : <Unauthorized />);

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
      // TODO: Redirect URI를 설정할 수 있는 기능이 백엔드에 정의되지 않아 loginRedirectRoute를 따로 작성해 구현했습니다.
      // 백엔드에 구현완료 되면 아래 주석을 풀고 getPath 유틸리티 함수를 통해 리다이렉트 기능 구현하면 됩니다.
      // { path: PATH.loginPage.children.redirect, element: <Redirect /> },
    ],
  };

  const loginRedirectRoute: RouteObject = {
    path: 'oauth/redirect',
    element: <Redirect />,
  };

  const treeRoute: RouteObject = {
    path: PATH.treePage.root,
    element: <Outlet />,
    children: [
      { path: PATH.treePage.children.dynamicParam, element: AuthElement(<TreeInfo />) },
      {
        path: PATH.treePage.children.regist.root,
        element: AuthElement(<Outlet />),
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
      {
        path: `${PATH.reviewPage.children.regist}/:treeId`,
        element: AuthElement(<ReviewRegistAndEditPage />),
      },
      // 리뷰 수정 페이지
      {
        path: `${PATH.reviewPage.children.edit}/:reviewId`,
        element: AuthElement(<ReviewRegistAndEditPage />),
      },
    ],
  };

  const myRoute: RouteObject = {
    path: PATH.myPage.root,
    element: AuthElement(<Outlet />),
    children: [
      { path: '', element: <MyPage /> },
      { path: PATH.myPage.children.savedTrees, element: <SavePage /> },
      { path: PATH.myPage.children.registedTrees, element: <RegistedTreePage /> },
      { path: PATH.myPage.children.registedReviews, element: <RegistReviewPage /> },
    ],
  };

  const NotFoundRoute: RouteObject = {
    path: '*',
    element: <ErrorPage />,
  };

  const loginExpiredRoute: RouteObject = {
    path: PATH.sessionExpired,
    element: <SessionExpiredGuide />,
  };

  const routes = [
    landingRoute,
    mainRoute,
    treeRoute,
    reviewRoute,
    loginRoute,
    loginRedirectRoute,
    myRoute,
    NotFoundRoute,
    loginExpiredRoute,
  ];

  return useRoutes(routes);
};

export default Router;
