<template>
    <div class="box_base">
        <div class="title">
            <slot>1-slot</slot>
        </div>
        <div>
            <div class="box_slot">
                <slot>2-slot</slot>
                <slot>3-slot</slot>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .box_base{
        border: 1px solid #cccccc;
        margin-bottom: 20px;
        padding: 20px;
        position: relative;
        .title{
            position: absolute;
            font-weight: bold;
            top:-10px;
            left:10px;
            background-color: #ffffff;
            padding: 0px 5px;
        }
        .box_slot{
            font-size: 12px;
            position: absolute;
            top: -10px;
            right: 10px;
            background-color: #ffffff;
            padding: 0px 5px;
        }
    }
</style>