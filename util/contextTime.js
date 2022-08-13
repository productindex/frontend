const { isYesterday, isToday, isTomorrow, format} = require('date-fns') 

const contextTime = (date) => {
    if (!date) return
    const convertedDate = new Date(date)
    const time = convertedDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    if (isYesterday(convertedDate)) return `Yesterday at ${time}`
    if (isToday(convertedDate)) return `Today at ${time}`
    if (isTomorrow(convertedDate)) return `Tomorrow at ${time}`
    return format(convertedDate, 'MMM do, yyyy')
}

module.exports = contextTime