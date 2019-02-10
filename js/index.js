function transigu() {
	let eo = document.getElementById('eo').value;
	let aeo = eo;

	// Substantivoj majuskle.
	aeo = aeo.replace(
		/([\wĉĝĥĵŝŭ])([\wĉĝĥĵŝŭ]*o)\b/g, 
		function(match, match1, match2) { 
			let replacement =  match1.toUpperCase() + match2;
			return replacement;
		}
	); 
	
	// Pronomoj.
	aeo = aeo.replace(/\bmi\b/g, 'mihi');
	aeo = aeo.replace(/\bci\b/g, 'tu');
	aeo = aeo.replace(/\bli\b/g, 'lùi');
	aeo = aeo.replace(/\bŝi\b/g, 'eshi');
	aeo = aeo.replace(/\bĝi\b/g, 'eghi');
	aeo = aeo.replace(/\bsi\b/g, 'sihi');
	aeo = aeo.replace(/\bni\b/g, 'nos');
	aeo = aeo.replace(/\bvi\b/g, 'vos');
	aeo = aeo.replace(/\bili\b/g, 'ilùi');
	
	// Verboj.
	aeo = aeo.replace(/i\b/g, 'ir');

	// Kazoj.
	aeo = aeo.replace(/al (.+)o\b/g, '$1od'); // Dativo.
	aeo = aeo.replace(/al (.+)oj\b/g, '$1oyd'); // Dativo pluralo.

	aeo = aeo.replace(/de (.+)o\b/g, '$1es'); // Genitivo.
	aeo = aeo.replace(/de (.+)oj\b/g, '$1eys'); // Genitivo pluralo.

	aeo = aeo.replace(/o\b/g, 'om'); // Nominativo.
	aeo = aeo.replace(/oj\b/g, 'oy'); // Pluralo.
	aeo = aeo.replace(/ojn\b/g, 'oyn'); // Akuzativo pluralo.




	aeo = aeo.replace(/e\b/g, 'œ'); // Adverbo.
	aeo = aeo.replace(/aŭ\b/g, 'ez'); 
	aeo = aeo.replace(/a\b/g, 'am');  // Adjektivo nominativo.
	aeo = aeo.replace(/aj\b/g, 'ay'); // Adjektivo pluralo.

	// Majuskle
	aeo = aeo.replace(/C/g, 'Tz');
	aeo = aeo.replace(/Ĉ/g, 'Ch');
	aeo = aeo.replace(/F/g, 'Ph');
	aeo = aeo.replace(/Ĝ/g, 'Gh');
	aeo = aeo.replace(/Ĥ/g, 'Qh');
	aeo = aeo.replace(/J/g, 'Y');
	aeo = aeo.replace(/Ĵ/g, 'Zh');
	aeo = aeo.replace(/K(i|e)/g, 'Qu$1');
	aeo = aeo.replace(/K/g, 'C');
	aeo = aeo.replace(/Ŝ/g, 'Sh');
	aeo = aeo.replace(/Ŭ/g, 'Ù');
	aeo = aeo.replace(/V/g, 'W');
	// Minuskle.
	aeo = aeo.replace(/c/g, 'tz');
	aeo = aeo.replace(/ĉ/g, 'ch');
	aeo = aeo.replace(/f/g, 'ph');
	aeo = aeo.replace(/ĝ/g, 'gh');
	aeo = aeo.replace(/ĥ/g, 'qh');
	aeo = aeo.replace(/j/g, 'y');
	aeo = aeo.replace(/ĵ/g, 'zh');
	aeo = aeo.replace(/k(i|e)/g, 'qu$1');
	aeo = aeo.replace(/k/g, 'c');
	aeo = aeo.replace(/ŝ/g, 'sh');
	aeo = aeo.replace(/ŭ/g, 'ù ');
	aeo = aeo.replace(/v/g, 'w');

	document.getElementById('aeo').value = aeo;
}
