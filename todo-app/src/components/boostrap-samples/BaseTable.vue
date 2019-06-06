<template>
  <div style="margin-top: 20px;">
    <b-container>
      <b-row>
        <b-col>
          <b-table small :fields="fields" :items="items">
            <!-- A virtual column -->
            <template slot="index" slot-scope="data">
              {{ data.index + 1 }}
            </template>

            <template slot="inner_table" slot-scope="data">
              <inner-table v-bind:dataItem="data.item" />
            </template>

            <!-- A custom formatted column -->
            <template slot="name" slot-scope="data">
              {{ data.value.first }} {{ data.value.last }}
            </template>

            <!-- A virtual composite column -->
            <template slot="nameage" slot-scope="data">
              {{ data.item.name.first }} is {{ data.item.age }} years old
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InnerTable from './BaseInnerTable'

export default {
  name: 'BaseTable',
  components: {
    InnerTable
  },
  data () {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        'index',
        // Nested table
        'inner_table',
        // A column that needs custom formatting
        { key: 'name', label: 'Full Name' },
        // A regular column
        'age',
        // A regular column
        'sex',
        // A virtual column made up from two fields
        { key: 'nameage', label: 'First name and age' }
      ],
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
      ]
    }
  }
}
</script>
