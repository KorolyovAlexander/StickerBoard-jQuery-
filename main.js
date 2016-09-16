var stickerBoard = (function($){
		
	var desktop,
	sticker = $("\
		\<div class='sticker_body'>\
			<button class='sticker_button'>x</button>\
			<input class='sticker_input' />\
		</div>\
	");

	$('document').ready(init);
	
	function init(){
		desktop = $('body');
		desktop.on('dblclick', addSticker)
			.on('click', '.sticker_button', deleteSticker);
	}

	function addSticker(e){
		var temp_sticker = sticker.clone();
		temp_sticker.appendTo(desktop)
			.draggable()
			.offset({
				top: e.pageY,
				left: e.pageX
			});
	}

	function deleteSticker(){
		$(this).parent().remove();
	}

}(jQuery));