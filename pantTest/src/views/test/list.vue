<template>
  <div>
    <!-- <Table :data="tableData" :columns="tableColumns"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableColumns: [
        {
          title: "ID",
          key: ""
        },
        {
          title: "标题",
          key: ""
        },
        {
          title: "内容",
          key: ""
        }
      ]
    };
  },
  methods: {
    changePage() {}
  }
};
</script>

<style lang="stylus" scoped>
</style>

