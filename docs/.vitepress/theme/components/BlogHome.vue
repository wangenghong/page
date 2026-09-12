<script setup lang="ts">
interface Post {
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  image: string
}

const featuredPost: Post = {
  title: '欢迎来到我的博客',
  excerpt: '这是第一篇文章，欢迎来到我的个人博客！在这里，我会分享技术文章与开发经验、学习笔记与知识总结。让我们一起在技术的道路上不断前进，探索更多可能性。',
  date: '2026.09.12',
  category: '随笔',
  url: '/posts/welcome',
  image: 'https://picsum.photos/seed/1/1200/800'
}

const recentPosts: Post[] = [
  {
    title: '欢迎来到我的博客',
    excerpt: '这是第一篇文章，欢迎来到我的个人博客！',
    date: '2026.09.12',
    category: '随笔',
    url: '/posts/welcome',
    image: 'https://picsum.photos/seed/2/1200/800'
  }
]
</script>

<template>
  <div class="blog-home">
    <!-- 侧边栏 -->
    <aside class="sidebar">
      <!-- 个人信息卡片 -->
      <div class="profile-card card-transparent">
        <div class="avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
        </div>
        <h3 class="profile-name">塔弦云随笔</h3>
        <p class="profile-bio">「如何？为你描绘的这个世界？」</p>
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">1</span>
            <span class="stat-label">文章</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">1</span>
            <span class="stat-label">分类</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">0</span>
            <span class="stat-label">标签</span>
          </div>
        </div>
      </div>

      <!-- 分类卡片 -->
      <div class="categories-card card-transparent">
        <h4 class="card-title">分类</h4>
        <div class="categories-list">
          <a href="/categories/" class="category-item">
            <span class="category-name">随笔</span>
            <span class="category-count">1</span>
          </a>
        </div>
      </div>
    </aside>

    <!-- 主要内容区 -->
    <div class="main-content">
      <!-- 精选文章 -->
      <article class="featured-post card-transparent">
        <a :href="featuredPost.url" class="featured-link">
          <div class="featured-image">
            <img :src="featuredPost.image" :alt="featuredPost.title" />
            <div class="image-overlay"></div>
          </div>
          <div class="featured-content">
            <div class="post-meta">
              <span class="category">{{ featuredPost.category }}</span>
              <span class="date">{{ featuredPost.date }}</span>
            </div>
            <h2 class="post-title">{{ featuredPost.title }}</h2>
            <p class="post-excerpt">{{ featuredPost.excerpt }}</p>
            <span class="read-more">阅读全文 →</span>
          </div>
        </a>
      </article>

      <!-- 最新文章列表 -->
      <section class="recent-posts">
        <h3 class="section-title">最新文章</h3>
        <div class="posts-grid">
          <article
            v-for="post in recentPosts"
            :key="post.url"
            class="post-card card-transparent"
          >
            <a :href="post.url" class="post-link">
              <div class="post-image">
                <img :src="post.image" :alt="post.title" />
              </div>
              <div class="post-body">
                <div class="post-meta">
                  <span class="category">{{ post.category }}</span>
                  <span class="date">{{ post.date }}</span>
                </div>
                <h4 class="post-title">{{ post.title }}</h4>
                <p class="post-excerpt">{{ post.excerpt }}</p>
              </div>
            </a>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.blog-home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;
  min-height: 100vh;
}

/* 透明卡片基础样式 */
.card-transparent {
  background: rgba(var(--vp-c-bg-soft-rgb, 255, 255, 255), var(--card-opacity, 0.7));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.15);
  border-radius: 16px;
  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transform: translateZ(0);
}

.card-transparent:hover {
  background: rgba(var(--vp-c-bg-soft-rgb, 255, 255, 255), calc(var(--card-opacity, 0.7) + 0.1));
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 8px 32px rgba(56, 189, 248, 0.15);
  transform: translateY(-2px) translateZ(0);
}

/* 主要内容区 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 精选文章 */
.featured-post {
  overflow: hidden;
  padding: 0;
  isolation: isolate;
}

.featured-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.featured-image {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  transform: translateZ(0);
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

.featured-post:hover .featured-image img {
  transform: scale(1.05) translateZ(0);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(5, 7, 12, 0.8) 100%);
  transform: translateZ(0);
  pointer-events: none;
}

.featured-content {
  padding: 2rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.category {
  padding: 0.375rem 0.875rem;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border-radius: 999px;
  font-weight: 600;
}

.date {
  color: var(--vp-c-text-2);
  font-family: 'JetBrains Mono', monospace;
}

.post-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.post-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #38bdf8;
  font-weight: 600;
  transition: transform 0.3s;
}

.featured-post:hover .read-more {
  transform: translateX(4px);
}

/* 最新文章 */
.recent-posts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.posts-grid {
  display: grid;
  gap: 1.5rem;
}

.post-card {
  padding: 0;
  overflow: hidden;
  isolation: isolate;
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-body {
  padding: 1.5rem;
}

.post-card .post-title {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

.post-card .post-excerpt {
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 侧边栏 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 个人信息卡片 */
.profile-card {
  padding: 2rem;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(56, 189, 248, 0.3);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.profile-bio {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(56, 189, 248, 0.15);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #38bdf8;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

/* 分类卡片 */
.categories-card {
  padding: 1.5rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: rgba(56, 189, 248, 0.05);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s;
}

.category-item:hover {
  background: rgba(56, 189, 248, 0.15);
}

.category-count {
  padding: 0.25rem 0.625rem;
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* 响应式 */
@media (max-width: 1024px) {
  .blog-home {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .sidebar {
    order: 1;
  }

  .main-content {
    order: 2;
  }

  .profile-card {
    padding: 1.5rem;
  }

  .featured-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .featured-image {
    height: 250px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .featured-content {
    padding: 1.5rem;
  }
}
</style>
