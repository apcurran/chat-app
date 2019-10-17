<template>
    <div class="chatroom">
        <h1 class="chatroom-title">Chatroom</h1>
        <section class="chatroom-card">
            <article class="chatroom-card-content">
                <ul class="chatroom-card-content-list">
                    <li class="chatroom-card-content-list-item">
                        <img src="" alt="User avatar" class="chatroom-card-content-list-img">
                        <span class="chatroom-card-content-list-name">Name</span>
                        <span class="chatroom-card-content-list-time">Time</span>
                        <p class="chatroom-card-content-list-msg">Message</p>
                    </li>
                </ul>
            </article>
            <div class="chatroom-card-action">
                <NewMessage :username="username"/>
            </div>
        </section>
    </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";

export default {
    name: "Chatroom",
    props: ["username"],
    components: {
        NewMessage
    },
    data() {
        return {

        }
    },
  
}
</script>

<style>

.chatroom-title {
    margin: 2rem;
    text-align: center;
}

.chatroom-card {
    width: 60rem;
    max-width: 90%;
    margin: 0 auto;

    box-shadow: 0 5px 10px rgba(0, 0, 0, .175);
}

.chatroom-card-content {
    padding: 3rem 2rem;
}

.chatroom-card-content-list {
    list-style: none;
}

.chatroom-card-content-list-img {
    float: left;
    margin-right: .9rem;
}

.chatroom-card-content-list-name {
    margin-right: .9rem;
}

.chatroom-card-content-list-time {
    color: #999;
    font-size: .95rem;
}

.chatroom-card-content-list-msg {
    margin-top: 1rem;
}

.chatroom-card-action {
    padding: 2rem;
}

</style>