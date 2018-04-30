<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="admin-action-card">
        <span class="action-card-title">User Management</span>
        <span class="action-card-text">Edit permissions or remove users from application</span>
        <div class="button-container">
          <button class="btn btn-warning">MANAGE NOW</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="admin-action-card">
        <span class="action-card-title">Request Que</span>
        <span class="action-card-text">Edit permissions or remove users from application</span>
        <div class="button-container">
          <button class="btn btn-warning">MANAGE NOW</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="admin-action-card">
        <span class="action-card-title">Permissions History</span>
        <span class="action-card-text">Edit permissions or remove users from application</span>
        <div class="button-container">
          <button class="btn btn-warning">MANAGE NOW</button>
        </div>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal">
        <h3 slot="header">Home</h3>
        <div slot="footer">
          <button  class="modal-default-button pull-left"  @click="closeModal" >
            cancel
          </button>
          <button  class="modal-default-button" @click="closeModal" >
            ok
          </button>
        </div>
  </modal>
  </div>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'home',
  components: {
    modal
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
</script>
