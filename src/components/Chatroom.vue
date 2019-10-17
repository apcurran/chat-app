<template>
    <div class="chatroom">
        <h1>Test Chatroom</h1>
        <p>{{ this.username }}</p>
    </div>
</template>

<script>
export default {
    name: "Chatroom",
    props: ["username"],
    data() {
        return {

        }
    },
  
}
</script>

<style>

</style>