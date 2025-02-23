// Styles
import './VApp.sass'

// Mixins
import Themeable from '../../mixins/themeable'

// Utilities
import mixins from '../../util/mixins'

/* @vue/component */
export default mixins(
  Themeable
).extend({
  name: 'v-app',

  props: {
    dark: {
      type: Boolean,
      default: undefined,
    },
    id: {
      type: String,
      default: 'app',
    },
    light: {
      type: Boolean,
      default: undefined,
    },
  },

  computed: {
    isDark (): boolean {
      return this.$vuetify.theme.dark
    },
  },

  render (h) {
    const wrapper = h('div', { staticClass: 'v-application--wrap' }, this.$slots.default)

    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl,
        ...this.themeClasses,
      },
      attrs: { 'data-app': true },
      domProps: { id: this.id },
    }, [wrapper])
  },
})
