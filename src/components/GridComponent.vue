<template>
  <div>
      <div v-if="rowClicked">
        <h1 class="test">Selected row details</h1>
        <h3>Record Number: {{selectedUser.pageIndex + 1}}</h3>
        <h3>Name: {{selectedUser.row.name}}</h3>
      </div>
      <vue-good-table
      title="Demo Table"
      :columns="columns"
      :rows="rows"
      :rowStyleClass="getRowClass"
      :search-options="{
        enabled: true,
        placeholder: 'Search'
      }"
      :pagination-options="{
        enabled: true,
        perPage: 10,
        perPageDropdown: [10,20,30,40,50]
      }"
      styleClass="table condensed table-bordered table-striped"
      @on-row-click="onRowClick"/>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      selectedUser: {},
      rowClicked: false,
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterOptions: {
            enabled: true
          }
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          globalSearchDisabled: true
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM DD YYYY',
          globalSearchDisabled: true
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          globalSearchDisabled: true
        }
      ],
      rows: [
        {id: 1, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343},
        {id: 2, name: 'Jane', age: 24, createdAt: '2011-09-11', score: 0.03343},
        {id: 3, name: 'Susan', age: 16, createdAt: '2011-10-28', score: 0.03343},
        {id: 4, name: 'Snape', age: 55, createdAt: '2011-10-25', score: 0.03343},
        {id: 5, name: 'Danny', age: 40, createdAt: '2011-10-10', score: 0.03343},
        {id: 6, name: 'Jade', age: 20, createdAt: '2011-10-05', score: 0.03343},
        {id: 7, name: 'Ben', age: 24, createdAt: '2011-10-18', score: 0.03343},
        {id: 8, name: 'Harry', age: 16, createdAt: '2011-11-02', score: 0.03343},
        {id: 9, name: 'Draco', age: 55, createdAt: '2011-09-25', score: 0.03343},
        {id: 10, name: 'Donald', age: 40, createdAt: '2011-09-22', score: 0.03343},
        {id: 11, name: 'Ron', age: 20, createdAt: '2011-10-31', score: 0.03343},
        {id: 12, name: 'King', age: 24, createdAt: '2011-09-09', score: 0.03343},
        {id: 13, name: 'Granger', age: 16, createdAt: '2011-10-30', score: 0.03343},
        {id: 14, name: 'Ginny', age: 55, createdAt: '2011-10-29', score: 0.03343},
        {id: 15, name: 'Drogo', age: 40, createdAt: '2011-10-27', score: 0.03343},
        {id: 19, name: 'Chris', age: 55, createdAt: '2011-05-15', score: 0.03343},
        {id: 20, name: 'Dan', age: 40, createdAt: '2011-08-15', score: 0.03343}
      ]
    }
  },
  methods: {
    onRowClick (params) {
      this.rowClicked = true
      this.selectedUser = params
      console.log(this.selectedUser)
    },

    getRowClass (row) {
      if (row.id) {
        return 'user-record'
      }
      return ''
    }
  }
}
</script>
