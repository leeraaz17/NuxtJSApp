<template>
  <section id="posts" class="container">
    <!-- <PostPreview
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id" /> -->
    <div class="bg-red border rounded-lg overflow-hidden p-4"
    v-for="post in posts"
    :key="post.id">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <!-- <h1>{{ post.title }} </h1> -->
        <img
          class="h-64 w-full object-contain"
          :src="post.thumbnailUrl"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            {{ post.previewText }}
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
      <NuxtLink to="/about">
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      </NuxtLink>
    </div>
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
            previewText: bp.content.long_text,
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
