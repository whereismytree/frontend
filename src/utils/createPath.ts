import PATH from 'constants/path';

const PATH_DATABASE = {
  landingPage: {
    root: PATH.landingPage,
  },

  mainPage: {
    root: PATH.mainPage.root,
    search: `${PATH.mainPage.root}/${PATH.mainPage.children.search}`,
  },

  loginPage: {
    root: PATH.loginPage.root,
    redirect: PATH.loginPage.children.redirect,
    profileSetting: PATH.loginPage.children.profileSetting,
  },

  treePage: {
    detail: (treeId: number) => `${PATH.treePage.root}/${treeId}`,
    regist: `${PATH.treePage.root}/${PATH.treePage.children.regist}`,

    review: {
      detail: (treeId: number, reviewId: number) =>
        `${PATH.treePage.root}/${treeId}/${PATH.treePage.children.review}/${reviewId}`,
      regist: (treeId: number) =>
        `${PATH.treePage.root}/${treeId}/${PATH.treePage.children.review}/${PATH.treePage.children.review.children.regist}`,
      edit: (treeId: number) =>
        `${PATH.treePage.root}/${treeId}/${PATH.treePage.children.review}/${PATH.treePage.children.review.children.edit}`,
    },
  },

  myPage: {
    root: PATH.myPage.root,
    savedTrees: `${PATH.myPage.root}/${PATH.myPage.children.savedTrees}`,
    registedTrees: `${PATH.myPage.root}/${PATH.myPage.children.registedTrees}`,
    registedReviews: `${PATH.myPage.root}/${PATH.myPage.children.registedReviews}`,
  },
};

type PATH_DATABASE = typeof PATH_DATABASE;
type IfObjectThenRequire<T> = T extends object ? keyof T : never;

type CreatePath = {
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

const createPath: CreatePath = <
  P extends keyof PATH_DATABASE,
  D1 extends keyof PATH_DATABASE[P],
  D2 extends IfObjectThenRequire<PATH_DATABASE[P][D1]>,
>(
  p: P,
  d1?: D1,
  d2?: D2,
) => {
  if (d1) {
    if (d2) {
      return PATH_DATABASE[p][d1][d2];
    }

    return PATH_DATABASE[p][d1];
  }
  return PATH_DATABASE[p];
};

export default createPath;
