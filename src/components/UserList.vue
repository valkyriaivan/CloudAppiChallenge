<template>
  <div class="col-md-9 custom-container">
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

export default {
  name: "VideoList",
  components: {
    UserListItem
  },
  props: {
    userList: Array
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
    }
  },
  mounted() {
    console.log(this.userList);
  }
};
</script>

<style scoped>

</style>