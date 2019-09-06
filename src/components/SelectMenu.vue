<template>
  <div class="col-md-3">
    <div class="modalSetupNavContainer">
      <h6>List all users</h6>
    </div>
    <div class="modalSetupNavContainer">
      <h6>Add user</h6>
    </div>
    <div class="modalSetupNavContainer">
      <h6>Search user by ID</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectMenu"
};
</script>

<style scoped>
.col-md-3 {
  padding: 0;
}
.modalSetupNavContainer {
  margin: 0;
  padding: 21px !important;
  background-color: #1f4d98;
  color: rgba(255, 255, 255);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.modalSetupNavContainer h6 {
  font-weight: bold;
  margin: 0;
}
.modalSetupNavContainer span {
  /* line-height: 20px; */
  color: rgba(255, 255, 255, 0.6);
}
</style>