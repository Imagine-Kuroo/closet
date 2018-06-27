<template>
    <label>
        {{str}}
        <input type="text" v-bind="$attrs"/>
    </label>
</template>
<script>
    export default {
        props:['str'],
        }
</script>