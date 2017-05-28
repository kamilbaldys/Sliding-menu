var button = document.getElementById("ham");
var page_menu = document.getElementById("menu");

button.addEventListener("click", function()
{
    if(page_menu.classList.contains("added-class"))
        {
            page_menu.classList.remove("added-class");
        }
    else
        {
            page_menu.classList.add("added-class");
        }
},false);

$(document).mouseup(function(e) 
{
    var container = $("#menu-container");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(event.target) && container.has(event.target).length === 0) 
    {
        page_menu.classList.remove('added-class');
    }
});