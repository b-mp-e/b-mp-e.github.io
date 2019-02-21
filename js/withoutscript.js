//Modal Declarations
var modal_about = document.getElementById('about');
var modal_published = document.getElementById('published');
var modal_avocation = document.getElementById('avocation');
var modal_contact = document.getElementById('contact');

//Click Out of Modal Function
window.onclick = function(event)
{
	if (event.target == modal_about)
	{
		modal_about.style.display = "none";
	} else if (event.target == modal_published)
	{
		modal_published.style.display = "none";
	} else if (event.target == modal_avocation)
	{
		modal_avocation.style.display = "none";
	} else if (event.target == modal_contact) 
	{
		modal_contact.style.display = "none";
	} else 
	{
		//well, this is a problem
	}
}

//WithoutScript->SansScript->js script->Me Thinking I'm Funny