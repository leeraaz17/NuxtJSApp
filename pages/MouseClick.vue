<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
  </div>
</template>

<script>
  export default {
    name: 'YesNoComponent',
    props: {
      callMe: {
        type: Function
      }
    },
    methods: {
      callYes() {
        window.alert("You have clicked yes.")
      },
      callNo() {
        alert("You have clicked no.")
      }
    }
  }
</script>