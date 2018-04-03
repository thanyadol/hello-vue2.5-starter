<template>
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        &nbsp;
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">^</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" :to="prev"> { prev } </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="next"> { next } </router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'FootBar',
  props: ['next', 'prev']
}
</script>
<style scoped>
nav
{
    z-index: -1;
    margin: 0 40px 25px 40px;
}
</style>
