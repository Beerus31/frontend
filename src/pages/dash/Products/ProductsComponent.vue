<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
      <div class="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <p class="mb-6 text-gray-700 font-semibold text-lg">Insert Product</p>

        <!-- Error List -->
        <div v-if="Object.keys(errorList).length > 0" class="mb-4">
          <ul>
            <li v-for="(error, index) in errorList" :key="index" class="text-red-500 text-sm">
              {{ error[0] }}
            </li>
          </ul>
        </div>

        <!-- Name Field -->
        <div class="space-y-1">
          <label class="text-gray-700 font-medium">Name</label>
          <input 
            type="text" 
            v-model="model.products.name" 
            class="w-full p-3 border rounded-lg text-gray-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product name"
          />
        </div>

        <!-- Category Field -->
        <div class="space-y-1">
          <label class="text-gray-700 font-medium">Category</label>
          <select
            v-model="model.products.category"
            class="w-full p-3 border rounded-lg text-gray-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          >
            <option disabled value="">Select category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <!-- Description Field -->
       <!-- Formatting Buttons -->
<div class="mb-2 flex space-x-2">
  <button @click="format('bold')" class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">Bold</button>
  <button @click="format('italic')" class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">Italic</button>
  <button @click="format('underline')" class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">Underline</button>
</div>

<!-- Content-editable div for rich text input -->
<div 
  ref="editor"
  contenteditable="true"
  class="w-full h-32 p-3 border rounded-lg text-gray-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  @input="updateDescription"
></div>


        <!-- Image Upload -->
        <div class="space-y-1">
          <label class="text-gray-700 font-medium">Product Image</label>
          <input 
            type="file" 
            @change="onFileChange" 
            class="w-full p-2 border rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Date and Time -->
        <div class="space-y-1">
          <label class="text-gray-700 font-medium">Date and Time</label>
          <input 
            type="datetime-local" 
            v-model="model.products.date_time" 
            class="w-full p-3 border rounded-lg text-gray-600 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button 
            type="button" 
            @click="saveProduct" 
            class="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600"
          >
            Insert Data
          </button>
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
import axios from 'axios';
import DashboardComponent from '../DashboardComponent.vue';

export default {
  name: 'ProductsComponent',
  data() {
    return {
      errorList: '',
      categories: ['Electronics', 'Furniture', 'Clothing', 'Books', 'Toys'],
      model: {
        products: {
          name: '',
          category: '',
          description: '',
          product_image: null,
          date_time: ''
        }
      }
    };
  },
  methods: {
  format(command) {
    // Ensure that the editor reference is used
    const editor = this.$refs.editor;
    if (editor) {
      document.execCommand(command, false, null);
      // Update the model after applying formatting
      this.updateDescription();
    }
  },
  updateDescription() {
    // Ensure the editor reference is used to get content
    this.model.products.description = this.$refs.editor ? this.$refs.editor.innerHTML : '';
  },
  onFileChange(event) {
    const file = event.target.files[0];
    this.model.products.product_image = file;
  },
  saveProduct() {
    const formData = new FormData();
    formData.append('name', this.model.products.name);
    formData.append('category', this.model.products.category);
    formData.append('description', this.model.products.description);
    formData.append('product_image', this.model.products.product_image);
    formData.append('date_time', this.model.products.date_time);

    axios.post('http://localhost:8000/api/createtest', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      alert(res.data.message);
      this.model.products = {
        name: '',
        category: '',
        description: '',
        product_image: null,
        date_time: ''
      };
      this.$router.push({ name: 'home' });
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 422) {
          this.errorList = error.response.data.errors;
        }
      }
    });
  }
},


  components: {
    DashboardComponent,
  }
};
</script>
