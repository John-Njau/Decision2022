<template>
  <div class="home">
    <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/main.vue'
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
  }
}
</script>
