<template>
    <div>
        <div id="scene">
            <div data-depth="0.2">My first Layer!</div>
            <div data-depth="0.6">My second Layer!</div>
        </div>  
    </div>
</template>
<script>
    import Parallax from 'parallax-js'

    export default {
        mounted(){
            var scene = $('#scene').get(0);
            var parallaxInstance = new Parallax(scene);
        }
    }
</script>
<style></style>