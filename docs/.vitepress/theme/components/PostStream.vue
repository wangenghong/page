<script setup lang="ts">
interface Post {
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  image: string
  comments?: number
}

const pinnedPosts: Post[] = [
  {
    title: '欢迎来到我的博客',
    excerpt: '这是第一篇文章，欢迎来到我的个人博客！记录技术文章与开发经验、学习笔记与知识总结。让我们一起在技术的道路上不断前进，探索更多可能性...',
    date: '2026.09.12',
    category: 'PINNED',
    url: '/posts/welcome',
    image: 'https://picsum.photos/seed/10/1200/800',
    comments: 0
  }
]

const latestPosts: Post[] = [
  {
    title: '欢迎来到我的博客',
    excerpt: '这是第一篇文章，欢迎来到我的个人博客！记录技术文章与开发经验...',
    date: '2026.09.12',
    category: '随笔',
    url: '/posts/welcome',
    image: 'https://picsum.photos/seed/11/1200/800',
    comments: 0
  }
]
</script>

<template>
  <div id="post-stream" class="post-stream">
    <!-- 置顶推荐区 -->
    <section class="pinned-section">
      <h2 class="section-title">
        <span class="title-text">PINNED</span>
        置顶推荐
      </h2>
      <p class="section-subtitle">{{ pinnedPosts.length }} 篇精选文章</p>

      <div class="pinned-grid">
        <article v-for="post in pinnedPosts" :key="post.url" class="pinned-card">
          <a :href="post.url" class="card-link">
            <div class="card-image">
              <img :src="post.image" :alt="post.title" loading="lazy" />
              <div class="image-overlay"></div>
              <div class="category-badge">// {{ post.category }}</div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <div class="card-meta">
                <span class="meta-date">{{ post.date }}</span>
                <span v-if="typeof post.comments === 'number'" class="meta-comments">
                  {{ post.comments }} 评论
                </span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>

    <!-- 最新文章区 -->
    <section class="latest-section">
      <h2 class="section-title">
        <span class="title-text">最新文章</span>
      </h2>
      <p class="section-subtitle">持续记录与沉淀</p>

      <div class="latest-grid">
        <article v-for="post in latestPosts" :key="post.url" class="latest-card">
          <a :href="post.url" class="card-link">
            <div class="card-image">
              <img :src="post.image" :alt="post.title" loading="lazy" />
              <div class="image-overlay"></div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <div class="card-meta">
                <span class="meta-category">{{ post.category }}</span>
                <span class="meta-date">{{ post.date }}</span>
                <span v-if="typeof post.comments === 'number'" class="meta-comments">
                  {{ post.comments }} 评论
                </span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post-stream {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* 通用区块样式 */
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.title-text {
  display: inline-block;
  margin-right: 1rem;
  color: #38bdf8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
}

.section-subtitle {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

/* 置顶推荐区 */
.pinned-section {
  margin-bottom: 5rem;
}

.pinned-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.pinned-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.1);
  transition: all 0.3s ease;
}

.pinned-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 12px 32px rgba(56, 189, 248, 0.15);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.pinned-card:hover .card-image img,
.latest-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(5, 7, 12, 0.7) 100%);
}

.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.875rem;
  background: rgba(56, 189, 248, 0.9);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
  backdrop-filter: blur(12px);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-family: 'JetBrains Mono', monospace;
}

.meta-category {
  padding: 0.25rem 0.625rem;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border-radius: 4px;
  font-weight: 500;
}

.meta-date {
  color: #6b7280;
}

.meta-comments {
  color: #6b7280;
}

/* 最新文章区 */
.latest-section {
  margin-bottom: 3rem;
}

.latest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.latest-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.1);
  transition: all 0.3s ease;
}

.latest-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 12px 32px rgba(56, 189, 248, 0.15);
}

.latest-card .card-image {
  height: 200px;
}

/* 响应式 */
@media (max-width: 1024px) {
  .pinned-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  .latest-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .post-stream {
    padding: 2rem 1rem;
  }

  .pinned-grid,
  .latest-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .card-image {
    height: 180px !important;
  }
}
</style>
