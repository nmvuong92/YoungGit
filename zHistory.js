<!DOCTYPE html>
<html><head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>History.js</title>
</head>
<body style="padding-bottom:40px">
	<!-- Scripts -->
	<script src="History_files/ga.js" async="" type="text/javascript"></script><script>if ( typeof window.JSON === 'undefined' ) { document.write('<script src="../scripts/uncompressed/json2.js"><\/script>'); }</script>
	<script src="History_files/jquery_002.js"></script>
	<script src="History_files/jquery.js"></script>

	<!-- HTML -->
	<div id="wrap">
		<!-- Intro -->
		<h1><a href="https://github.com/balupton/History.js">History.js</a> by <a href="http://balupton.com/">Benjamin Lupton</a></h1>
		<p>History.js gracefully supports the <a href="https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history">HTML5 History/State APIs</a> (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports <a href="http://jquery.com/">jQuery</a>, <a href="http://mootools.net/">MooTools</a> and <a href="http://prototypejs.org/">Prototype</a>.
 For HTML5 browsers this means that you can modify the URL directly, 
without needing to use hashes anymore. For HTML4 browsers it will revert
 back to using the old onhashchange functionality.</p>

		<!-- Textarea for Logging -->
		<textarea id="log" style="width:100%;height:400px">initial:
{}



https://browserstate.github.io/history.js/demo/

-----
statechange:
{"state":1,"rand":0.05702806225419044}

State 1

https://browserstate.github.io/history.js/demo/?state=1

-----
statechange:
{"state":2,"rand":0.7652630619914371}

State 2

https://browserstate.github.io/history.js/demo/?state=2

-----
statechange:
{"state":3,"rand":0.755438706381163}

State 3

https://browserstate.github.io/history.js/demo/?state=3

-----
statechange:
{"state":1,"rand":0.05702806225419044}

State 1

https://browserstate.github.io/history.js/demo/?state=1

-----
statechange:
{}



https://browserstate.github.io/history.js/demo/

-----
initial:
{}



https://browserstate.github.io/history.js/demo/

-----
statechange:
{"state":2,"rand":0.6284943474438395}

State 2

https://browserstate.github.io/history.js/demo/?state=2

-----
statechange:
{}



https://browserstate.github.io/history.js/demo/

-----
</textarea>

		<!-- Note -->
		<p>Click through the buttons in order and you'll get the results demonstrated in the <a href="https://browserstate.github.io/history.js/README.md">README.md</a> file.</p>

		<!-- Buttons -->
		<ul id="buttons"><li><button onclick='javascript:History.pushState({state:1,rand:Math.random()}, "State 1", "?state=1"); // logs {state:1,rand:"some random value"}, "State 1", "?state=1"'>History.pushState({state:1,rand:Math.random()},
 "State 1", "?state=1"); // logs {state:1,rand:"some random value"}, 
"State 1", "?state=1"</button></li><li><button onclick='javascript:History.pushState({state:2,rand:Math.random()}, "State 2", "?state=2"); // logs {state:2,rand:"some random value"}, "State 2", "?state=2"'>History.pushState({state:2,rand:Math.random()},
 "State 2", "?state=2"); // logs {state:2,rand:"some random value"}, 
"State 2", "?state=2"</button></li><li><button onclick='javascript:History.replaceState({state:3,rand:Math.random()}, "State 3", "?state=3"); // logs {state:3,rand:"some random value"}, "State 3", "?state=3"'>History.replaceState({state:3,rand:Math.random()},
 "State 3", "?state=3"); // logs {state:3,rand:"some random value"}, 
"State 3", "?state=3"</button></li><li><button onclick='javascript:History.pushState(null, null, "?state=4"); // logs {}, "", "?state=4"'>History.pushState(null, null, "?state=4"); // logs {}, "", "?state=4"</button></li><li><button onclick='javascript:History.back(); // logs {state:3}, "State 3", "?state=3"'>History.back(); // logs {state:3}, "State 3", "?state=3"</button></li><li><button onclick='javascript:History.back(); // logs {state:1}, "State 1", "?state=1"'>History.back(); // logs {state:1}, "State 1", "?state=1"</button></li><li><button onclick='javascript:History.back(); // logs {}, "The page you started at", "?"'>History.back(); // logs {}, "The page you started at", "?"</button></li><li><button onclick='javascript:History.go(2); // logs {state:3}, "State 3", "?state=3"'>History.go(2); // logs {state:3}, "State 3", "?state=3"</button></li></ul>

		<!-- Our Script -->
		<script>
			(function(window,undefined){

				// Check Location
				if ( document.location.protocol === 'file:' ) {
					alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
				}

				// Establish Variables
				var
					History = window.History, // Note: We are using a capital H instead of a lower h
					State = History.getState(),
					$log = $('#log');

				// Log Initial State
				History.log('initial:', State.data, State.title, State.url);

				// Bind to State Change
				History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
					// Log the State
					var State = History.getState(); // Note: We are using History.getState() instead of event.state
					History.log('statechange:', State.data, State.title, State.url);
				});

				// Prepare Buttons
				var
					buttons = document.getElementById('buttons'),
					scripts = [
						'History.pushState({state:1,rand:Math.random()}, "State 1", "?state=1"); // logs {state:1,rand:"some random value"}, "State 1", "?state=1"',
						'History.pushState({state:2,rand:Math.random()}, "State 2", "?state=2"); // logs {state:2,rand:"some random value"}, "State 2", "?state=2"',
						'History.replaceState({state:3,rand:Math.random()}, "State 3", "?state=3"); // logs {state:3,rand:"some random value"}, "State 3", "?state=3"',
						'History.pushState(null, null, "?state=4"); // logs {}, "", "?state=4"',
						'History.back(); // logs {state:3}, "State 3", "?state=3"',
						'History.back(); // logs {state:1}, "State 1", "?state=1"',
						'History.back(); // logs {}, "The page you started at", "?"',
						'History.go(2); // logs {state:3}, "State 3", "?state=3"'
					],
					buttonsHTML = ''
					;

				// Add Buttons
				for ( var i=0,n=scripts.length; i<n; ++i ) {
					var _script = scripts[i];
					buttonsHTML +=
						'<li><button onclick=\'javascript:'+_script+'\'>'+_script+'</button></li>';
				}
				buttons.innerHTML = buttonsHTML;

			})(window);
		</script>
	</div>

	<!-- Google Analytics -->
	<script type="text/javascript">	
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-4446117-1']);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>


</body></html>