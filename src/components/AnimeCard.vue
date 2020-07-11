<template>
<transition name="fade">
  <div class="card large">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" :src="anime.image_url">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">
        {{anime.title}}
        <i class="material-icons right">more_vert</i>
      </span>
      <ul class="flex">
        <li>
          <a :href="anime.url" class="btn btn-flat teal darken-5 white-text" target="_blank">Read More</a>
        </li>
      </ul>
    </div>
    <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          <i class="material-icons right">close</i>
        </span>
        <h5 class="center-align">
          {{anime.title}}
        </h5>
        <p class="flow">
          {{anime.synopsis}}
        </p>
        <StarRating 
          class="rating"
          :read-only="true"
          :show-rating="false"
          :rating="anime.score" 
          />
        <small class="center-align">
          Rating : {{anime.score}} out of 10
        </small>
        <ul>
          <li>
            <small>
              Episodes : {{anime.episodes}}
            </small>
          </li>
          <li>
            <small>
              Start Date : {{anime.start_date | formattedDate}}
            </small>    
          </li>
          <li>
            <small>
              End Date : {{anime.end_date | formattedDate}}
            </small>
          </li>
        </ul>
      </div>
  </div>
</transition>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
    props : ["anime"],
    components : {StarRating},
    filters : {
      formattedDate(dateString){
        return new Date(dateString).toDateString();
      }
    }
}
</script>

<style scoped>
    .card {
      margin: 2rem;
      border-radius: .25rem;
      transition: all .5s ease;
    }
    .card:hover {
      box-shadow: 0 1px 1.5rem black;
      transform: translateZ(0) translateY(-2px);
    }
    img {
      display: block;
      height : 35rem;
      object-fit: cover;
    }
    .flex {
      margin: 2rem auto;
      display: flex;
      width: 90%;
      justify-content: center;;
      align-items: center;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: scale(0);
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: all .5s ease;
    }
    .rating {
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>