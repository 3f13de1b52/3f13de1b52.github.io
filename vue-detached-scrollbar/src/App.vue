<template>
    <div>
        <h3>Gallery</h3>
        <gallery>
            <div class="gallery">
                <div class="gallery-item" v-for="stuff in loop">
                    <img :src="image" alt="">
                </div>
            </div>
        </gallery>
    </div>
</template>

<script>
    import {Gallery} from 'vue-detached-scrollbar';

    export default {
        data() {
            return{
                loop: 40,
                image: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg',
            };
        },
        components: {
            Gallery,
        },
    }
</script>