<template>
    <input class="input" type="text" placeholder="Поиск по названию картины">
</template>

<script>
    export default {
        name:'my-input'
    }
</script>

<style lang="scss" scoped>
    .input {
        height: 4.8rem;
        width:29.4rem;
        font-size: 1.4rem;
        padding: 1.3rem 1.6rem;
        color: #343030;
        outline:none;
        border: 1px solid #E1E1E1;
        &:focus {
            border: 1px solid #B5B5B5;
        }
        &::placeholder {
            color: #9F9F9F;
        }
    }
</style>