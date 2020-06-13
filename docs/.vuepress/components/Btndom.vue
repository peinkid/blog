<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    let box = document.querySelector('.home .hero .action-button')
    let ripple = document.createElement('span')
    ripple.classList.add('ripple')
    box.appendChild(ripple)
    box.onmouseenter = function(event) {
      let ripple = box.querySelector('.ripple')
      ripple.classList.add('animation')
      ripple.style.width = this.offsetWidth + 'px'
      ripple.style.height = this.offsetWidth + 'px'
      ripple.style.top = -(this.offsetHeight - event.offsetY) + 'px'
      ripple.style.left = -(this.offsetWidth / 2 - event.offsetX) + 'px'
      setTimeout(() => {
        ripple.classList.remove('animation')
      }, 500)
    }
  }
}
</script>
<style lang='' scoped>
</style>