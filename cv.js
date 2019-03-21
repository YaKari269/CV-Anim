//Chargement de la page
$(window).load(function() {
	$(".loader").fadeOut('1000');
});

window.onload = function() {init()};
function init(){
	var competence = document.getElementById('competence'),
		ligne = document.getElementById('ligne'),
		reseau = document.getElementById('reseau'),
		langage = document.getElementById('langage'),
		langageR = document.getElementById('langageR'),
		sgbdr = document.getElementById('SGBDR'),
		plateforme = document.getElementById('plateforme'),
		dev = document.getElementById('dev'),
		graph = document.getElementById('graph'),
		bureau = document.getElementById('bureau'),
		systeme = document.getElementById('systeme'),
		collabo = document.getElementById('collabo')
		langue = document.getElementById('langue'),
		experience = document.getElementById('experience'),
		ligne2 = document.getElementById('ligne2'),
		formation = document.getElementById('formation'),
		ligne3 = document.getElementById('ligne3'),
		f2016 = document.getElementById('f2016'),
		opt = document.getElementById('option'),
		f2015 = document.getElementById('f2015'),
		opt2 = document.getElementById('option2'),
		f2013 = document.getElementById('f2013'),
		opt3 = document.getElementById('option3'),
		contact = document.getElementById('contact');

	// GSAP, instancier une timeline

	var t = new TimelineLite();
	t.from(competence, .75, {left: -130})
		.from(ligne,.5,{width:0})
		.from(reseau, .75, {left: -600, ease: Back.easeOut.config(1)})
		.from(langage, .75, {left: -600, ease: Back.easeOut.config(1)})
		.from(langageR, .75, {left: -220, ease: Back.easeOut.config(1)})
		.from(sgbdr, .75, {left: -125, ease: Back.easeOut.config(1)})
		.from(plateforme, .75, {left: -445, ease: Back.easeOut.config(1)})
		.from(dev, .75, {left: -650,ease: Back.easeOut.config(1)})
		.from(graph, .75, {left: -415, ease: Back.easeOut.config(1)})
		.from(bureau, .75, {left: -300, ease: Back.easeOut.config(1)})
		.from(systeme, .75, {left: -300, ease: Back.easeOut.config(1)})
		.from(collabo, .75, {left: -330, ease: Back.easeOut.config(1)})
		.from(langue, .75, {left: -330, ease: Back.easeOut.config(1)})
		.to(".lap", .5, {opacity:0, delay:2})
		.from(experience, .75, {left: -235})
		.from(ligne2,.5,{width:0})
		.from(".lap2", .5, {opacity:0, delay:2})
		.to(".lap2, #experience, #ligne2", .5, {opacity:0, delay:2})
		.from(formation, .75, {left: -235})
		.from(ligne3,.5,{width:0})
		.from("#f2013, #option3", .75,{top: -500, ease: Back.easeOut.config(1)})
		.from("#f2015, #option2", .75,{top: -500, ease: Back.easeOut.config(1)})
		.from("#f2016, #option", .75,{top: -500, ease: Back.easeOut.config(1)})
		.to(".lap3, #formation, #ligne3", .5, {opacity:0, delay:2})
		.from(act, .75, {left: -235})
		.from(ligne4,.5,{width:0})
		.from(diver, .75, {left: -600, ease: Back.easeOut.config(1)})
		.to(".lap4, #act, #ligne4", .5, {opacity:0, delay:2})
		.from(contact, .75, {top: -500,ease: Elastic.easeOut})
		.to(contact, 2, {backgroundColor:"#dadada", padding:20, borderRadius:26});
	
	back.onclick = goBack;
	function goBack(){
		t.reverse();
	}

	pause.onclick = pauser;
	function pauser(){
		t.pause();
	}

	play.onclick = demarrer;
	function demarrer(){
		t.play();
	}
}