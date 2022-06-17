<template>
  <div class="index-page">
    <div class="welcome-msg">Welcome to the Pokemon world!</div>
    <div class="page-method-section">
      <div class="title">Please select the page method:</div>
      <div class="link-btn-section">
        <LinkToOtherPage 
          linkBtnMsg="Pagination Style" 
          targetPageurl="/pokemon-pagination">
        </LinkToOtherPage> 
        <LinkToOtherPage 
          linkBtnMsg="Load More style" 
          targetPageurl="/pokemon-list">
        </LinkToOtherPage>
      </div>
    </div>
  </div>
</template>

<script>
import LinkToOtherPage from './LinkToOtherPage';
export default {
  name: 'IndexPage',
  props: {
    msg: String
  },
  components: {
    LinkToOtherPage
  }
}
</script>

<style lang="scss" scoped>
.welcome-msg {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
}
.page-method-section {
  .title {
    font-size: 20px;
  }

  .link-btn-section {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    margin-top: 30px;

    .link-btn {
      box-sizing: border-box;
      min-width: 20%;
      padding: 10px 20px;
      background-color: black;
      color: white;
      border: 1px solid black;
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
}
</style>
