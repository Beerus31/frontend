<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="w-screen h-screen flex">
    <!-- Sidebar Component -->
    <SideNavComponent />
    
    <!-- Main Content Area -->
    <div class="flex-1 h-full bg-gray-400">
      <div class="h-[50px]">
        <!-- Navbar Component -->
        <NavbarComponent />
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-100 p-4">
        <!-- Render the named slot content here -->
        <slot name="slot-pages"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavComponent from './NAVS/SideNavComponent.vue';
import NavbarComponent from './NAVS/NavbarComponent.vue';

export default {
  name: 'DashboardComponent',
  components: {
    SideNavComponent,
    NavbarComponent,
  },
};
</script>
