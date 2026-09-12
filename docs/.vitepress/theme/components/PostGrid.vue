<script setup lang="ts">
interface Post {
  title: string
  excerpt: string
  date: string
  category: string
  url: string
  image?: string
}

const posts: Post[] = [
  {
    title: '欢迎来到我的博客',
    excerpt: '这是第一篇文章，欢迎来到我的个人博客！记录技术文章与开发经验、学习笔记与知识总结...',
    date: '2026.09.12',
    category: '随笔',
    url: '/posts/welcome',
    image: 'https://picsum.photos/seed/1/800/400'
  }
]
</script>

<template>
  <div class="post-grid">
    <h2 class="section-title">
      <span class="comment">// LATEST</span>
      最新文章
    </h2>

    <div class="posts">
      <article v-for="post in posts" :key="post.url" class="post-card">
        <div v-if="post.image" class="post-image">
          <img :src="post.image" :alt="post.title" loading="lazy" />
          <div class="image-overlay"></div>
        </div>

        <div class="post-content">
          <div class="post-meta">
            <span class="category">{{ post.category }}</span>
            <span class="date">{{ post.date }}</span>
          </div>

          <h3 class="post-title">
            <a :href="post.url">{{ post.title }}</a>
          </h3>

          <p class="post-excerpt">{{ post.excerpt }}</p>

          <a :href="post.url" class="read-more">
            阅读全文 →
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.post-grid {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.comment {
  display: block;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', monospace;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.1);
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 12px 32px rgba(56, 189, 248, 0.15);
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
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(10, 13, 18, 0.8) 100%);
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.category {
  padding: 0.25rem 0.75rem;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border-radius: 999px;
  font-weight: 500;
}

.date {
  color: #6b7280;
  font-family: 'JetBrains Mono', monospace;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.post-title a:hover {
  color: #38bdf8;
}

.post-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #38bdf8;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s;
}

.read-more:hover {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .posts {
    grid-template-columns: 1fr;
  }
}
</style>
