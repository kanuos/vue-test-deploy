<template>
<div class="navbar">
    <nav class="teal">
        <div class="nav-wrapper container">
            <ul>
                <li>
                    <router-link to="/">BINGBONG</router-link>
                </li>
                <li>
                    <router-link to="/about">ABOUT</router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    ul {
        display: flex;
        justify-content: space-around;
    }
</style>