var trayButton = document.querySelector(`aside button:first-child`)

trayButton.addEventListener(`click`, toggle)
function toggle(e)
{
    document.querySelector(`.tray`).classList.toggle(`hide`)

}

var buttons = Array.from(document.querySelectorAll(`nav button`))

for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener(`click`, butts)
}

function butts(e)
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].classList.remove(`active`);
    }
    e.target.classList.add(`active`)
    document.querySelector(`#breadcrumbs`).InnerHTML= `<a href="#">${e.target.InnerText}</a>`
}