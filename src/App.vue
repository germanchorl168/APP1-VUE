<template>
  <div id="app">
    <header-component />
    <footer-component />
    <body-component />
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from './components/header/Header.vue';
import FooterComponent from './components/footer/Footer.vue';
import BodyComponent from './components/body/Body.vue';





@Component({
    components:{
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    
  
  },
})


export default class App extends Vue{}

</script>

