<template>
    <footer class="footer bg-dark">
        <div>
            <p>
                &copy;ISER {{calculate()}}-1
            </p>
        </div>
    </footer>
</template>

<style>
footer {
    color: white;
    position: fixed;
    bottom: 0px;
    width: 100%;
}
</style>


<script>
        export default {
            data: () => ({
                anio: Number,
            }),
    methods: {
        calculate() {
        return this.anio=new Date().getFullYear();
            }
        }
    };
</script>
