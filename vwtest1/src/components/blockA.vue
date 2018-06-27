<template>
    <div class="box_blockA box_base">
        <div class="title">son A </div>
        <div>
            <div class="box_slot">
                父亲寄语：
                <slot>一个slot</slot>
            </div>
            <div>
                <b>与爹同步：</b><input v-model="str" type="text"/>
                <div class="box_tips">
                    直接改动圣旨，会被镇压哦（控制台报错）。
                </div>
            </div>
            <div>
                <b>处理后：</b><input :value="dark_guard" type="text"/>
                <div class="box_tips">
                    只获取一次。处理后在改动，就和父亲没什么关系。
                </div>
            </div>
            <div>
                <b>一心要篡权：</b>
                <input v-model="ambitious" type="text"/>
                <button @click="rebellion">篡权</button>
                <div class="box_tips">
                    <p>统一用kebab-case类型的事件名，然后this.$emit触发。</p>
                    <p>父亲的眼线：v-on:urusp-Power="beCompelled"</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['str'],
        computed: {
            normalizedSize: function () {
                return this.str.trim().toLowerCase()
            }
        },
        data(){
            return {
                dark_guard   :   this.str,
                ambitious   :   '',
            }
        },
        mounted(){
            console.log('this.$parent>>>>>>>',this.$parent);
            console.log('this.$root>>>>>>>',this.$root);
        },
        methods:{
            // 发动暴乱
            rebellion(){
                console.log('A>>>',this.ambitious);
                this.$emit('urusp-Power', this.ambitious);
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
    .box_tips{
        font-size: 12px;
        color: #fa9999;
        line-height: 1.5;
        margin-bottom: 10px;
        p{
            margin: 0;
        }
    }
</style>