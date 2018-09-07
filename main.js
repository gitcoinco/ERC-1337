$(window).on('scroll',function(){
  console.log($(window).scrollTop());
  var top=$(window).scrollTop();
  if( top >=250){
    $('.quote img').attr('src', 'assets/ethmoney_animated.svg');
  }
  if( top >=250){
    $('#newspaper-icon').attr('src', 'assets/newspaper_animated.svg');
    $('#network-icon').attr('src', 'assets/network_animated.svg');
  }
})
