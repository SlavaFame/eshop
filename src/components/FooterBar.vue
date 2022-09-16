<template>
    <footer>
        <div class="footer container">
            <div class="footerbar">
                <img @click="$router.push('/')" src="@/assets/img/logo_footer.svg" class="logo">
                <my-link @click="$router.push('/catalog')">Каталог</my-link>
                <my-link @click="$router.push('/delivery')">Доставка</my-link>
                <my-link @click="$router.push('/payment')">Оплата</my-link>
                <my-link @click="$router.push('/contacts')">Контакты</my-link>
                <my-link @click="$router.push('/about')">О галерее</my-link>
            </div>
            <address>
                <a class="phone" :href="`tel:${location.phone}`">{{location.phone}}</a>
                <div class="location">{{location.address}}</div>
            </address>
        </div>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                location:{
                    phone: '+7 (495) 555-55-55',
                    address: 'г. Москва, ул. Расплетина, 24'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    footer {
        background: #ECEAEA;
        position:absolute;
        bottom:0;
        right:0;
        left:0;
        width:100%;
        padding:2.4rem 0;
    }

    address {
        display:flex;
        flex-wrap:wrap;
        font-style:normal;
        font-weight: 400;
        font-size: 1.4em;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:5.1rem;
    }
    .footerbar {
        display: flex;
        align-items:center;
        gap: 4.8rem;
        padding: 1rem 0;
        font-size: 1.4em;
        line-height: 2.1rem;
    }

    .phone {
        margin-right:5.1rem;
        position:relative;
        &:before {
            content: '';
            background: url("@/assets/img/phone.svg") center center / contain no-repeat;
            width: 1.4rem;
            height: 1.4rem;
            position: absolute;
            left: -1.5rem;
            top: 0.5rem;
        }
        &:hover {
            color: #766763;
            &:before {
                opacity:0.6;
            }
        }
    }

    .phone,
    .location {
        text-decoration: none;
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 150%;
        color: #343030;
    }
</style>