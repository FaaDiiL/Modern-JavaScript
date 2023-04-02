$('h1').css('color', 'red')
let myCompanyName = 'AlFa Company'

$('#company-name').text(myCompanyName)

// How to create event handler with jQuery
$('body').on('click', '#change-color-green', function () {
  $('#company-name').css('color', 'green')
})

// Step two
let tech = ['Microsoft', 'Apple', 'Google', 'Facebook', 'Amazon']
let tech1 = [
  {
    name: 'Microsoft',
    ceo: 'Martin',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXaKH9Q7gVGHSc2_IK3mOhpEaiULsMGxwRUe2nL4b&s'
  }
]
let health = ['Johnson & Johnson', 'Pfizer', 'Novartis', 'Merck', 'Roche']
let industry = ['General Electric', 'Boeing', 'Ford', 'Exxon Mobil', 'Chevron']

$('body').on('click', '#tech-btn', function () {
  $('#company-type').empty()
  drawCompanies(tech1)
})

$('body').on('click', '#health-btn', function () {
  $('#company-type').empty()
  drawCompanies(health)
})

$('body').on('click', '#industry-btn', function () {
  $('#company-type').empty()
  drawCompanies(industry)
})

function drawCompanies (listOfCompanies) {
  listOfCompanies.map(company => {
    let htmlElement = `
      <div class="company-card">
            <h3 id="company-name">${company.name}</h3>
            <img src="${company.image}" alt="company image">
            <h4 id="company-ceo">This is the ceo: ${company.ceo}</h4>
            <p>This is my company description.</p>
            <button id="change-color-green" data-title-color="green">Green</button>
      </div>
    `
    $('#company-type').append(htmlElement)
  })
}


let html = `
  <div className="company-card">
    <h3 id="company-name">min variable</h3>
    <h4 id="company-ceo">This is the ceo: TheCeo</h4>
    <p>This is my company description.</p>
    <button id="change-color-green" data-title-color="green">
      Green
    </button>
  </div>
`