<template>
  <div class="search-filter-wrapper">
    <b-container>
      <b-row>
        <b-col>
          <font-awesome-icon icon="search" class="search-shops-icon" />
          <span>Search shop list</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import BCol from "bootstrap-vue/esm/components/layout/col";
  export default {
      components: {
          BCol,
      }
  }
</script>
<style lang="scss">
  .search-filter-wrapper {
     padding: 15px;
     float: left;
     font-size: 16px;
     .search-shops-icon {
        margin-right: 5px;
     }
  }
</style>