window.addEventListener('DOMContentLoaded', () => {
    const versions = ['node', 'chrome', 'electron']
    const systemInfos = ['arch', 'lang', 'platform']
    const memoryInfos = ['total', 'free', 'swapTotal', 'swapFree']

    versions.forEach(version => {
        appendElementValueById({
            elementId: `version-${version}`,
            value: process.versions[version]
        })
    })

    systemInfos.forEach(info => {
        appendElementValueById({
            elementId: `system-info-${info}`,
            value: info !== 'lang' ? process[info] : process.env[info.toUpperCase()]
        })
    })

    memoryInfos.forEach(info => {
        appendElementValueById({
            elementId: `system-memory-${info}`,
            value: `${process.getSystemMemoryInfo()[info]} KB`
        })
    })

    function appendElementValueById ({ elementId, value }) {
        const element = document.getElementById(elementId)

        element.innerHTML = `${element.innerHTML} ${value}`
    }
})