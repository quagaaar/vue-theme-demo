import Vue from 'vue'

const LINK_ID = 'theme_stylesheet'
const BASE_URL = `${Vue.config.publicPath || '/'}styles/themes/`

/**
 * Updates the stylesheet link tag in the head.
 *
 * @param theme The name of the theme folder.
 */
function updateStylesheet(theme) {
    const head = document.querySelector('head')
    const link = document.getElementById(LINK_ID)
    const stylesheetUrl = `${BASE_URL}${theme}/style.css`

    if (link) {
        link.setAttribute('href', stylesheetUrl)
        return;
    }

    head.append(createLink(stylesheetUrl))
}

function createLink(stylesheetUrl) {
    const link = document.createElement('link')
    link.setAttribute('id', LINK_ID)
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', stylesheetUrl)
    return link
}

export { updateStylesheet }
