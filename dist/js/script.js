$(document).ready(function(){$(".left-menu-el").click(function(){$(this).find(".left-menu-el-sub-wrap").slideToggle()}),$(".col-open-message-el-status-bar-val").each(function(){var s=$(this).data("progress");$(this).css("width",s+"%"),30>s&&s>0&&$(this).css("background-color","#00B8DF"),50>s&&s>30&&$(this).css("background-color","#00CE74"),s>70&&$(this).css("background-color","#E1523E")})});