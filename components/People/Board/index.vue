<template>
  <article class="board-container">
    <img class="logo" src="/board.png" alt="Logo Star Wars" />

    <div class="board-content">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.board-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 40px;
  padding-right: 0px;
  gap: 26px;
}
.board-container::before {
  position: absolute;
  z-index: 1;
  display: flex;
  content: "";
  width: 85%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 24px;
  background-color: var(--highlight);
  opacity: 0.9;
}
.board-container .logo {
  position: relative;
  z-index: 2;
  display: block;
  width: 37%;
  max-width: 321px;
}
.board-container .board-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 73%;
  padding: 46px 40px;
  border-radius: 16px;
  background-color: #151515;
}
</style>
