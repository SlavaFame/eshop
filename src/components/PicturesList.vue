<template>
    <div class="cardList" v-if="pictures.length > 0">
    <transition-group name="card-list">
        <pictures-item 
            v-for="(picture) in pictures"  
            :key="picture" 
            :picture="picture"
        />
    </transition-group>
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
    props: {
        pictures: {
            type: Array,
            required: true
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