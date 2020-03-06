<template>
    <button class="simple-button">
        <slot/>
    </button>
</template>

<script type="text/javascript">
export default {
    name: 'SimpleButton'
}
</script>

<style lang="scss" scoped>
    .simple-button {
        width: 120px;
        height: 36px;
        background: #2a81dd;
        color: white;
        font-size: 14px;
        font-weight: bold;
        border-radius: 3px;
        outline: none;
    }
</style>