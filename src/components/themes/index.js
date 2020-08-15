const themes = require.context(
    '.',
    true,
    /\.vue$/
)

const components = {}

themes.keys().forEach(path => {
    const parts = path.split('/')
    const component = parts.pop().replace(/\.vue$/, '')
    const theme = parts.pop()

    components[theme] = components[theme] || {}
    components[theme][component] = themes(path).default
})

export default components
