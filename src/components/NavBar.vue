<template>
    <header>
        <div class="header container">
            <div class="navbar">
                <img @click="$router.push('/')" src="@/assets/img/logo.svg" class="logo">
                <my-link @click="$router.push('/catalog')">Каталог</my-link>
                <my-link @click="$router.push('/delivery')">Доставка</my-link>
                <my-link @click="$router.push('/payment')">Оплата</my-link>
                <my-link @click="$router.push('/contacts')">Контакты</my-link>
                <my-link @click="$router.push('/about')">О галерее</my-link>
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