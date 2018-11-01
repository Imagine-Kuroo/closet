<template>
  <div>
    <Table :data="tableData" :columns="tableColumns" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableColumns: []
    };
  }
};
</script>
<style lang="stylus" scoped>
</style>

