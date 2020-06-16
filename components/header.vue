<template>
  <div
    class="nav-parent"
    :class="mouseIn ? 'mouseBg' : ''"
    @mouseenter.stop="enterParent($event)"
    @mouseleave="leaveParent()"
  >
    <div class="nav-child">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <img v-if="!mouseIn" class="logo" src="~/assets/logo@2x.png" alt="" />
          <img v-else class="logo" src="~/assets/blue-logo@2x.png" alt="" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <nuxt-link
                v-for="(item, index) in NavrList"
                :key="index"
                class="nav-item nav-link normal"
                :to="item.url"
                :class="
                  current === index && mouseIn
                    ? 'bottom-border'
                    : '' || ($route.fullPath === item.url && !mouseIn)
                    ? 'bottom-blue'
                    : $route.fullPath === item.url && mouseIn
                    ? 'bottom-border'
                    : ''
                "
                @mouseenter="enter(index)"
                @mouseleave="leave()"
                >{{ item.name }}</nuxt-link
              >
              <!-- <b-nav-item
                v-for="(item, index) in NavrList"
                :key="index"
                :href="item.url"
                :class="
                  current === index
                    ? 'bottom-border'
                    : '' || $route.fullPath === item.url
                    ? 'bottom-border'
                    : ''
                "
                @mouseenter="enter(index)"
                @mouseleave="leave()"
                >{{ item.name }}</b-nav-item
              > -->
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
      pageCurrent: false,
      mouseIn: true
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
      e.stopPropagation()
      this.mouseIn = true
    },
    leaveParent() {
      this.mouseIn = false
      this.current = null
    }
  }
}
</script>
<style lang="less" scoped>
.mouseBg {
  background: white;
  z-index: 2222;
}
.nav-child {
  /deep/ .normal {
    color: #fff;
  }
}

.bottom-border {
  border-bottom: 3px solid #0066ff;

  color: #0066ff !important;
  /deep/ .nav-link {
    color: #0066ff;
  }
  /deep/ .nav-link:focus {
    color: #0066ff;
  }
  /deep/ .nav-link:hover {
    color: #0066ff;
  }
}
.bottom-blue {
  border-bottom: 3px solid #ffffff;

  color: #ffffff !important;
  /deep/ .nav-link {
    color: #ffffff;
  }
  /deep/ .nav-link:focus {
    color: #ffffff;
  }
  /deep/ .nav-link:hover {
    color: #ffffff;
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
  .nav-item:hover {
    border-bottom: 3px solid #0066ff;
    color: #0066ff !important;
    /deep/ .nav-link {
      color: #0066ff;
    }
    /deep/ .nav-link:focus {
      color: #0066ff;
    }
    /deep/ .nav-link:hover {
      color: #0066ff;
    }
  }
}

.logo {
  width: 118px;
  height: 36px;
}
</style>
