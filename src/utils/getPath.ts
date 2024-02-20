import PATH from 'constants/path';

const PATH_DATABASE = {
  landingPage: `/${PATH.landingPage}`,

  mainPage: {
    root: `/${PATH.mainPage.root}`,
    search: `${PATH.mainPage.root}/${PATH.mainPage.children.search}`,
  },

  loginPage: {
    root: `/${PATH.loginPage.root}`,
    redirect: `${PATH.loginPage.children.redirect}`,
    profileSetting: `${PATH.loginPage.children.profileSetting}`,
  },

  treePage: {
    detail: (treeId: number) => `/${PATH.treePage.root}/${treeId}`,
    regist: {
      search: `/${PATH.treePage.root}/${PATH.treePage.children.regist.root}`,
      map: `/${PATH.treePage.root}/${PATH.treePage.children.regist.root}/${PATH.treePage.children.regist.children.map}`,
      detail: `/${PATH.treePage.root}/${PATH.treePage.children.regist.root}/${PATH.treePage.children.regist.children.detail}`,
    },
  },

  reviewPage: {
    detail: (reviewId: number) => `/${PATH.reviewPage.root}/${reviewId}`,
    regist: (treeId: number) =>
      `/${PATH.reviewPage.root}/${PATH.reviewPage.children.regist}/${treeId}`,
    edit: (reviewId: number) =>
      `/${PATH.reviewPage.root}/${PATH.reviewPage.children.edit}/${reviewId}`,
  },

  myPage: {
    root: `/${PATH.myPage.root}`,
    savedTrees: `/${PATH.myPage.root}/${PATH.myPage.children.savedTrees}`,
    registedTrees: `/${PATH.myPage.root}/${PATH.myPage.children.registedTrees}`,
    registedReviews: `/${PATH.myPage.root}/${PATH.myPage.children.registedReviews}`,
  },
};

type PATH_DATABASE = typeof PATH_DATABASE;
// 제네릭의 인자가 객체라면 객체의 키를 입력하도록 하는 옵셔널 타입
type IfObjectThenRequire<T> = T extends object ? keyof T : never;

type GetPath = {
  <P extends keyof PATH_DATABASE>(p: P): PATH_DATABASE[P];

  <P extends keyof PATH_DATABASE, D1 extends keyof PATH_DATABASE[P]>(
    p: P,
    d1: D1,
  ): PATH_DATABASE[P][D1];

  <
    P extends keyof PATH_DATABASE,
    D1 extends keyof PATH_DATABASE[P],
    D2 extends IfObjectThenRequire<PATH_DATABASE[P][D1]>,
  >(
    p: P,
    d1: D1,
    d2: D2,
  ): PATH_DATABASE[P][D1][D2];
};

const getPath: GetPath = <
  P extends keyof PATH_DATABASE,
  D1 extends keyof PATH_DATABASE[P],
  D2 extends IfObjectThenRequire<PATH_DATABASE[P][D1]>,
>(
  p: P,
  d1?: D1,
  d2?: D2,
) => {
  const page = PATH_DATABASE[p];

  if (d1 && d2) {
    return page[d1][d2];
  }

  if (d1) {
    return page[d1];
  }

  return page;
};

export default getPath;
