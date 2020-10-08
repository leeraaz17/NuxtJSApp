<template>
  <section id="about-page" v-editable="blok">
    <main>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </main>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then(res => {
      console.log(res)
      return {
        blok: res.data.story.content,
        title: res.data.story.content.Title,
        content: res.data.story.content.Content
      }
    })
  },
  mounted() {
    // this.$storybridge.init()
    this.$storybridge.on('change', () => {
      location.reload(true);
    })
  }
}
</script>

<style>
#about-page {
  width: 80%;
  max-width: 500px;
  margin: auto;
}

#about-page p{
  white-space: pre-line;
}
</style>