const getters = {
  userInfo: state => state.user.userInfo,
  // 本地是否存在用户信息
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  // 侧栏是否展开
  sidebarOpened: state => state.app.sidebarOpened,
  // 是否为移动端
  isMobile: state => state.app.isMobile,
  // 标签
  tagsViewList: state => state.app.tagsViewList,
  // css 样式表
  cssVar: state => ({
    ...state.theme.variable
  })
}
export default getters
