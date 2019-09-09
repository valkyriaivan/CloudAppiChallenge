<template>
  <div class="media">
    <div v-html="identicon" />
    <div class="media-body row">
      <div class="col-md-8">
        <b>{{user.name}}</b>
        &emsp;&emsp;
        {{user.email}}
      </div>
      <div class="col-md-4">
        <b>
          <button type="button" class="btn btn-info" @click="$router.push(`/edit/${user.id}`)">Edit</button>
          <button type="button" class="btn btn-danger" @click="onDeleteSelect">Delete</button>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
import jdenticon from "jdenticon";
export default {
  name: "UserListItem",
  props: {
    user: Object
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.user.id, 54);
    }
  },
  methods: {
    onDeleteSelect() {
      this.$emit("onDeleteSelect", this.user.id);
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 0 10px 0 10px;
}
</style>