<template>
  <div>
    <Header />
    <div class="row">
      <SelectMenu></SelectMenu>
      <div class="col-md-10">
        <div class="row">
          <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 actionArea">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectMenu from "./components/SelectMenu"
import Header from "./components/Header"

export default {
  name: "App",
  components: {
    SelectMenu,
    Header
  }
};
</script>

<style>
</style>