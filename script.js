function check_char(value){
    var pattern = new RegExp('[^가-힣\x20]', 'gi');
a.value=value.replace(pattern,'');
}