import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                fontFamily: 'GlowSansSC, sans-serif',
                primary: '#5ccefa',
                secondary: '#f4a9b7',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
