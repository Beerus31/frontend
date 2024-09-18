<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="list bg-white p-6 rounded-lg shadow-md">
    <RouterLink class="rounded-lg px-4 py-2 bg-gray-900 text-gray-100" :to="{ path: '/product' }">Add Product</RouterLink> 
    <div class="overflow-x-auto">

      
      <input 
            type="text" 
            v-model="search"
            @input="debounced"
            class="w-full p-3 border rounded-lg text-gray-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="search"
          
          />

        <select name="category" v-model="filter" @change="onFilter" >
            <option value="">Category</option>
            <option value="Alpha">Alpha</option>
            <option value="Beta">Beta</option>
            <option value="Epsilon">Epsilon</option>
            <option value="Gamma">Gamma</option>
        </select>
      <!-- Pagination Controls -->

      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left">#</th>
            <th class="px-4 py-2 text-left">Name</th>
            <th class="px-4 py-2 text-left">Category</th>
            <th class="px-4 py-2 text-left">Description</th>
            <th class="px-4 py-2 text-left">Product Image</th>
            <th class="px-4 py-2 text-left">Date and Time</th>
            <th class="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="product in paginatedProducts" :key="product.id">
            <td class="px-4 py-2">{{ product.id }}</td>
            <td class="px-4 py-2">{{ product.name }}</td>
            <td class="px-4 py-2">{{ product.category }}</td>
            <td class="px-4 py-2" v-html="product.description"></td>
            <td class="px-4 py-2">
              <img v-if="product.product_image" :src="`http://localhost:8000/images/${product.product_image}`" alt="Product Image" class="h-16 w-16 object-cover rounded-lg">
            </td>
            <td class="px-4 py-2">{{ product.date_time }}</td>
            <td class="px-4 py-2">
              <RouterLink :to="{ path: `createtest/${product.id}/edit` }" class="rounded-lg px-4 py-2 mr-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Edit</RouterLink>
              <button type="button" @click="deleteProduct(product.id)" class="rounded-lg px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination Controls -->
      <div class="pagination mt-4">
        <button :disabled="currentPage <= 1" @click="fetchProducts(currentPage - 1)">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage >= totalPages" @click="fetchProducts(currentPage + 1)">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    data: Array,
    description: String,
    columns: Array,
  },
  data() {
    return {
      products: [],
      perPage: 6,
      currentPage: 1,
      filter: "",
      search: "",
      totalPages: 0,
    };
  },
  computed: {
    paginatedProducts() {
      return this.products;
    }
  },
  methods: {
    fetchProducts(page = 1) {
      axios.post(`http://localhost:8000/api/products`, { page: page, per_page: this.perPage, search:this.search , filter:this.filter })
        .then(response => {
          if (response.data.data) {
            this.products = response.data.data;
          } else {
            console.error('No product data returned!');
          }
          if (response.data.pagination) {
            this.currentPage = response.data.pagination.current_page;
            this.totalPages = response.data.pagination.last_page;
          } else {
            console.error('No pagination data returned!');
          }
        })
        .catch(error => {
          console.error('API call error:', error);
        });
    },
    deleteProduct(productId) {
      if (confirm('Do you want to delete this product?')) {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
          .then(response => {
            alert(response.data.message);
            this.fetchProducts(this.currentPage); // Refresh data
          })
          .catch(error => {
            console.error('Error deleting product:', error);
          });
      }
    },
    debounced() {
      this.timeout = setTimeout(() => {
        this.fetchProducts();
      }, 500); 
    },
    onFilter(){
      this.fetchProducts();
    }
  },
  mounted() {
    this.fetchProducts(); // Fetch data on component mount
  },
  watch:{
    search() {
      this.debounced();

    }
  }
};
</script>

<style scoped>
.list {
  width: 100%;
}
.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
