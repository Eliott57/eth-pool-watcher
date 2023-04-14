<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      {{ transaction.hash }}
    </th>
    <td class="px-6 py-4">
      {{ transaction.sender }}
    </td>
    <td class="px-6 py-4">
      {{ transaction.receiver }}
    </td>
    <td class="px-6 py-4 text-center sticky right-0 bg-gray-100 font-bold text-blue-600">
      {{ transaction.value.toFixed(2) }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "TxRow",
  props: {
    transaction: Object
  }
}
</script>

<style scoped>

</style>
