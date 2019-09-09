<template>
  <div class="col-md-2 selectMenu">
    <div
      :class="['selectMenuItems', this.$route.path === '/' ? 'activeClass': '']"
      @click="onChangeSelection('/')"
    >
      <h6>List all users</h6>
    </div>
    <div
      :class="['selectMenuItems', this.$route.path === '/search' ? 'activeClass': '']"
      @click="onChangeSelection('/search')"
    >
      <h6>Search user by ID</h6>
    </div>
    <div
      :class="['selectMenuItems', this.$route.path === '/create' ? 'activeClass': '']"
      @click="onChangeSelection('/create')"
    >
      <h6>Add user</h6>
    </div>
    <div
      :class="['selectMenuItems', this.$route.path.startsWith('/edit') ? 'activeClass': '']"
      @click="onChangeSelection('/edit')"
    >
      <h6>Edit a user</h6>
    </div>
    <div class="selectMenuItemsBottom">
      <a href="https://github.com/valkyriaivan/CloudAppiChallenge" target="_blank">
        <h6>
          Check the code on
          <i class="fab fa-github"></i>
        </h6>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectMenu",
  methods: {
    onChangeSelection(path) {
      this.$router.push(path, () => {}, () => {});
    }
  }
};
</script>

<style scoped>
</style>