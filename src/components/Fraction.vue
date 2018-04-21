<template>
  <div class="Fraction Container">
    <div class="timeline-paging">
      <div class="first" >{{ index }}</div>
      <div ><img :src="sep" class="sep" ></div>
      <div class="second">09</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fraction',
  data () {
    return {
      sep: './static/img/sep.svg'
    }
  },
  props: ['index']
}
</script>

<style scoped>
  /* large ascale */

  div
  {
      color: #221f1f;
  }

  .timeline-paging .first {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
      line-height: 51px;
    text-align: center;
    height: 51px;
    display: inline-block;
}

.timeline-paging {
    position: absolute;
    /* font-family: Conv_AkzidGroCFFMdEx,Conv_AkzidGroCFFEx; */
top: -60px;
    width: 50px;
    height: 103px;
     font-size: 30px;
  font-weight: bold;
  line-height: 1;
}

.timeline-paging .second {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25px;
        line-height: 51px;
    text-align: center;
    height: 51px;
    display: inline-block;
}

.timeline-paging .sep {
    position: absolute;
 left: 30%;
    top: 38%;
    width: 23px;
}

  @media (min-width: 1200px) {}
</style>
