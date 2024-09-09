<template>
  <div>
    <h1>API Response</h1>
    <button @click="fetchData">Fetch Data</button>
    <table v-if="response && response.length">
      <thead>
        <tr>
          <th>Version</th>
          <th>Type</th>
          <th>Create At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in response" :key="item.versionId">
          <td>{{ item.version }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.createAt }}</td>
        </tr>
      </tbody>
    </table>
    <pre v-else>{{ response }}</pre>
  </div>
</template>

<script setup>
import { ref } from "vue";

const response = ref(null);

const fetchData = async () => {
  try {
    const res = await fetch("/api/hello");
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Network response was not ok: ${errorText}`);
    }
    const data = await res.json();
    response.value = data.data;
  } catch (error) {
    response.value = `Error: ${error.message}`;
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
