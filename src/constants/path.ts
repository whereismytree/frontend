const PATH = {
  landingPage: '',

  mainPage: {
    root: 'main',
    children: {
      search: 'search',
    },
  },

  loginPage: {
    root: 'login',
    children: {
      redirect: 'redirect',
      profileSetting: 'setting',
    },
  },

  treePage: {
    root: 'tree',
    children: {
      dynamicParam: ':treeId',
      regist: {
        root: 'regist',
        children: {
          map: 'map',
          detail: 'detail',
        },
      },
    },
  },

  reviewPage: {
    root: 'review',
    dynamicParam: ':reviewId',
    children: {
      regist: 'regist',
      edit: 'edit',
    },
  },

  myPage: {
    root: 'my',
    children: {
      registedReviews: 'review',
      savedTrees: 'save',
      registedTrees: 'tree',
    },
  },

  sessionExpired: '401',
};

export default PATH;
