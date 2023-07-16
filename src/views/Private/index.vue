<template>
  <div class="private-view">
    <div class="container">
      <el-row :gutter="10" class="private-session">
        <el-col :md="20" :lg="20" :xs="24" :sm="24" class="private-container">
          <el-card> </el-card>
        </el-col>
        <el-col :md="4" :lg="4" :xs="24" :sm="24"> </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :md="18" :lg="18" :xs="24" :sm="24"> </el-col>
        <el-col :md="6" :lg="6" :xs="24" :sm="24"> </el-col>
        <el-col :md="16" :lg="16" :xs="24" :sm="24"> </el-col>
        <el-col :md="8" :lg="8" :xs="24" :sm="24"> </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.private-view {
  .container {
    min-width: 800px;

    .private-session {
      .private-container {
        display: flex;
        flex-direction: column;
        .info-container {
          display: flex;
          justify-content: space-between;
          .private-info {
            padding-left: 10px;
            padding-top: 4px;
            box-sizing: border-box;
            flex: 1;
            .account {
              display: flex;
              justify-content: space-between;
              font-weight: bolder;
              line-height: 30px;
              font-size: 20px;
              span:hover {
                color: var(--el-color-primary);
                cursor: pointer;
              }
            }
            .intriduce {
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  ::v-deep .el-drawer {
    .el-drawer__body {
      display: flex !important;
      flex-direction: column;
      align-items: center;
    }
  }
  ::v-deep .el-row {
    margin: 0 !important;
  }
  ::v-deep .el-card {
    margin: 5px 0px;
  }
}
</style>
