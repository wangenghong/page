<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'wangenghong/wangenghong.github.io')
  script.setAttribute('data-repo-id', 'YOUR_REPO_ID')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  const commentContainer = document.querySelector('.giscus-container')
  if (commentContainer) {
    commentContainer.appendChild(script)
  }
})
</script>

<template>
  <div class="giscus-container" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
    <!-- Giscus 评论将在这里加载 -->
  </div>
</template>

<style scoped>
.giscus-container {
  width: 100%;
}
</style>
