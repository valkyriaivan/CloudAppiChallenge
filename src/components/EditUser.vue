<template>
  <div class="col-md-12 custom-container">
    <h3 class="title">Edit a user</h3>
    <hr />
    <form class="form-inline">
      <div class="form-group">
        <label for="inputName">Search by ID:</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          placeholder="E.g. '2'"
          v-model="searchInput"
        />
        <button type="button" class="btn btn-primary" @click="onSearch">Fetch user data</button>
      </div>
    </form>
    <form>
      <div class="form-row">
        <div class="form-group col-md-1">
          <label for="inputName">ID</label>
          <input type="text" class="form-control" id="inputName" placeholder="ID" v-model="userId" />
        </div>
        <div class="form-group col-md-5">
          <label for="inputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Name"
            v-model="userName"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Email"
            v-model="userEmail"
          />
        </div>
      </div>
      <div class="text-center button-container">
        <button type="button" class="btn btn-outline-info" @click="onSubmitEdit">Update user data</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  data: () => {
    return {
      userEmail: "",
      userName: "",
      userId: "",
      searchInput: "",
      regNumber: /^[1-9]\d*$/,
      regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    async onSubmitEdit() {
      if (this.userName === "") {
        this.$toasted.error("Name field can't be empty", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      if (this.userEmail === "" || !this.regEmail.test(this.userEmail)) {
        this.$toasted.error("Input a valid email address", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      if (this.userId === "" || !this.regNumber.test(this.userId)) {
        this.$toasted.error("Input a valid ID number", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      try {
        let rep = await axios.put(
          `https://my-user-manager.herokuapp.com/users/${this.userId}`,
          JSON.stringify({
            name: this.userName,
            email: this.userEmail
          }),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (rep.status === 200) {
          this.$toasted.success(`User updated correctly!`, {
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
    async onSearch() {
      if (this.searchInput === "" || !this.regNumber.test(this.searchInput)) {
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

        if (rep.status) {
          this.userId = rep.data.id;
          this.userName = rep.data.name;
          this.userEmail = rep.data.email;
        }
      } catch (err) {
        this.userFound = [];
      }
    },
    onMounted() {
      if (this.$route.params.id) {
        this.searchInput = this.$route.params.id;
        this.onSearch();
      }
      // if(this.$route.params.id)
    }
  },
  mounted() {
    this.onMounted();
  }
};
</script>

<style scoped>
.button-container .btn {
  width: 50%;
  text-align: center;
  font-weight: bold;
}
.button-container {
  width: 100%;
  margin-bottom: 15px;
}
</style>