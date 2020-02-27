<template>
    <header class="header">
        <div class="container">
            <div class="row header__row">
                <div class="col-md-4 header__burger_button"><burger-button/></div>
                <div class="col-lg-4 header__logo"><logo/></div>
                <div class="col-lg-4 header__menu"><menu-list/></div>
                <div>test</div>
            </div>
        </div>
    </header>
</template>

<script type="text/javascript">
import BurgerButton from '../../components/Buttons/BurgerButton/BurgerButton.vue';
import Logo from '../../components/Logo/Logo.vue';
import MenuList from '../../components/MenuList/MenuList.vue';

export default {
    name: 'Header',
    components: {
        BurgerButton,
        Logo,
        MenuList,
    }
}
</script>


<style lang="scss" scoped>
    .header {
        &__burger_button,
        &__logo,
        &__menu {
            height: 54px;
            display: flex;
            align-items: center;
        }

        &__burger_button {
            display: flex;
            justify-content: flex-start;
        }

        &__logo {
            justify-content: center;
        }

        &__menu {
            justify-content: flex-end;
        }
    }
</style>