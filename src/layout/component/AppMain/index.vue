<template>
  <tags-view></tags-view>
  <el-scrollbar class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="keepRouter">
          <component
            :is="Component"
            :key="route.path"
            v-if="isRouterShow"
          ></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>
<script setup>
import { watch, provide, ref, computed } from 'vue'
import TagsView from '../../component/TagsView'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isTags } from '@/utils/tags'
const store = useStore()
const route = useRoute()

const keepRouter = computed(() => {
  return store.getters.tagsViewList.map((tag) => tag.name)
})

// 配合 inject 实现页面刷新 （tags-view）
const isRouterShow = ref(true)
provide('refresh', (val) => (isRouterShow.value = val))

const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = route.meta.title
  }
  return title
}

// 监听路由变化
watch(
  route,
  (to, from) => {
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.app-main {
  height: calc(100vh - #{$headerHeight} - #{$tagViewHeight} - #{$footerHeight});
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
}
</style>
