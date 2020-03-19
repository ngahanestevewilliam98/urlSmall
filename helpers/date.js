function parse(input){
    let date = new Date(input)
    let dayTitle = date.getDay()
    if(dayTitle === 1) dayTitle = `Lun`
    else if(dayTitle === 2) dayTitle = `Mar`
    else if(dayTitle === 3) dayTitle = `Mer`
    else if(dayTitle === 4) dayTitle = `Jeu`
    else if(dayTitle === 5) dayTitle = `Ven`
    else if(dayTitle === 6) dayTitle = `Sam`
    else dayTitle = `Dim`

    let dayNumber = date.getDate()
    if(dayNumber < 10) dayNumber = `0${dayNumber}`
    

    let month = date.getMonth()+1
    if(month < 10) month = `0${month}`

    let hour = date.getHours()-1
    if(hour < 10) hour = `0${hour}`

    let minutes = date.getMinutes()
    if(minutes < 10) minutes = `0${minutes}`

    return `${dayTitle} ${dayNumber}/${month}/${date.getFullYear()} à ${hour}:${minutes}`
}

module.exports = {
    parse: parse
};