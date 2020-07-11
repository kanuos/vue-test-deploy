<template>
<div>
  <form @submit.prevent="handleSubmit">
      <div class="input-field">
        <input id="search" type="text" v-model="search" autocomplete="off">
        <label for="search">Search Anime</label>
      </div>
      <div class="input-field">
        <button class="btn teal">
          search
        </button>
      </div>
  </form>
  <span class="red-text" v-show="error.length">{{error}}</span>
</div>

</template>

<script>
export default {
    name : "Search",
    props : ["method", "start"],
    data(){
      return {
        search : "",
        error : ""
      }
    },
    methods : {
      handleSubmit(){
        if (this.search.trim().length > 0){
          this.method(this.search.trim());
          this.start();
          this.search = "";
        }
        else{
          this.error = "Search Field Cannot Be Empty"
          setTimeout(()=> {
            this.error = "";
          }, 1500)
        }
      }
    }
}
</script>

<style scoped>
  form {
    width: 95%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  form > div:nth-of-type(1) {
    flex-grow: 1;
  }
</style>