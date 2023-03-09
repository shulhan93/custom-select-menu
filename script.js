const wrapper = document.querySelector('.wrapper')
const selectBtn = wrapper.querySelector('.select-btn')
const searchInp = wrapper.querySelector('input')
const options = wrapper.querySelector('.options')
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Chad",
    "Chile",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Martinique",
    "Mauritania",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
]

function addCountry(selectedCountry) {
    options.innerHTML = ""
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? 'selected' : ''
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML('beforeend', li)
    })
}

addCountry()

function updateName(selectedLi) {

    searchInp.value = ""
    addCountry(selectedLi.innerText)
    wrapper.classList.remove('active')
    selectBtn.firstElementChild.innerText = selectedLi.innerText
}

searchInp.addEventListener('keyup', () => {
    let arr = []
    let searchVal = searchInp.value.toLocaleLowerCase()
    arr = countries.filter(data => {
        return data.toLocaleLowerCase().startsWith(searchVal)
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join('')
    options.innerHTML = arr ? arr : `<p>Oops!!!</p>`
})

selectBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active')
})