<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface FeaturedPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  image: string
  code: string
}

const featuredPosts = ref<FeaturedPost[]>([
  {
    id: 1,
    title: '欢迎来到我的博客',
    excerpt: '这是第一篇文章，欢迎来到我的个人博客！在这里，我会分享技术文章与开发经验、学习笔记与知识总结...',
    date: '2026.09.12',
    category: 'LATEST',
    url: '/posts/welcome',
    image: 'https://picsum.photos/seed/1/1200/800',
    code: `const blog = {
  title: '记事本',
  focus: 'LATEST',
  updated: '2026.09.12'
}

function latest() {
  return '欢迎来到我的博客'
}`
  }
])

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % featuredPosts.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + featuredPosts.value.length) % featuredPosts.value.length
}
</script>

<template>
  <div class="hero-slider">
    <div class="slider-container">
      <div
        class="featured-card"
        v-for="(post, index) in featuredPosts"
        :key="post.id"
        :class="{ active: index === currentIndex }"
      >
        <div class="card-content">
          <!-- 左侧：封面图 -->
          <div class="featured-image">
            <img :src="post.image" :alt="post.title" />
            <div class="image-overlay"></div>
            <div class="category-badge">// {{ post.category }}</div>
          </div>

          <!-- 右侧：代码窗口 -->
          <div class="code-section">
            <div class="code-window">
              <div class="window-header">
                <div class="window-buttons">
                  <span class="btn btn-close"></span>
                  <span class="btn btn-minimize"></span>
                  <span class="btn btn-maximize"></span>
                </div>
                <div class="window-title">blog.ts</div>
              </div>
              <div class="code-content">
                <pre><code>{{ post.code }}</code></pre>
              </div>
            </div>

            <div class="post-info">
              <h2 class="post-title">
                <a :href="post.url">{{ post.title }}</a>
              </h2>
              <a :href="post.url" class="read-more">
                阅读全文 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播控制按钮 -->
    <button
      v-if="featuredPosts.length > 1"
      class="slider-btn prev"
      @click="prevSlide"
      aria-label="上一篇"
    >
      ‹
    </button>
    <button
      v-if="featuredPosts.length > 1"
      class="slider-btn next"
      @click="nextSlide"
      aria-label="下一篇"
    >
      ›
    </button>

    <!-- 指示器 -->
    <div v-if="featuredPosts.length > 1" class="slider-indicators">
      <button
        v-for="(post, index) in featuredPosts"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
        :aria-label="`第 ${index + 1} 篇`"
      ></button>
    </div>

    <!-- 浏览文章按钮 -->
    <a href="#post-stream" class="scroll-hint">
      浏览文章
    </a>
  </div>
</template>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.featured-card {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.featured-card.active {
  display: block;
  opacity: 1;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(56, 189, 248, 0.1);
}

/* 左侧封面图 */
.featured-image {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(5, 7, 12, 0.6) 100%);
}

.category-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(56, 189, 248, 0.9);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 6px;
  backdrop-filter: blur(12px);
}

/* 右侧代码窗口 */
.code-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.code-window {
  background: linear-gradient(135deg, #0a0d12 0%, #0f131c 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(56, 189, 248, 0.2);
}

.window-header {
  background: #05070c;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(56, 189, 248, 0.1);
}

.window-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn-close { background: #ff5f57; }
.btn-minimize { background: #febc2e; }
.btn-maximize { background: #28c840; }

.window-title {
  color: #a8abb2;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', monospace;
}

.code-content {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #38bdf8;
  min-height: 200px;
}

.code-content pre {
  margin: 0;
}

.post-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s;
}

.post-title a:hover {
  color: #38bdf8;
}

.read-more {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 999px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
  align-self: flex-start;
}

.read-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.6);
}

/* 轮播控制 */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.slider-btn:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

.slider-btn.prev {
  left: 1rem;
}

.slider-btn.next {
  right: 1rem;
}

.slider-indicators {
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.slider-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.slider-indicators button.active {
  background: #38bdf8;
  width: 30px;
  border-radius: 5px;
}

.scroll-hint {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 500;
  transition: all 0.3s;
  z-index: 10;
}

.scroll-hint:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

/* 响应式 */
@media (max-width: 1024px) {
  .card-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-image {
    height: 350px;
  }

  .post-title {
    font-size: 1.75rem;
  }

  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-slider {
    padding: 1rem;
    min-height: auto;
  }

  .card-content {
    padding: 1rem;
  }

  .featured-image {
    height: 250px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .code-content {
    font-size: 0.8rem;
    padding: 1rem;
    min-height: 150px;
  }

  .slider-btn {
    display: none;
  }
}
</style>
