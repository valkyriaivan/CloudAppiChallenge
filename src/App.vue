<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <SelectMenu></SelectMenu>
        <!-- <UserList :userList="userList"></UserList> -->
        <UserCreation />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import UserList from "./components/UserList";
import SelectMenu from "./components/SelectMenu";
import UserCreation from "./components/UserCreation";

export default {
  name: "App",
  components: {
    Header,
    UserList,
    SelectMenu,
    UserCreation
  },
  data() {
    return { userList: [], selectedUser: null };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
    async onMounted() {
      try {
        let response = await axios.get(
          "https://my-user-manager.herokuapp.com/users"
        );
        this.userList = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.onMounted();
  }
};
</script>

<style>
body {
  background-image: url('data:image/svg+xml,%3Csvg width="52" height="26" viewBox="0 0 52 26" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  margin: 0;
}
.custom-container {
  background-color: rgba(240, 240, 240, 0.5);
  border: 1px solid #ccc;
}
.title {
  text-align: center;
  margin: 15px 0 15px 0;
}
</style>