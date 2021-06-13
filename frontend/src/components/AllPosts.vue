<template>
  <div>
      <h2>Recent posts</h2>
      <post-list v-if="allPosts" :posts="allPosts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
export default {
    name: "AllPosts",
    components: {
        PostList,
    },
    data (){
        return {
            allPosts: null
        }
    },
    async created () {
        const posts = await this.$apollo.query({
        query: gql`query {
            allPosts {
            title
            subtitle
            publishDate
            published
            metaDescription
            slug
            author {
                user {
                username
                firstName
                lastName
                }
            }
            tags {
                name
            }
            }
        }`,
        })
        this.allPosts = posts.data.allPosts
    },
}
</script>

<style>

</style>