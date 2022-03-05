const getDays = (month, year) => {
    let days = []
    const date = new Date(year, month, 1)
    while (date.getMonth() === month) {
        days = [...days, new Date(year, month, date.getDate())]
        date.setDate(date.getDate() + 1)
    }
    return days
}

const convertToLocaleString = (date, locale = 'vi-VN') => {
    return date.toLocaleString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export {
    getDays,
    convertToLocaleString
}