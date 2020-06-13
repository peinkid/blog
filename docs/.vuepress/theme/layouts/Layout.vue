<template>
  <div>
    <ParentLayout>
    </ParentLayout>
    <Test />
    <!-- <Audio /> -->
    <component
      ref="audioData"
      v-if="audioCom"
      :is="audioCom"
    ></component>
    <vue-particles
      clickMode="repulse"
      :particlesNumber="65"
      :particleSize="4"
      :linesWidth="2"
      color="#88c1ea"
      linesColor="#EA2027"
      class="bgvue"
    ></vue-particles>
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Test from '../components/Test.vue'
// import Audio from '../components/Audio.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout,
    Test
  },
  data() {
    return {
      audioCom: null
    }
  },
  mounted() {
    import('../components/Audio.vue').then(module => {
      this.audioCom = module.default
    })
  }
}
</script>