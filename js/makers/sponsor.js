function makeSponsor(sponsor){
    if(!sponsor || !sponsor.name) return ''
    console.log(sponsor)
    return`
        <p class="font-sans center mb1 text-grey ">sponsor</p>
        <img src=${sponsor.logo_url} alt="${sponsor.name}"></img>
    `
}

export default makeSponsor