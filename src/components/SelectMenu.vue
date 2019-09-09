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
a {
  text-decoration: none;
  color: white;
}
.col-md-3 {
  padding: 0;
}
.selectMenuItemsBottom {
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 21px !important;
  background-color: #498fcc;
  color: rgba(255, 255, 255);
  cursor: pointer;
}
.selectMenuItemsBottom h6 {
  font-weight: bold;
  margin: 0;
}
.selectMenuItems {
  margin: 0;
  padding: 21px !important;
  background-color: #498fcc;
  color: rgba(255, 255, 255);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.selectMenuItems:hover {
  background-color: #58acf5;
}
.selectMenuItems h6 {
  font-weight: bold;
  margin: 0;
}
.selectMenu {
  height: calc(100vh - 56px);
  padding-right: 0;
  background-color: #498fcc;
  position: relative;
}
.activeClass {
  background-color: #58acf5;
}
@media (max-width: 768px) {
  .selectMenu {
    height: auto;
    padding-right: 0;
    background-color: #498fcc;
    position: relative;
  }
  .selectMenuItemsBottom {
    position: relative;
    bottom: auto;
    margin: 0;
    padding: 21px !important;
    background-color: #498fcc;
    color: rgba(255, 255, 255);
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .selectMenuItemsBottom:hover {
    background-color: #58acf5;
  }
}
</style>