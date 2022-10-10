<template>
  <el-row class="tac">
    <el-col>
      <el-menu :collapse="isCollapse">
        <el-sub-menu
          v-for="menu in menuItem"
          :key="menu.index"
          :index="menu.index"
        >
          <template #title>
            <el-icon><component :is="menu.icon" /></el-icon>
            <span>{{ menu.label }}</span>
          </template>

          <el-menu-item
            @click="handleSelect(item)"
            v-for="item in menu.submenus"
            :key="item.index"
            :index="item.index"
            >{{ item.label }}</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { Location, Setting } from "@element-plus/icons";
import { reactive, toRefs } from "vue";
export default {
  name: "sideMenu",
  components: {
    Location,
    Setting,
  },
  props: {
    isCollapse: Boolean,
  },
  setup(prop, context) {
    const state = reactive({
      menuItem: [
        {
          label: "코로나 현황 요약",
          index: "corona-briefing",
          icon: "location",
          submenus: [
            {
              label: "국가별 요약",
              index: "InternationalCases",
              path: "corona",
            },
            { label: "국내 요약", index: "DomesticCases", path: "corona" },
          ],
        },

        {
          label: "코로나 분석",
          index: "corona-analysis",
          icon: "setting",
          submenus: [
            { label: "샘플메뉴1", index: "sample1", path: "corona" },
            { label: "샘플메뉴2", index: "sample2", path: "corona" },
          ],
        },
      ],
    });
    const handleSelect = (item) => {
      context.emit("menuSelect", item);
    };
    return {
      ...toRefs(state),
      handleSelect,
    };
  },
};
</script>

<style>
.tac {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-menu-item {
  height: 100%;
}
</style>
