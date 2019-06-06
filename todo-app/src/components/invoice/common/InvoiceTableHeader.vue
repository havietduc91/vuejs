<template>
  <div class="table-header-wrapper">
    <b-container>
      <b-row>
        <b-col cols="10">
          <div class="tab-list-wrapper">
            <div
                class="tab-item"
                v-bind:class="{ active: activeTab === 'charge_list' }">
              Shop list
            </div>
            <div
                class="tab-item"
                v-bind:class="{ active: activeTab === 'invoice_detail' }">
              Shop Detail
            </div>
          </div>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-navbar>
            VIEW BY
            <b-navbar-nav >
              <b-nav-item-dropdown text="Lang" >
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'InvoiceTableHeader',
  props: {
    activeTab: String
  }
}
</script>
<style lang="scss">
  .table-header-wrapper {
    padding-top: 10px;
    border-bottom: 1px solid #E9EBED;
    .tab-list-wrapper {
      .tab-item {
        float: left;
        margin-right: 10px;
        font-size: 18px;
        &.active {
          border-bottom: 2px solid #1772FF;
        }
      }
    }
  }
</style>
