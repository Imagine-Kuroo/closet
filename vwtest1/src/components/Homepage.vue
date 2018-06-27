<template>
    <div>
        <div class="box_parent box_base">
            <div class="title">Daddy</div>
            <div>
                给儿子A的：<input type="text" v-model="edict">
            </div>
            <div>
                来自儿子A：<input type="text" v-model="sonA">
            </div>

            <inputBase 
                v-bind:str="edict"
                label="名称" 
                placeholder="请填写内容">
            </inputBase>

        </div>
        <blockA v-bind:str="edict" v-on:urusp-Power="beCompelled">
            儿子A是个大傻子系列
        </blockA>
        <blockB>
            怎么会有儿子B呢系列
        </blockB>
    </div>
</template>
<script>
    import blockA from './blockA.vue';
    import blockB from './blockB.vue';
    import inputBase from './inputCom.vue';
    import deemo from './../mixins/deemoMixin.vue';

    export default {
        data(){
            return {
                edict       :   '爹发话了',
                sonA        :   '',
                inputVal    :   '高级',
            }
        },
        mixins:[deemo],
        components:{
            blockA,
            blockB,
            inputBase,
        },
        mounted(){

        },
        methods :   {
            beCompelled(message){
                this.sonA = message;
            }
        }
    }
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