<template>
    <div class="abc" id="abc">
        <h1>父组件容器</h1>
        <slot></slot>
    </div>
</template>
<script>
    // import Child from './Child.vue'
    export default {
        name: 'parent',
        methods: {
            greet: function () {
                alert('parent component...');
            }
        }
    }

</script>
