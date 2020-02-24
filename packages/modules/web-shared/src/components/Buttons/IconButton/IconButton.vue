<template>
    <button class="icon-button">
        <b-icon :icon="iconName" scale="1.7"/>
    </button>
</template>

<script>
import { BIcon } from 'bootstrap-vue';

export default {
    components: {
        BIcon
    },
    props: {
        iconName: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars.scss';

.icon-button {
    border: none;
    transition: all .3s ease;
    padding: 15px;

    &:hover {
        background: $button-bg-color;
    }
}
</style>