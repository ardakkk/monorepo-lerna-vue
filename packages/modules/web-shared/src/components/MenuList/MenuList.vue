<template>
    <div class="menu-list">
        <menu-list-item v-for="icon in iconList" :iconName="icon" :key="icon"/>
    </div>
</template>

<script type="text/javascript">
import MenuListItem from './components/MenuListItem/MenuListItem.vue';

const iconList = [
   'search',
   'heart',
   'bucket',
   'person-fill'
];

export default {
    components: {
        MenuListItem,
    },
    data() {
        return {
            iconList
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-list {
    display: flex;
    height: inherit;
}
</style>