<template>
  <section id="posts" class="container">
    <PostPreview
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id" />
  </section>  
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"

export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: "blog/"
    })
    .then(res => {
      console.log(res.data.stories)
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.intro,
            thumbnailUrl: bp.content.image
          }
        })
      };
    });
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: "A New Begining",
  //         previewText: 'This will be awesome.dont miss it',
  //         thumbnailUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
  //         id: "a-new-begining"
  //       },
  //       {
  //         title: "A Second Begining",
  //         previewText: 'This will be awesome.dont miss it',
  //         thumbnailUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
  //         id: "a-second-begining"
  //       }
  //     ]
  //   }
  // }
}
</script>

<style>
#posts {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media(min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
