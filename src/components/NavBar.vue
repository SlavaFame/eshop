<template>
    <header>
        <div class="header container">
            <div class="navbar">
                <img @click="$router.push('/')" src="@/assets/img/logo.svg" class="logo">
                <my-link @click="$router.push('/catalog')">Каталог</my-link>
                <my-link @click="$router.push('/delivery')">Доставка</my-link>
                <my-link @click="$router.push('/payment')" @create="addToCart">Оплата {{countCart}}</my-link>
                <my-link @click="$router.push('/contacts')">Контакты</my-link>
                <my-link @click="$router.push('/about')">О галерее</my-link>
            </div>
            <div class="search">
                <my-input v-model="searchQuery"></my-input>
                <my-button>Найти</my-button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    header {
        padding: 2.4rem 0;
        border-bottom: 1px solid #E1E1E1;
        margin-bottom: 4.5rem;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .navbar {
        display: flex;
        align-items:center;
        gap: 4.8rem;
        padding: 1rem 0;
        font-size: 1.4em;
        line-height: 2.1rem;
    }
</style>