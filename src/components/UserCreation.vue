<template>
  <div class="col-md-12 custom-container">
    <h3 class="title">Create a new user</h3>
    <hr />
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
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
        <button type="button" class="btn btn-outline-success" @click="onCreate">Create User</button>
      </div>
    </form>
    <p style="color: #ccc">In order to prevent the 405 error, button must be clicked 2 times.</p>
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
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    async onCreate() {
      if (this.userName === "") {
        this.$toasted.error("Name field can't be empty", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      if (this.userEmail === "" || !this.reg.test(this.userEmail)) {
        this.$toasted.error("Input a valid email address", {
          duration: 3000,
          keepOnHover: true
        });
        return;
      }
      try {
        let rep = await axios.post(
          "https://my-user-manager.herokuapp.com/users",
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
        if (rep.status === 201) {
          console.log(rep);
          this.$toasted.success(`User created with id: ${rep.data.id}!`, {
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
.btn {
  width: 50%;
  text-align: center;
  font-weight: bold;
}
.button-container {
  width: 100%;
  margin-bottom: 15px;
}
</style>