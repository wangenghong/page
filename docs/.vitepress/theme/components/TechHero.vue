<script setup lang="ts">
import { computed } from 'vue'

const codeSnippet = `const blog = {
  title: '记事本',
  focus: 'LATEST',
  updated: '2026.09.12'
}

function latest() {
  return '欢迎来到我的技术博客'
}`

defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="tech-hero">
    <div class="hero-content">
      <div class="code-window">
        <div class="window-header">
          <div class="window-buttons">
            <span class="btn btn-close"></span>
            <span class="btn btn-minimize"></span>
            <span class="btn btn-maximize"></span>
          </div>
          <div class="window-title">index.ts</div>
        </div>
        <div class="code-content">
          <pre><code>{{ codeSnippet }}</code></pre>
        </div>
      </div>

      <div class="hero-text">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <div class="hero-actions">
          <a href="/posts/" class="btn-primary">开始阅读 →</a>
          <a href="/about" class="btn-secondary">关于我</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
}

.code-window {
  background: linear-gradient(135deg, #0f131c 0%, #161d2b 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(56, 189, 248, 0.1);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.window-header {
  background: #0a0d12;
  padding: 0.75rem 1rem;
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
  color: #c9cccf;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', monospace;
}

.code-content {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e8eaed;
}

.code-content pre {
  margin: 0;
}

.code-content code {
  color: #38bdf8;
}

.hero-text {
  text-align: left;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #c9cccf;
  margin-bottom: 2rem;
  font-family: 'JetBrains Mono', monospace;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.6);
}

.btn-secondary {
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.btn-secondary:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .code-window {
    order: 2;
  }

  .hero-text {
    order: 1;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }
}
</style>
