<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <DashboardComponent>
      <template v-slot:slot-pages>
        <div class="grid grid-cols-4 gap-3">

        </div>
        <div class="">
          <ListComponent :data="products" :description="'Product'" :columns="['Name', 'Categories', 'Description']" />
        </div>
      </template>
    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../DashboardComponent.vue';
import ListComponent from '../Cards/ListComponents.vue';
const axios = require('axios');

export default {
  name: 'HomeComponent',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {

      const response = await axios.post('http://localhost:8000/api/products',{});
      if(response.status === 201){
      this.products = response.data.data;
        console.log(response.data.data);
      }else{
        console.error("error on api");
      }
    },
  },
  components: {
    DashboardComponent,
    ListComponent,
  },
};
</script>
