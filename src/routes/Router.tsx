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
    path: `${PATH.treePage.root}/*`,
    element: <Outlet />,
    // TreeInfo 컴포넌트 내부에서, state 데이터를 받아서 처리
    // 언제 동적 파라미터를 사용하고, 언제 useLocation의 state를 사용하면 좋은지?
    // useLocation의 state를 사용하면 복잡한 데이터를 다시 로드하지 않아도 됨.
    // 그런데 이런 경우에 공유하기 기능을 사용할 수 없을 것 같아요. 외부에서 진입하면 데이터가 없음
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
      // 리뷰 등록/수정에 트리 아이디 혹은 리뷰 아이디가 필요한데 동적으로 매칭할지, state에 담아서 보낼지?
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
