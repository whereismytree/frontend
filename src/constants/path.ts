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
      regist: 'regist',
      dynamicParam: ':treeId',

      review: {
        root: 'review',
        dynamicParam: ':reviewId',
        children: {
          regist: 'regist',
          edit: 'edit',
        },
      },
    },
  },

  registPage: {
    root: 'regist',

    children: {
      map: 'map',
      detail: 'detail',
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
};

export default PATH;
