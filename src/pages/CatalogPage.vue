<template>
    <div class="container">
        <h1>Картины эпохи Возрождения</h1>
        <pictures-list 
            :pictures="pictures"
            @add="addToCart"
            />
    </div>
</template>

<script>
    import PicturesList from '@/components/PicturesList';

    export default {
        components: {
            PicturesList
        },
        data() {
            return {
                pictures: [
                    { id:1, sold:false, title:'«Рождение Венеры»', author:'Сандро Боттичелли', oldPrice:'2 000 000 $', price:'1 000 000 $', image: require('@/assets/img/pic1.jpg') },
                    { id:2, sold:false, title:'«Тайная вечеря»', author:'Леонардо да Винчи', oldPrice:'', price:'3 000 000 $', image:require('@/assets/img/pic2.jpg') },
                    { id:3, sold:false, title:'«Сотворение Адама»', author:'Микеланджело', oldPrice:'6 000 000 $', price:'5 000 000 $', image:require('@/assets/img/pic3.jpg') },
                    { id:4, sold:true, title:'«Урок анатомии»', author:'Рембрандт', oldPrice:'', price:'', image:require('@/assets/img/pic4.jpg') },
                ],
                count: 0,
                searchQuery:'',
            }
        },
        methods: {
            addToCart(picture){
                console.log(picture);
            }
        },
        computed: {
            searchPictures(){
                return this.picture.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>