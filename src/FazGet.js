const fazGet = (url) => {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

export const listas = (url) => {
    let data = fazGet(url)
    let lista = JSON.parse(data)
    console.log('Carregou lista')
    return lista
}