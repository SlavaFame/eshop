<template>
    <a class="link" href="#">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'my-link'
    }
</script>

<style lang="scss" scoped>
    .link {
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 150%;
        color: #343030;
        &:hover {
            color:#766763;
        }
    }
</style>