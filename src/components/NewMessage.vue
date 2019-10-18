<template>
    <div class="new-msg">
        <form @submit.prevent="addMsg" class="new-msg-form">
            <input type="submit" value="+" class="new-msg-form-submit">
            <input v-model="newMsg" type="text" class="new-msg-form-input" name="new-msg" placeholder="Your message">
        </form>
        <p v-if="feedback" class="new-msg-form-feedback feedback">{{ feedback }}</p>
    </div>
</template>

<script>
import db from "@/firebase/init";

export default {
    name: "NewMessage",
    props: ["username"],
    data() {
        return {
            newMsg: null,
            feedback: null
        }
    },
    methods: {
        addMsg() {
            if (this.newMsg) {
                db.collection("messages").add({
                    content: this.newMsg,
                    name: this.username,
                    timestamp: Date.now()
                }).catch(err => console.error(err));

                this.newMsg = null;
                this.feedback = null;
            } else {
                this.feedback = "Please enter a message before posting.";
            }
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

    background-color: #6c63ff;
    color: #fff;
    transition: background-color 150ms ease-in-out;
}

.new-msg-form-submit:hover {
    background-color: hsl(243, 100%, 60%);
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