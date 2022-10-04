<template>
    <my-input v-model="search" />
    <div class="cardList" v-if="pictures.length > 0">
    <transition-group name="card-list">
        <pictures-item 
            v-for="(picture) in searchPictures"  
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
    data(){
        return {
            search:''
        }
    },
    props: {
        pictures: {
            type: Array,
            required: true
        } 
    },
    computed: {
        searchPictures(){
            return this.pictures.filter(picture => {
                return picture.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.search {
    position:absolute; 
    top:-13rem; 
    right:1.5rem;
}

.input {
    height: 4.8rem;
    width:29.4rem;
    font-size: 1.4rem;
    padding: 1.3rem 1.6rem;
    color: #343030;
    outline:none;
    border: 1px solid #E1E1E1;
    &:focus {
        border: 1px solid #B5B5B5;
    }
    &::placeholder {
        color: #9F9F9F;
    }
}

.cardList {
    display:flex;
    flex-wrap:wrap;
    gap: 2.2rem;
    margin-top:3.9rem;
}
.card-list-item {
    display: inline-block;
    margin-right: 1rem;
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