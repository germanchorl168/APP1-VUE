import { Vue } from 'vue-property-decorator';
<template>

<div class="row">

    <div class="col">
        <h1>*ngIf</h1>
        <div class="card w-75" v-if="show">
            <div class="card-body">
                <h5 class="card-title">{{course.professor}}</h5>
                <p class="card-text">{{course.name}}</p>
            </div>
        </div>
        <button v-on:click="show =!show"  href="#" class="btn btn-primary">Button</button>
    </div>

    <div class="col ">
        <h1>*ngFor</h1>
        <ul id="list ">
            <li v-for="(student, i) in students" :key="i">
                {{i+1}}-{{student.name}}
            </li>
        </ul>
    </div>
</div>
</template>



<script>
export default {

    data:()=>({
        
        students:
            [
            {name:"Pepito", id:1},
            {name:"Jose",id:2},
            {name:"Ivan",id:3},
            {name:"Luis",id:4}
            ],

            course:{
            professor:'Pepito',
            name:'Mobil'
        },
        show:false
        })
        
    };


</script>
