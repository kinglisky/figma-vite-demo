<script setup lang="ts">
import { ref } from 'vue';
const count = ref(5);

function create() {
  window.parent.postMessage(
    { pluginMessage: { type: 'create-rectangles', count: count.value } },
    '*'
  );
}
function cancel() {
  window.parent.parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
}
</script>

<template>
  <h2>title</h2>
  <p>Count: <input id="count" :value="count" type="number" /></p>
  <div>
    <button id="create" @click="create">Create</button>
    <button id="cancel" @click="cancel">Cancel</button>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
