let text = ""

function getAndSetValue(ref) {
	text= $(".screen").val()
	if($(ref).text() === "C") {
		text="";
		$(".screen").val(text)
		return;
	}	
	$(".screen").val(text + $(ref).text())
}
$(".operator-pad").children().on("click", function() {
	getAndSetValue(this)
})

$(".first").children().on("click", function() {
	getAndSetValue(this)
})

$(".second").children().on("click", function() {
	getAndSetValue(this)
})

$(".third").children().on("click", function() {
	getAndSetValue(this)
})

$(".fourth").children().on("click", function() {	getAndSetValue(this)
})

$(".equate").on("click", function() {
	text=$(".screen").val()
	let result = eval(text)
	$(".screen").val(result)
})