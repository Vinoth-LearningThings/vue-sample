<template>
  <div class="jumbotron">
    <h1>You are in About section.</h1>
    <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>
    <modal v-show="isModalVisible" @close="closeModal">
        <h3 slot="header">About</h3>
          <button slot="footer" class="modal-default-button" @click="closeModal" >
            ok
          </button>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'about',
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
