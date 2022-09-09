<template>
    <div class="container">
        <h1>Контакты</h1>
        <div class="contacts">
            <p>г. Москва, ул. Расплетина, 24</p>
            <p>Звонить по телефону: <my-link href="tel:+74955555555">+7 (495) 555-55-55</my-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .contacts{
        margin-top:3.9rem;
        p {
            font-size: 1.4em;
            line-height: 2rem;
        }
    }
</style>