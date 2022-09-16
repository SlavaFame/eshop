<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style lang="scss" scoped>
.btn {
    font-size: 1.4rem;
    height: 4.8rem;
    width: 11.2rem;
    padding: 1.3rem;
    background-color: #382E2B;
    border: 2px solid #382E2B;
    color: white;
    cursor: pointer;
    text-align: center;
    &:hover {
        background-color:#776763;
        border: 2px solid #776763;
    }
}

.btn-disable {
    background-color:#C1B4B1;
    border:2px solid #C1B4B1;
    cursor: none;
    &:focus, &:hover {
        background-color:#C1B4B1;
        border:2px solid #C1B4B1;
    }
}

.btn-addToCart {
    text-align: right;
    padding:0 0.5rem 0 0;
    position: relative;
    background-color:#5B3A32;
    border:2px solid #5B3A32;
    &:before {
        content: '';
        background: url("@/assets/img/in_cart.svg") center center / contain no-repeat;
        width: 1.6rem;
        height: 1.3rem;
        position: absolute;
        left: 0.72em;
    }
}
</style>