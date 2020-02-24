<template>
    <button class="burger-button">
        <b-icon icon="list" scale="1.7"></b-icon>
    </button>
</template>

<script>
import { BIcon} from 'bootstrap-vue';

export default {
    name: 'BurgerButton',
    components: {
        BIcon
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars.scss';

.burger-button {
    border: none;
    padding: 15px;
    background-color: $button-bg-color;
}
</style>