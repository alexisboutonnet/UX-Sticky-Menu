let navbar = document.getElementById('navbar');
let header_nav_section = document.getElementById('header_nav_section');
let main_content = document.getElementById('main_content');


let offset_position = navbar.offsetTop;
let lastScrollTop = 0;

window.onload = function () {
    header_height = header_nav_section.clientHeight+"px";
    main_content.style.paddingTop = header_height;
}

window.addEventListener("scroll", function(){
  let scroll_top = document.getElementsByTagName('html')[0].scrollTop;
	if(lastScrollTop > 10){
		if (scroll_top > lastScrollTop){			
			navbar.classList.add("hidden_menu");
            navbar.classList.remove("enable_menu");
		} else {
			navbar.classList.remove("hiddden_menu");
			navbar.classList.add("enable_menu");
		}
	}
	lastScrollTop = scroll_top;
});
	