<template>
    <div class="chatroom">
        <Navbar/>
        <h1 class="chatroom-title">Swift Chat</h1>
        <section class="chatroom-card">
            <div class="chatroom-card-content">
                <ul class="chatroom-card-content-list" ref="list">
                    <li v-for="message in messages" :key="message.id" class="chatroom-card-content-list-item">
                        <img loading="lazy" src="../assets/icon-user.svg" alt="User avatar" width="30" height="30" class="chatroom-card-content-list-img">
                        <span class="chatroom-card-content-list-name">{{ message.name }}</span>
                        <span class="chatroom-card-content-list-time">{{ message.timestamp }}</span>
                        <p class="chatroom-card-content-list-msg">{{ message.content }}</p>
                    </li>
                </ul>
            </div>
            <div class="chatroom-card-action">
                <NewMessage :username="username"/>
            </div>
        </section>
        <div class="big-circle"></div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";

export default {
    name: "Chatroom",
    props: ["username"],
    components: {
        Navbar,
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        formatDate(date) {
            return new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                hour12: true
            }).format(date);
        },
        scrollToBottomMessages() {
            const chatSection = this.$refs.list;
            chatSection.scrollTop = chatSection.scrollHeight;
        }
    },
    created() {
        const reference = db.collection("messages").orderBy("timestamp");

        reference.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(update => {
                if (update.type == "added") {
                    const doc = update.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: this.formatDate(doc.data().timestamp)
                    })
                }
            });
        });
    },
    updated() {
        this.scrollToBottomMessages();
    }
}
</script>

<style>

.chatroom {
    position: relative;
    min-height: 100vh;
    background-color: var(--light-grey-blue);
}

.chatroom-title {
    margin: 2rem;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
    color: #6c63ff;
}

.chatroom-card {
    width: 60rem;
    max-width: 90%;
    margin: 0 auto;

    box-shadow: 0 5px 10px rgba(0, 0, 0, .175);
    background-color: #fff;
}

/* Decorative circle */
.chatroom::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 22px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #6c63ff;
    opacity: .2;
    pointer-events: none;
}
/* End decorative circle */

.chatroom-card-content {
    padding: 3rem 2rem;
}

.chatroom-card-content-list {
    list-style: none;
    max-height: 27rem;
    overflow: auto;
}

.chatroom-card-content-list::-webkit-scrollbar {
    width: 5px;
}

.chatroom-card-content-list::-webkit-scrollbar-track {
    background-color: #cecece;
}

.chatroom-card-content-list::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
}

.chatroom-card-content-list-item {
    margin-bottom: 3.5rem;
}

.chatroom-card-content-list-img {
    float: left;
    margin-right: .9rem;
}

.chatroom-card-content-list-name {
    margin-right: .9rem;
    font-weight: 600;
    font-size: .95rem;
}

.chatroom-card-content-list-time {
    color: #999;
    font-size: .9rem;
}

.chatroom-card-content-list-msg {
    margin-top: .75rem;
    margin-left: 2.75rem;
}

.chatroom-card-action {
    padding: 2rem;
}

@media screen and (max-width: 35em) {
    .chatroom-title {
        font-size: 2.1rem;
        margin: 1rem 0 1.5rem 0;
    }

    .chatroom-card-content-list {
        max-height: 19rem;
        overflow: auto;
    }
}

</style>