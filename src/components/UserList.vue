<template>
  <div class="col-md-12 custom-container">
    <h3 class="title">List of users</h3>
    <hr />
    <UserListItem
      v-for="user in userList"
      :user="user"
      :key="user.id"
      @onDeleteSelect="onDeleteSelect"
    ></UserListItem>
  </div>
</template>

<script>
import axios from "axios";
import UserListItem from "./UserListItem";
import { setTimeout } from 'timers';

export default {
  name: "UserList",
  components: {
    UserListItem
  },
  data() {
    return { userList: [] };
  },
  methods: {
    async onDeleteSelect(id) {
      try {
        let rep = await axios.delete(
          `https://my-user-manager.herokuapp.com/users/${id}`
        );

        if (rep.status === 200) {
          this.$toasted.success("User deleted!", {
            duration: 3000,
            keepOnHover: true
          });
        }
      } catch (err) {
        this.$toasted.error(err.response.statusText || "Request failed", {
          duration: 3000,
          keepOnHover: true
        });
      }
    },
    async onMounted() {
      try {
        let rep = await axios.get(
          "https://my-user-manager.herokuapp.com/users"
        );
        this.userList = rep.data;
      } catch (err) {
        setTimeout(()=>{ this.onMounted() }, 300); // Relaunch onMounted until page is loaded
      }
    }
  },
  mounted() {
    this.onMounted();
  }
};
</script>

<style scoped>
</style>