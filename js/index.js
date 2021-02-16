let eo = document.getElementById('js-eo'),
		aeo= document.getElementById('js-aeo');

eo.addEventListener('keyup', transigu);

function transigu(e) {
	let eoValue = e.target.value.trim();

	// Substantivoj majuskle.
	eoValue = eoValue.replace(
		/([\wĉĝĥĵŝŭ])([\wĉĝĥĵŝŭ]*o)\b/g, 
		function(match, match1, match2) { 
			let replacement =  match1.toUpperCase() + match2;
			return replacement;
		}
	); 
	
	// Pronomoj.
	eoValue = eoValue.replace(/\bmi\b/g, 'mihi');
	eoValue = eoValue.replace(/\bci\b/g, 'tu');
	eoValue = eoValue.replace(/\bli\b/g, 'lùi');
	eoValue = eoValue.replace(/\bŝi\b/g, 'eshi');
	eoValue = eoValue.replace(/\bĝi\b/g, 'eghi');
	eoValue = eoValue.replace(/\bsi\b/g, 'sihi');
	eoValue = eoValue.replace(/\bni\b/g, 'nos');
	eoValue = eoValue.replace(/\bvi\b/g, 'vos');
	eoValue = eoValue.replace(/\bili\b/g, 'ilùi');
	
	// Verboj.
	eoValue = eoValue.replace(/i\b/g, 'ir');

	// Kazoj.
	eoValue = eoValue.replace(/al (.+)o\b/g, '$1od'); // Dativo.
	eoValue = eoValue.replace(/al (.+)oj\b/g, '$1oyd'); // Dativo pluralo.

	eoValue = eoValue.replace(/de (.+)o\b/g, '$1es'); // Genitivo.
	eoValue = eoValue.replace(/de (.+)oj\b/g, '$1eys'); // Genitivo pluralo.

	eoValue = eoValue.replace(/o\b/g, 'om'); // Nominativo.
	eoValue = eoValue.replace(/oj\b/g, 'oy'); // Pluralo.
	eoValue = eoValue.replace(/ojn\b/g, 'oyn'); // Akuzativo pluralo.




	eoValue = eoValue.replace(/e\b/g, 'œ'); // Adverbo.
	eoValue = eoValue.replace(/aŭ\b/g, 'ez'); 
	eoValue = eoValue.replace(/aû\b/g, 'ez'); 
	eoValue = eoValue.replace(/a\b/g, 'am');  // Adjektivo nominativo.
	eoValue = eoValue.replace(/aj\b/g, 'ay'); // Adjektivo pluralo.

	// Majuskle
	eoValue = eoValue.replace(/C/g, 'Tz');
	eoValue = eoValue.replace(/Ĉ/g, 'Ch');
	eoValue = eoValue.replace(/F/g, 'Ph');
	eoValue = eoValue.replace(/Ĝ/g, 'Gh');
	eoValue = eoValue.replace(/Ĥ/g, 'Qh');
	eoValue = eoValue.replace(/J/g, 'Y');
	eoValue = eoValue.replace(/Ĵ/g, 'Zh');
	eoValue = eoValue.replace(/K(i|e)/g, 'Qu$1');
	eoValue = eoValue.replace(/K/g, 'C');
	eoValue = eoValue.replace(/Ŝ/g, 'Sh');
	eoValue = eoValue.replace(/Ŭ/g, 'Ù');
	eoValue = eoValue.replace(/Û/g, 'Ù');
	eoValue = eoValue.replace(/V/g, 'W');
	// Minuskle.
	eoValue = eoValue.replace(/c/g, 'tz');
	eoValue = eoValue.replace(/ĉ/g, 'ch');
	eoValue = eoValue.replace(/f/g, 'ph');
	eoValue = eoValue.replace(/ĝ/g, 'gh');
	eoValue = eoValue.replace(/ĥ/g, 'qh');
	eoValue = eoValue.replace(/j/g, 'y');
	eoValue = eoValue.replace(/ĵ/g, 'zh');
	eoValue = eoValue.replace(/k(i|e)/g, 'qu$1');
	eoValue = eoValue.replace(/k/g, 'c');
	eoValue = eoValue.replace(/ŝ/g, 'sh');
	eoValue = eoValue.replace(/ŭ/g, 'ù ');
	eoValue = eoValue.replace(/û/g, 'ù ');
	eoValue = eoValue.replace(/v/g, 'w');

	aeo.value = eoValue;
}
