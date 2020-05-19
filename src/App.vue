<template>
  <div id="app">
    <div class="container">
      <Title/>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";

export default {
  name: "app",
  components: {
    Title
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
