<template>
  <div>
    <Navbar />
    <main class="container">
      <h3>About</h3>
      <p class="flow-text">
          This is a basic Anime searching app. It uses the public jikan api to fetch informations of anime movies.
          This app was created with vue cli and uses vue-router.
      </p>
      <p>
        The assets are taken from <a href="https://google.com" target="_blank">Google</a>. This app is purely for educational purpose.
      </p>
      <router-link to="/">Go Home</router-link>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: "About",
  components : {Navbar}
}
</script>