<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* Global styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --light-grey-blue: #f7fafc;
  --dark-grey-blue: hsl(218, 17%, 35%);
}

html,
button {
  font-family: 'Work Sans', sans-serif;
  letter-spacing: .02em;
}

</style>
