<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

type WallpaperMode = 'banner' | 'fullscreen' | 'overlay' | 'none'

const wallpaperMode = ref<WallpaperMode>('banner')
const currentImage = ref('/wallpaper.jpg')
const isLoaded = ref(false)

// 从 localStorage 加载壁纸模式
onMounted(() => {
  const savedMode = localStorage.getItem('wallpaperMode') as WallpaperMode
  if (savedMode) {
    wallpaperMode.value = savedMode
  }

  // 预加载图片
  const img = new Image()
  img.onload = () => {
    isLoaded.value = true
  }
  img.src = currentImage.value
})

// 计算样式类
const wrapperClasses = computed(() => {
  return {
    'wallpaper-banner': wallpaperMode.value === 'banner',
    'wallpaper-fullscreen': wallpaperMode.value === 'fullscreen',
    'wallpaper-overlay': wallpaperMode.value === 'overlay',
    'wallpaper-hidden': wallpaperMode.value === 'none',
    'loaded': isLoaded.value
  }
})

// 切换壁纸模式
const toggleWallpaperMode = () => {
  const modes: WallpaperMode[] = ['fullscreen', 'overlay', 'banner', 'none']
  const currentIndex = modes.indexOf(wallpaperMode.value)
  const nextIndex = (currentIndex + 1) % modes.length
  wallpaperMode.value = modes[nextIndex]
  localStorage.setItem('wallpaperMode', wallpaperMode.value)

  // 触发页面样式更新
  document.documentElement.setAttribute('data-wallpaper-mode', wallpaperMode.value)
}

// 导出切换函数供全局使用
defineExpose({
  toggleWallpaperMode
})
</script>

<template>
  <div
    id="wallpaper-wrapper"
    :class="wrapperClasses"
    class="wallpaper-wrapper"
  >
    <div class="wallpaper-image" :style="{ backgroundImage: `url(${currentImage})` }"></div>
    <div class="wallpaper-overlay-gradient"></div>

    <!-- 壁纸模式切换按钮 -->
    <button
      class="wallpaper-toggle"
      @click="toggleWallpaperMode"
      :title="`当前模式: ${wallpaperMode}`"
    >
      <svg v-if="wallpaperMode === 'fullscreen'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
      <svg v-else-if="wallpaperMode === 'overlay'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.5"/>
      </svg>
      <svg v-else-if="wallpaperMode === 'banner'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="8" rx="2"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.wallpaper-wrapper {
  position: fixed;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
}

.wallpaper-wrapper.loaded {
  opacity: 1;
  transition: opacity 0.8s ease-in-out;
}

.wallpaper-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.wallpaper-overlay-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(5, 7, 12, 0.3) 0%, rgba(5, 7, 12, 0.7) 100%);
  pointer-events: none;
}

/* 横幅模式 */
.wallpaper-banner {
  top: 0;
  left: 0;
  right: 0;
  height: 50vh;
  max-height: 500px;
}

.wallpaper-banner .wallpaper-overlay-gradient {
  background: linear-gradient(to bottom, rgba(5, 7, 12, 0.2) 0%, var(--vp-c-bg) 100%);
}

/* 全屏模式 */
.wallpaper-fullscreen {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.wallpaper-fullscreen .wallpaper-overlay-gradient {
  background: linear-gradient(to bottom, rgba(5, 7, 12, 0.5) 0%, rgba(5, 7, 12, 0.8) 100%);
}

/* 透明叠加模式 */
.wallpaper-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.wallpaper-overlay .wallpaper-overlay-gradient {
  background: linear-gradient(to bottom, rgba(5, 7, 12, 0.2) 0%, rgba(5, 7, 12, 0.6) 100%);
}

/* 无壁纸模式 */
.wallpaper-hidden {
  display: none;
}

/* 切换按钮 */
.wallpaper-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1000;
  color: #38bdf8;
  backdrop-filter: blur(12px);
  pointer-events: auto;
}

.wallpaper-toggle:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
  transform: scale(1.1);
}

/* 响应式 */
@media (max-width: 768px) {
  .wallpaper-banner {
    height: 50vh;
  }

  .wallpaper-toggle {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
