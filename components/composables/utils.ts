export const useDateFormat = (date: Date) => {
    if (!date) return 'Today'
    if (date.getMonth() === (new Date()).getMonth()) return 'Today'

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const month = months[date.getMonth()]
    const monthDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return monthDate + '. ' + month + ' ' + date.getFullYear()
}

export const useImage = (pathName: string) => {
    const assets = import.meta.glob('~/assets/images/*',{
        eager: true, import: 'default'
    })
    return assets['/assets/images/'+pathName]
}