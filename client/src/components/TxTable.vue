<template>
  <div class="p-3">
    <div class="flex justify-end mb-3">
      <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-3" @click="resetTransactions">
        Delete all
      </button>

      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" @click="setTransactions">
        Refresh
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="text-sm text-left text-gray-500 shadow">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">
            Hash
          </th>
          <th scope="col" class="px-6 py-3">
            From
          </th>
          <th scope="col" class="px-6 py-3">
            To
          </th>
          <th scope="col" class="px-6 py-3 sticky right-0 bg-gray-100 text-blue-600">
            ETH
          </th>
        </tr>
        </thead>
        <tbody>
        <TxRow v-for="transaction of transactions" :transaction="transaction" :key="transaction.hash"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TxRow from './TxRow.vue'
import {getTransactions, resetTransactions} from "@/components/mongo-express-script";

export default {
  name: 'TxTable',
  components: {
    TxRow
  },
  data(){
    return {
      transactions: []
    }
  },
  async mounted() {
    await this.setTransactions();
  },
  methods: {
    async setTransactions(){
      this.transactions = await getTransactions();
    },
    async resetTransactions(){
      await resetTransactions();
      this.transactions = await getTransactions();
    }
  }
}
</script>
