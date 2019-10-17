<template>
    <div class="new-msg">
        <form @submit.prevent="addMsg" class="new-msg-form">
            <input type="submit" value="+" class="new-msg-form-submit">
            <input v-model="newMsg" type="text" class="new-msg-form-input" name="new-msg" placeholder="Your message">
        </form>
    </div>
</template>

<script>
export default {
    name: "NewMessage",
    props: ["username"],
    data() {
        return {
            newMsg: null
        }
    },
    methods: {
        addMsg() {
            console.log(this.newMsg, this.username, Date.now());
        }
    }

}
</script>

<style>

.new-msg-form {
    width: 100%;
    display: flex;
}

.new-msg-form-submit {
    padding: .2rem .9rem;
    font-size: 1.8rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;
    cursor: pointer;
}

.new-msg-form-input {
    flex-grow: 1;
    font-size: 1.075rem;
    padding-left: .5rem;

    border: 1px solid hsl(0, 0%, 83%);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

</style>