<template>
  <el-table :data="tableData">
      <el-table-column v-for="(item,ind) in tableHead" :key="ind" :prop="item[key.id]" :label="item[key.label]">
            <template slot-scope="scope">
                <slot name="parent" :row="scope.row" :col="scope.col"></slot>
                <el-table-column v-for="(itemChild,indChild) in item.children" :key="indChild" :prop="itemChild[key.id]" :label="itemChild[key.label]">
                    <template slot-scope="scopeC">
                        <slot name="child" :row="scopeC.row" :col="scopeC.col"></slot>
                    </template>
                </el-table-column>
            </template>
      </el-table-column>
  </el-table>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: []
        },
        tableHead: {
            type: Array,
            default: []
        },
        key: {
            type: Object,
            default: {
                id: 'id',
                label: 'name'
            }
        }
    }
}
</script>

