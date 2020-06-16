<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#">
        <img class="logo" src="~/assets/logo@2x.png" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item
              v-for="(item, index) in NavrList"
              :key="index"
              :href="item.url"
              >{{ item.name }}</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},

  data() {
    return {
      NavrList: [
        {
          name: '首页',
          url: '/home'
        },
        {
          name: '核心技术',
          url: '/middle'
        },
        {
          name: '智能驾驶',
          url: '/autoDriver'
        },
        {
          name: '新闻中心',
          url: '/news'
        },
        {
          name: '关于我们',
          url: '/about'
        },
        {
          name: '加入我们',
          url: '/join'
        },
        {
          name: '开发者社区',
          url: '/development'
        }
      ],
      headerFixed: false
    }
  },

  computed: {},

  watch: {
    $route: {
      handler(val, newval) {
        console.log(this.$route)
      },
      deep: true
    }
  },

  created() {},

  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // handleScroll() {
    //   // 得到页面滚动的距离
    //   const scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop
    //   //  当滚动超过 180 时，实现吸顶效果
    //   console.log('scrollTop', scrollTop)
    //   if (scrollTop > 30) {
    //     this.headerFixed = true
    //   } else {
    //     this.headerFixed = false
    //   }
    // }
  }
}
</script>
<style lang="less" scoped>
.border-white {
  border-bottom: 1px solid white;
  color: #fff;
}
// .navbar-wrap {
//   transform: scale(1, 1, 1);
//   width: 1280px;
// }
.logo {
  width: 118px;
  height: 36px;
}
.active-white {
  border-bottom: 1px solid white;
  color: #fff;
}
</style>
