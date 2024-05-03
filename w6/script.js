//reference to the button that opens and closes the tray
var trayButton = document.querySelector(`aside button:first-child`)

//opens and closes the tray when the button is clicked
trayButton.addEventListener(`click`, toggle)
function toggle(e)
{
   document.querySelector(`.tray`).classList.toggle(`hide`)
}

const activeTabName = document.querySelector(`#active-tab`)

//Tab buttons are stored in an array
var tabs = document.querySelectorAll(`.tab`)
let activeTab = tabs[0]
activeTab.classList.add(`active`)
activeTabName.innerHTML = activeTab.textContent

//Adds event listeners to all buttons in the array
for(let i=0; i<tabs.length; i++)
{
   tabs[i].addEventListener(`click`, butts);
}

//removes the active class from all buttons and adds it to the one that was clicked
//Adds tab name to the breadcrumbs
function butts(e)
{
    for(let i=0; i<tabs.length; i++)
    {
        tabs[i].classList.remove(`active`);
    }

    e.target.classList.add(`active`)

    activeTab = e.target
    activeTabName.innerHTML = activeTab.textContent
}
