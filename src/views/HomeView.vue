<template>
  <div class="home">
    <Navbar />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/main.vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Main,
    Navbar,
    Footer
  }
}
</script>
