<template>
<main>
    <Navbar />
    <h3>
        Anime Bing Bong
    </h3>

    <section class="container search-container">
        <Search :method="fetchServer" :start="toggleStar"/>
        <h5 class="teal-text" v-if="!isLoading">{{animeList.length}} items found</h5>
    </section>
    <transition name="fade">
        <div class="container loader-container" v-if="startLoader">
            <img src="../assets/loader.gif">
        </div>
    </transition>
    <section class="container main-container">
        <AnimeCard v-for="(anime,i) in animeList" :key="i" :anime="anime" />
    </section>
</main>
</template>

<script>
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import AnimeCard from '../components/AnimeCard';
import axios from 'axios';

export default {
    name: "Home",
    components : { Navbar, Search, AnimeCard },
    data() {
        return {
            animeList : [],
            isLoading : true,
            startLoader : false
        }
    },
    methods : {
        toggleStar(){
            this.startLoader = !this.startLoader;
        },
        async fetchServer(search){
            const words = search.split(" ");
            let keyword;
            if (words.length > 1){
                keyword = words.join("+");
            }
            else{
                keyword = words[0];
            }
            const url = `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            const response = await axios({
                url,
            });
            this.animeList = response.data.results;
            this.isLoading = false;
            this.startLoader = false;
        }
    }
}
</script>

<style scoped>
    .search-container{
        max-width: 40rem;
    }
    .search-container {
        margin: 1rem auto;
        padding: .25rem;
        background: rgba(255, 255, 255, .9);
        border-radius: .2rem;
        box-shadow: 0 1px 1.5rem black;
    }
    .main-container{
        display: grid;
        background: transparent;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }
    .loader-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader-container > img{
        display: flex;
        height: 10rem;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: scale(0);
        transform-origin: center;
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: all .5s ease;
    }
</style>