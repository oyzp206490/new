<template>
  <div>
    <Card dis-hover>
      <Row :gutter="16">
        <Col span="12">
          <Input
            v-model="value"
            placeholder="输入关键字搜索"
            style="width: 300px"
          />
          <Button type="success" icon="ios-search">搜索</Button>
          <Button type="warning" icon="md-refresh">刷新</Button>
          <Button type="primary" icon="md-add">新增</Button>
        </Col>
        <Col span="12">
          <ButtonGroup class="btn">
            <Button icon="ios-search" style="width: 46px"></Button>
            <Button icon="md-refresh" style="width: 46px"></Button>
          </ButtonGroup>
        </Col>
      </Row>
      <div style="margin-top: 20px">
        <Card dis-hover>
          <p slot="title">菜单管理</p>
          <Table
            row-key="id"
            :columns="columns16"
            :data="data12"
            border
          ></Table>
        </Card>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      columns16: [
        {
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "Name",
          key: "name",
          tree: true,
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },

                  on: {
                    click: () => {
                      this.show(params.index);
                    },
                  },
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      data12: [
        {
          id: "100",
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
        },
        {
          id: "101",
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          children: [
            {
              id: "10100",
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
            },
            {
              id: "10101",
              name: "Joe Blackn",
              age: 30,
              address: "Sydney No. 1 Lake Park",
            },
            {
              id: "10102",
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              children: [
                {
                  id: "1010200",
                  name: "Jim Green",
                  age: 24,
                  address: "New York No. 1 Lake Park",
                },
              ],
            },
          ],
        },
        {
          id: "102",
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
        },
        {
          id: "103",
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.btn {
  float: right;
}
</style>