<template>
    <div class="cardList" v-if="pictures.length > 0">
    <transition-group name="card-list">
        <pictures-item 
            v-for="(picture) in pictures"  
            :key="picture" 
            :picture="picture"
        />
    </transition-group>
    <div>Товаров в корзине: ({{ counter }})</div>
    </div>
    <div class="cardList" v-else style="color:red">
        Картин пока нет
    </div>
</template>

<script>
import PicturesItem from "@/components/PicturesItem";

export default {
    components: {
        PicturesItem
    },
    data() {
        return {
            pictures: [
                { id:1, sold:false, title: '«Рождение Венеры»', author:'Сандро Боттичелли', oldPrice:'2 000 000 $', price:'1 000 000 $', image: require('@/assets/img/pic1.jpg') },
                { id:2, sold:false, title:'«Тайная вечеря»', author:'Леонардо да Винчи', oldPrice:'', price:'3 000 000 $', image:require('@/assets/img/pic2.jpg') },
                { id:3, sold:false, title:'«Сотворение Адама»', author:'Микеланджело', oldPrice:'6 000 000 $', price:'5 000 000 $', image:require('@/assets/img/pic3.jpg') },
                { id:4, sold:true, title:'«Урок анатомии»', author:'Рембрандт', oldPrice:'', price:'', image:require('@/assets/img/pic4.jpg') },
            ],
            countCart:0
        }
    }
}
</script>

<style lang="scss" scoped>
.cardList {
    display:flex;
    flex-wrap:wrap;
    gap:2.2rem;
    margin-top:3.9rem;
}

.card-list-item {
  display: inline-block;
  margin-right: 10px;
}
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.4s ease;
}
.card-list-enter-from, 
.card-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.card-list-move {
  transition: transform 0.4s ease;
}
</style>