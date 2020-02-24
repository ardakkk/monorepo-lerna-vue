<template>
    <icon-button :class="'menu-list-item'" :iconName="iconName"/>
</template>

<script>
import IconButton from '../../../Buttons/IconButton/IconButton.vue';
export default {
    components: {
        IconButton,
    },
    props: {
        iconName: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-list-item {
    margin-right: 15px;
}
</style>