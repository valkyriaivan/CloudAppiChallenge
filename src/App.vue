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
import axios from "axios";
import Header from "./components/Header";
import UserList from "./components/UserList";
import SelectMenu from "./components/SelectMenu";
import UserCreation from "./components/UserCreation";
import SearchUserById from "./components/SearchUserById";
import EditUser from "./components/EditUser";

export default {
  name: "App",
  components: {
    Header,
    UserList,
    SelectMenu,
    UserCreation,
    SearchUserById,
    EditUser
  }
};
</script>

<style>
</style>