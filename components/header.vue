<template>
  <div
    class="nav-parent"
    @mouseenter.stop="enterParent($event)"
    @mouseleave="leaveParent()"
  >
    <div class="nav-child">
      <b-navbar toggleable="lg" type="dark" variant="info">
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
                :class="
                  current === index
                    ? 'border-white'
                    : '' || $route.fullPath === item.url
                    ? 'border-white'
                    : ''
                "
                @mouseenter="enter(index)"
                @mouseleave="leave()"
                >{{ item.name }}</b-nav-item
              >
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
          url: '/'
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
          url: '/joinus'
        },
        {
          name: '开发者社区',
          url: '/development'
        }
      ],
      headerFixed: false,
      showBorder: false,
      current: '',
      pageCurrent: false
    }
  },

  computed: {},

  watch: {
    $route: {
      handler(val, newval) {
        console.log(this.$route.fullPath)
      },
      deep: true,
      immediate: true
    }
  },

  created() {},

  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    enter(i) {
      this.showBorder = true
      this.current = i
    },
    leave() {
      this.showBorder = false
    },
    enterParent(e) {
      // e.stopPropagation()
    },
    leaveParent() {
      this.current = null
    }
  }
}
</script>
<style lang="less" scoped>
.border-white {
  border-bottom: 1px solid white;
  color: white !important;
  /deep/ .nav-link {
    color: white;
  }
  /deep/ .nav-link:focus {
    color: white;
  }
  /deep/ .nav-link:hover {
    color: white;
  }
}
.nav-parent {
  // transform: scale(1, 1, 1);
  background: hsla(0, 0%, 100%, 0);
  position: fixed;
  width: 100%;
}
.nav-child {
  max-width: 1280px;
  margin: 0 auto;
  .nav-item {
    margin: 0 10px;
  }
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
