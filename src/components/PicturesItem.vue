<template>
    <div class="card"
        :class="{ 'card-disable': picture.sold }">
            <img :src="picture.image" 
                :alt="picture.title + ' ' + picture.author" 
                :title="picture.title + ' ' + picture.author"
            >
            <h2>{{picture.title}}<br>
                {{picture.author}}</h2>
            <div class="card__payment" v-if="picture.sold == false">
                <div class="card__price">
                    <div class="card__price-old" v-if="picture.oldPrice != ''">{{picture.oldPrice}}</div>
                    <div class="card__price-new">{{picture.price}}</div>
                </div>
                <my-button
                    @click="addToCart">
                    Купить
                </my-button>
            </div>
            <div class="card__payment" v-else>
                <div class="card__soldPicture">Продана на аукционе</div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        picture: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart(e){
            localStorage.countCart = this.countCart;

            if (e.target.innerHTML != "В корзине"){
                e.target.classList.toggle('btn-addToCart');
                e.target.innerHTML = 'В корзине';
                //alert(localStorage.countCart);
                localStorage.countCart++;
                return;
            }
            e.target.classList.remove('btn-addToCart');
            e.target.innerHTML = 'Купить';
            localStorage.countCart--;
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    display:flex;
    flex-direction:column;
    text-decoration:none;
    width: 28em;
    border: 1px solid #E1E1E1;
    color: #343030;

    h2 {
        font-size: 1.8em;
        margin: 2rem 0;
        padding:0 2.4rem;
    }

    &__payment {
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:2.4rem;
    }
    &__price {
        &-old {
            text-decoration:line-through;
            color: #A0A0A0;
            font-weight: 300;
            font-size: 1.4em;
        }
        &-new {
            color: #343030;
            font-weight: 700;
            font-size: 1.6em;
        }
    }
    &__soldPicture {
        font-weight: 700;
        font-size: 1.6em;
        padding:2.4rem;
    }
    &-disable {
        opacity: 0.5;
    }
}

.spinner-ellipsis {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 20px;
    div {
        position: absolute;
        top: 3px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        &:nth-child(1) {
            left: 0;
            animation: spinner-ellipsis1 0.6s infinite;
        }
        &:nth-child(2) {
            left: 0;
            animation: spinner-ellipsis2 0.6s infinite;
        }
        &:nth-child(3) {
            left: 30px;
            animation: spinner-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 56px;
            animation: spinner-ellipsis3 0.6s infinite;
        }
    }
}

@keyframes spinner-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes spinner-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes spinner-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>