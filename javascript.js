/*STICKY MENU SCRIPT*/
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
			navbar.classList.add("enable_menu");
			navbar.classList.remove("hiddden_menu");
		}
	}
	lastScrollTop = scroll_top;
});

/*RESPONSIVE MENU SCRIPT*/
let mobile_nav = document.getElementById('mobile_navbar');
let responsive_nav = document.getElementById('responsive_nav');

mobile_nav.onmousedown = function(){
	if(mobile_nav.classList.contains("navbar_close")){
		mobile_nav.classList.add("navbar_open");
		mobile_nav.classList.remove("navbar_close");
		responsive_nav.style.display = "block";
	}
	else if(mobile_nav.classList.contains("navbar_open")){
		mobile_nav.classList.add("navbar_close");
		mobile_nav.classList.remove("navbar_open");
		responsive_nav.style.display = "none";
	}
};

	