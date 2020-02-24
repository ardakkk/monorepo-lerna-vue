<template>
  <div class="home">
    <section class="main-wallpage">
      <div class="wallpage">
          <div class="container">
            <div class="row">
              <div class="wallpage__content">
                <h1 class="wallpage__title">Walk the walk.</h1>
                <p class="wallpage__description">
                  A fashion can become the prevailing style in behaviour or manifest the newest creations of designers, 
                  technologists, engineers, and design managers.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  .main-wallpage {
    height: 400px;
    background: url('../assets/img/full_width_banner.jpg') no-repeat bottom center;
    background-size: cover;
    color: #fff;
  }

  .wallpage {
    display: flex;
    flex-direction: column;

    &__title {
      padding-top: 45px;
      text-align: left;
    }
    
    &__description {
      max-width: 340px;
      text-align: left;
    }
  }
</style>
