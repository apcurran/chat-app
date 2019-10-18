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
    color: #151515;
    text-decoration: none;
    font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
}

</style>