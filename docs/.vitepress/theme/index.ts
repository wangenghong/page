import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import HeroSlider from './components/HeroSlider.vue'
import PostStream from './components/PostStream.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import WallpaperBackground from './components/WallpaperBackground.vue'
import BlogHome from './components/BlogHome.vue'
import GiscusComments from './components/GiscusComments.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(WallpaperBackground)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('HeroSlider', HeroSlider)
    app.component('PostStream', PostStream)
    app.component('BlogHome', BlogHome)
    app.component('GiscusComments', GiscusComments)
  }
} satisfies Theme
