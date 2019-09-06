<template>
  <!-- <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" />
    <div class="media-body">{{ video.snippet.title }}</div>
  </li>-->
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
          <button type="button" class="btn btn-info">Edit</button>
          <button type="button" class="btn btn-danger" @click="onDeleteSelect">Delete</button>
        </b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
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
.media-body {
  line-height: 54px;
  padding-left: 15px;
}
.media {
  padding: 10px;
  margin: 25px 0 25px 0;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8em;
}
.media:hover {
  background-color: #ddd;
}
.btn {
  margin: 0 10px 0 10px;
}
</style>