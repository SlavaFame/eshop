<template>
    <div class="container">
        <h1>Оплата</h1>
        <p>Текущий статус: {{ statusInCart }} ({{ quantityInCart }})</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                statusInCart: localStorage.status,
                quantityInCart: localStorage.quantity
            }
        }
    }
</script>

<style lang="scss" scoped>
.container p{
    font-size:1.4rem
}
</style>