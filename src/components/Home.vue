<template>
  <div class="jumbotron">
    <h1>You are in Home section.</h1>
   <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>
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
