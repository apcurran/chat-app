<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <router-link :to="{ name: 'Home' }" class="nav-item-link">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<style>

.nav {
    padding: 2rem 3rem;

    display: flex;
    justify-content: flex-end;
}

.nav-list {
    list-style: none;
}

.nav-item-link {
    display: inline-block;
    width: 100%;
    padding: .4rem .125rem .3rem .125rem;
    color: #151515;
    text-decoration: none;
    font-family: 'Work Sans', sans-serif;
}

</style>