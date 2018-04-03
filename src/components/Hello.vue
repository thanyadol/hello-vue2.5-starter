<template>
  <div id="inner-scrollbar">
    <section data-scrollbar id="my-scrollbar">
      <img src="https://idiotwu.github.io/smooth-scrollbar/images/your_diary.jpg" height="1080" width="1920">
    </section>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
export default {
  name: "Hello",
  data() {
    return {
      helloMessage: "Hello World with VueJS at " + new Date().toLocaleString(),
      scrolled: false
    };
  },
  mounted: function() {
    var options = { wheelEventTarget: true, alwaysShowTracks: true };
    var div = document.getElementById("my-scrollbar");
    Scrollbar.init(div);

    // alert("scrolling")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: red;
}
#inner-scrollbar {
    max-width: 800px;
    height: 400px;
    border: 1px solid #ccc;
}
</style>
