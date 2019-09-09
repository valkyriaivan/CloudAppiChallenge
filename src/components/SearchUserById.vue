<template>
  <div class="col-md-12 custom-container">
    <h3 class="title">Search users by ID</h3>
    <hr />
    <form class="form-inline">
      <div class="form-group" style="width: 100%; float: right">
        <label for="inputName">Search by ID:</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          placeholder="E.g. '2'"
          v-model="searchInput"
        />
        <button type="button" class="btn btn-primary" @click="onSearch">Search user</button>
      </div>
    </form>
    <div v-if="userFound && userFound.length === 0" style="width: 100%; text-align: center">
      <p>The user you tried to fetch is not available</p>
    </div>
    <div v-if="userFound && userFound.length > 0">
      <UserListItem
        v-for="user in userFound"
        :user="user"
        :key="user.id"
        @onDeleteSelect="onDeleteSelect"
      ></UserListItem>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserListItem from "./UserListItem";

export default {
  name: "SearchUserById",
  data() {
    return { searchInput: "", reg: /^[1-9]\d*$/, userFound: null };
  },
  components: {
    UserListItem
  },
  methods: {
    async onSearch() {
      if (this.searchInput === "" || !this.reg.test(this.searchInput)) {
        this.$toasted.error("Input a valid ID number", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      try {
        let rep = await axios.get(
          `https://my-user-manager.herokuapp.com/users/${this.searchInput}`
        );
        this.userFound = [rep.data];
      } catch (err) {
        this.userFound = [];
      }
    },
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
  }
};
</script>

<style scoped>
.form-control {
  margin: 0 15px 0 15px;
}
.form-inline {
  margin-bottom: 25px;
}
@media (max-width: 575px) {
  .form-control {
    margin: 15px 0 15px 0;
  }
}
</style>