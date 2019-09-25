<template>
  <el-table :data="tableData">
      <el-table-column v-for="(item,ind) in tableHead" :key="ind" :prop="item[key.id]" :label="item[key.label]" >
            <template slot-scope="scope">
                <slot name="parent" :data="{row:scope.row,col:item}"></slot>
                <el-table-column v-for="(itemChild,indChild) in item.children" :key="indChild" :prop="itemChild[key.id]" :label="itemChild[key.label]">
                    <template slot-scope="scopeC">
                        <slot name="child" :data="{row:scopeC.row,col:item}"></slot>
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

