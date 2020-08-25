function makeSponsor(sponsor){
    if(!sponsor || !sponsor.name) return ''
    // console.log(sponsor)
    return`<img src=${sponsor.logo_url} alt="${sponsor.name}"></img>`
}

export default makeSponsor