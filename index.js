 /* eslint-disable import/newline-after-import */
    ;(async () => {
    console.log(`commercetools project started`)
    const startDate = new Date()
    try {
        const stats = []
        const endDate = new Date()
        stats.executionTimeInSeconds = Math.floor(
            Math.abs(endDate - startDate) / 1000
        )
        console.log(stats, `commercetools project completed`)
    } catch (e) {
        console.error(
        e,
        `Error while executing commercetools project. Process terminated.`
    )
        process.exitCode = 1
    }
})()
