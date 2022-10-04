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
                <input type="checkbox"
                    class="custom-checkbox"
                    :id="picture.id"
                    :value="picture.id"
                    v-model="status"
                    @click="addToCart"
                >
                <label class="custom-label"
                    :for="picture.id"
                    v-if="status === true">
                    В корзине
                </label>
                <label class="custom-label"
                    :for="picture.id" 
                    v-else>
                    Купить
                    <!--
                    <div class="spinner-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>-->
                </label>
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

    data(){
        return{
            quantity: 0,
            status: ''
        }
    },

    mounted(){
        if(localStorage.status){
            this.status = localStorage.status;
        }
        if(localStorage.quantity){
            this.quantity = localStorage.quantity;
        }
    },

    methods: {
        addToCart(target){
            localStorage.status = this.status;
            localStorage.quantity = this.quantity;

            if(this.status !== true){
                target.innerHTML = "Загрузка...";
                return;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    &+label{
        display: inline-flex;
        align-items: center;
        user-select: none;
        font-size: 1.4rem;
        &:before {
            content: '';
            display: inline-block;
            width: 1.6rem;
            height: 1.3rem;
            flex-shrink: 0;
            flex-grow: 0;
            margin-right: 0.72em;
        }
    }
    &:checked {
        &+label{
            &:before{
                background: url("@/assets/img/in_cart.svg") center center / contain no-repeat;
            }
        }
    }
}

.custom-label {
    font-size: 1.4rem;
    height: 4.8rem;
    width: 11.2rem;
    padding: 1.3rem 0.3rem;
    background-color: #382E2B;
    border: 2px solid #382E2B;
    color: white;
    cursor: pointer;
    text-align: center;
}

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
            left: 23px;
            animation: spinner-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 50px;
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