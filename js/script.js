$(document).ready(function(){
    let $ul = $(".nav-sublist"),
        $menu =$(".nav-list-item-link");
    $($menu).click(function(){
        $ul.toggleClass("nav-sublist-click");
        
    });
});

$(document).ready(function(){
  let $ul = $(".nav-sublist");
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    $ul.toggleClass("nav-sublist-click");
	});
});

(function () {
    const $menuBtn = $(".menu-btn");
  
    $menuBtn.on("click", function () {
      $(this).toggleClass("is-change");
      setMenuVisibility();
    });
  
    function setMenuVisibility() {
      if ($menuBtn.hasClass("is-change")) {
        $(".menu").stop(true, true).slideDown();
      } else {
        $(".menu").stop(true, true).slideUp();
      }
    }
  })();
 
 
$(function(){
    $('#BackTop').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 300 ){
        $('#BackTop').fadeIn(222);
      } else {
        $('#BackTop').stop().fadeOut(222);
      }
    }).scroll();
  });




$(document).ready(function () {
  let menu_click = false;

  $(".navbar__icon-bar").click(function () {
    menu_click = !menu_click;
    if (menu_click) {
      $("..nav-sublist").addClass("nav-sublist-click");
      $(".navbar__icon-bar").attr("menu-click", "true");
    } else {
      $(".nav-sublist").removeClass("nav-sublist-click");
      $(".navbar__icon-bar").attr("menu-click", "false");
    }
  });
});

window.onload = function(){
   var audio1 = document.getElementById('music1');
   audio1.pause();
   var audio2 = document.getElementById('music2');
   audio2.pause();
   var audio3 = document.getElementById('music3');
   audio3.pause();
   var audio4 = document.getElementById('music4');
   audio4.pause();
   var audio5 = document.getElementById('music5');
   audio5.pause();
   var audio6 = document.getElementById('music6');
   audio6.pause();
   document.querySelector('.header-selection-kaf').classList.add('header-selection-active');
   document.querySelector('.header-selection-kaf-a').classList.add('header-selection-a-active');
}

function play1(){
  var audio = document.getElementById('music1');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

function play2(){
  var audio = document.getElementById('music2');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function play3(){
  var audio = document.getElementById('music3');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function play4(){
  var audio = document.getElementById('music4');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function play5(){
  var audio = document.getElementById('music5');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function play6(){
  var audio = document.getElementById('music6');
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

var artiststate = 1;

function rim(){
  var an = document.getElementById('artistname');
  an.innerHTML='理芽';
  var ane = document.getElementById('artistname-en');
  ane.innerHTML='RIM';
  var con = document.getElementById('artistcontent');
  con.innerHTML ='設定上是有著神祕眼睛的少女，喜歡日文、英文和韓文歌曲<br> 翻唱的歌曲中就包含以上三種語言<br> 不可思議的歌聲同時有清澈、透明、慵懶與嬌豔共存，非常適合詮釋慢節奏的流行樂<br> 輕柔的歌唱方式可以讓聽者感到很輕鬆翻唱選曲主要是日文與英文的流行樂，並且會有不同程度的重新編曲或效果選擇  <br> 這讓該首歌更符合理芽的歌聲<br>  許多首歌都可以聽到理芽以自己的聲音進行和聲，也是她翻唱曲的一大特色理芽的英文發音也屬於比較標準的，經常挑戰全英文歌曲   <br>她的英文咬字與發音一直有在進步，更有另一個特色：日文特有的韻律感   <br>或許她的技巧沒辦法如同那些天王天后般厲害，她仍以自己的方式重新詮釋這些熱門歌曲   <br>這位18歲少女唱出屬於自己的歌，為聽眾帶來獨特感受理芽目前共有8首原創曲，每一首都充滿她的個人風格  <br> 而原創曲就不能不提到食虫植物這首觀看次數即將突破2800萬次的超熱門曲   <br> 理芽的歌聲與歌曲 讓人非常放鬆、舒適的一首接著一首聽下去，不容易產生疲勞感，卻也不乏個人特色或使人豎起耳朵仔細聆聽的小亮點<br>設定上與花譜有姊妹關係，而歌唱風格、講話聲音、低落的語彙力等方面更不禁讓人懷疑她們是不是真的是姊妹 ';
  var vision = document.getElementById('artistvision');
  var zoomin = document.getElementById('zoomin');
  zoomin.src="images/理芽 1.png";
//   if($(window).width() > 769)
// {
//   vision.style.backgroundImage= "url('images/ARTIST rim IMG.png')";
// }else if($(window).width() > 321&&$(window).width() <= 768)
// {
//   vision.style.backgroundImage= "url('images/ARTIST rim IMG 768.png')";
// }else if($(window).width() <= 320)
// {
//   vision.style.backgroundImage= "url('images/ARTIST rim IMG 320.png')";
// }
  
  document.querySelector('.artistvision').classList.add('artistvision-rim');
  document.querySelector('.header-selection-rim').classList.add('header-selection-active');
  document.querySelector('.header-selection-rim-a').classList.add('header-selection-a-active');
  if(artiststate==1){
  document.querySelector('.artistvision').classList.remove('artistvision-kaf');
  document.querySelector('.header-selection-kaf').classList.remove('header-selection-active');
  document.querySelector('.header-selection-kaf-a').classList.remove('header-selection-a-active');
  }
  if(artiststate==3){
    document.querySelector('.artistvision').classList.remove('artistvision-koko');
    document.querySelector('.header-selection-koko').classList.remove('header-selection-active');
    document.querySelector('.header-selection-koko-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==4){
    document.querySelector('.artistvision').classList.remove('artistvision-harusaruhi');
    document.querySelector('.header-selection-harusaruhi').classList.remove('header-selection-active');
    document.querySelector('.header-selection-harusaruhi-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==5){
    document.querySelector('.artistvision').classList.remove('artistvision-isekaijoucho');
    document.querySelector('.header-selection-isekaijoucho').classList.remove('header-selection-active');
    document.querySelector('.header-selection-isekaijoucho-a').classList.remove('header-selection-a-active');
    }      
    artiststate = 2;
}

function koko(){
  var an = document.getElementById('artistname');
  an.innerHTML='幸祜';
  var ane = document.getElementById('artistname-en');
  ane.innerHTML='koko';
  var con = document.getElementById('artistcontent');
  con.innerHTML ='作為神椿的一員，歌唱力肯定是有保證的<br> 聲音特色上，音域非常廣、主力是飽滿的高音部分<br> 中音甚至低音不會有下不去的問題，高音的真假音轉換非常流暢 <br> 清澈成熟的嗓音可以在抒情歌曲表現優美的空靈感，也有很強的穿透力  <br> 翻唱選曲上，不會跟隨潮流翻唱那些極度熱門的歌曲<br>  選擇的大多是音域很高很難唱的歌先不提，也包含很多電子調音的歌曲  <br>其餘的翻唱曲也會使用多種效果讓她的歌聲不會過於單調，近期更是積極嘗試不同曲風的歌曲，不再只唱抒情的   <br>另外，幸祜的英文發音算比較標準的，翻唱曲中有幾首全英文歌曲   <br>翻唱「未来になれなかったあの夜に」相當特別，用的是あられライヴ的音源稍加後製的作為整場LIVE的ED，幸祜唱完20多首歌後在這首歌有整場最佳的表現之一<br> 疲勞的聲帶也沒有影響到她低音的穩定度  <br> 改編過的這首歌不只作為ED更加適合，幸祜的歌聲詮釋起來也避免無法展現amazarashi原唱滄桑感的問題<br>「この世界に口づけを」就展示了她寬廣的音域、高音的真假音轉換等特色 不愧是量身打造的歌曲，更讓人期待幸祜未來還可以成長到什麼程度<br>幸祜還有一個特色是頭聲與胸聲的轉換、混和<br>あられライブ就多次展現這技巧，最新的原創曲ASH更融入電音的特色、再加入一小段RAP來點綴，變成一首幸祜味十足的歌曲<br>再來稍微介紹一下唱歌以外的部分<br>幸祜在外型上看似帥氣的大姊姊，實則是天然呆眼鏡屬性<br>事蹟有眼鏡掛在領口找不到、口罩掛在耳朵上錄音被staff提醒等<br>在神椿中屬於社交力和會話力比較好的(神椿水準的比較好…) <br>以及有分配部分點數到遊戲力，平時會玩一些FPS遊戲<br><br>';
  var vision = document.getElementById('artistvision');
  var zoomin = document.getElementById('zoomin');
  zoomin.src="images/幸祜 1.png";
//   if($(window).width() > 769)
// {
//   vision.style.backgroundImage= "url('images/ARTIST koko IMG.png')";
// }else if($(window).width() > 321&&$(window).width() <= 768)
// {
//   vision.style.backgroundImage= "url('images/ARTIST koko IMG 768.png')";
// }else if($(window).width() <= 320)
// {
//   vision.style.backgroundImage= "url('images/ARTIST koko IMG 320.png')";
// }
  document.querySelector('.artistvision').classList.add('artistvision-koko');
  document.querySelector('.header-selection-koko').classList.add('header-selection-active');
  document.querySelector('.header-selection-koko-a').classList.add('header-selection-a-active');
  if(artiststate==1){
    document.querySelector('.artistvision').classList.remove('artistvision-kaf');
  document.querySelector('.header-selection-kaf').classList.remove('header-selection-active');
  document.querySelector('.header-selection-kaf-a').classList.remove('header-selection-a-active');
  }
  if(artiststate==2){
    document.querySelector('.artistvision').classList.remove('artistvision-rim');
    document.querySelector('.header-selection-rim').classList.remove('header-selection-active');
    document.querySelector('.header-selection-rim-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==4){
    document.querySelector('.artistvision').classList.remove('artistvision-harusaruhi');
    document.querySelector('.header-selection-harusaruhi').classList.remove('header-selection-active');
    document.querySelector('.header-selection-harusaruhi-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==5){
    document.querySelector('.artistvision').classList.remove('artistvision-isekaijoucho');
    document.querySelector('.header-selection-isekaijoucho').classList.remove('header-selection-active');
    document.querySelector('.header-selection-isekaijoucho-a').classList.remove('header-selection-a-active');
    }      
  artiststate = 3;
}

function harusaruhi(){
  var an = document.getElementById('artistname');
  an.innerHTML='春猿火';
  var ane = document.getElementById('artistname-en');
  ane.innerHTML='harusaruhi';
  var con = document.getElementById('artistcontent');
  con.innerHTML ='神椿旗下的春猿火(Harusaruhi)在Vtuber/Vsinger界裡是比較少見的RAP歌手<br>2019年11月開始在Youtube活動，歌聲時而如颱風般強力、時而如少女般天真，以有力且變幻無常的唱功俘虜聽眾的心<br> 既然說春猿火是RAP歌手，當然就要先從RAP的翻唱開始介紹起  <br> 春猿火的RAP歌詞與編成是由たかやん負責的，經常對原曲做比較大幅度的改編<br> 她試著透過強而有力的歌聲與特別製作的RAP歌詞，將10多歲、20多歲年輕人懷抱的情感投入歌曲中 <br>比較特殊的是春猿火的RAP充滿積極的正能量，因為她想展現的是如她自己在訪談中所說的：「想唱出能從背後推人一把的歌曲」 <br>另一場與同為RAP歌手的KMNZ的訪談中，LITA覺得春猿火的RAP風格比較接近K-POP <br>總而言之，春猿火總是能自然流暢的在RAP與一般歌唱之間切換自如<br> 除了上述改編成RAP版的翻唱，春猿火也翻唱不少RAP歌曲，在選曲上與一般的Vtuber不太一樣  <br> 如果聽膩動畫歌或是那些被翻唱到爛的流行樂，不妨聽聽她翻唱的饒舌歌曲<br>前面聽完颱風般強力的RAP歌曲後，春猿火翻唱的流行樂也相當有水準<br>不論是從高音到低音的處理都讓人聽得舒服<br>較為沉穩的抒情歌曲也有一種獨特的韻律感<br>春猿火目前為止也有幾首與其他歌手合作的歌曲<br>在幸祜的文章中已經介紹過一首「Nectar」，還有一首與幸祜合作的歌曲是放在春猿火的頻道上<br>「ATELIER」很好的展現神椿團隊的強大，這是御用音樂家大沼パセリ製作的歌曲<br>大沼パセリ可以說是春猿火成長和成功最大功臣之一<br>這首歌由兩位音域、風格類似的歌手來唱，卻又不失各自的特色(春猿火的韻律、幸祜的混聲和高音)<br>另一首是更為特殊的RAP合唱曲，與KMNZ合作放在LITA的頻道上<br>這首歌不論作詞、作曲、編曲都整合兩邊的製作團隊，也讓三位風格不同的RAP歌手很好的融合進一首歌裡<br>LITA的RAP更為強力、LIZ的較為可愛、春猿火則是更流行一些<br>春猿火在去年底舉行的CREAM PUFF LIVE挑戰與平時不太一樣的路線<br>這場LIVE的選曲不走RAP風格，選擇的是鋼琴或吉他伴奏的流行樂，更有一半的是同公司內其他歌手的歌曲<br>講了這麼多翻唱歌曲，重頭戲仍然是原創曲的部分<br>原創曲的核心是RAP，作詞作曲幾乎都是由大神たかやん包辦<br>這些原創曲的主題都是由春猿火自己發想、たかやん理解後大幅擴展製作成的，一路聽來也是她個人的成長史<br>還有不要錯過精美的MV，畢竟這也是神椿工作室的強項<br>前面提到的大沼パセリ也負責幾首歌的編曲<br>原創曲「覚醒 feat.さなり」更找來さなり，是一首融合二次元與三次元，讓人感受到溫暖的饒舌歌曲<br>不只是音樂，MV的運鏡、兩人的互動都很值得一看<br>歌唱活動以外，春猿火與ヰ世界情緒每個月還會主持一場類似廣播劇的節目「神椿報奏部」<br>節目內容天馬行空，會發現她們兩位相當能聊而且充滿女子力，要模仿或搞笑也都不是問題<br>春猿火最讓人驚訝的莫過於在出道前別說是RAP，連相關音樂都沒什麼接觸<br>工作人員卻願意說出：「讓我們一起成長吧。」這種話來，在たかやん的指導下確實也進步神速<br>從一出道就要面對疫情帶來的巨大影響，她用很正向的態度去面對，對音樂的態度也非常認真<br>';
  var vision = document.getElementById('artistvision');
  document.querySelector('.artistvision').classList.add('artistvision-harusaruhi');
  document.querySelector('.header-selection-harusaruhi').classList.add('header-selection-active');
  document.querySelector('.header-selection-harusaruhi-a').classList.add('header-selection-a-active');
  var zoomin = document.getElementById('zoomin');
  zoomin.src="images/春猿火 1.png";
  // if($(window).width() > 769)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST harusaruhi IMG.png')";
  // }else if($(window).width() > 321&&$(window).width() <= 768)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST harusaruhi IMG 768.png')";
  // }else if($(window).width() <= 320)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST harusaruhi IMG 320.png')";
  // }
  
 
  if(artiststate==1){
    document.querySelector('.artistvision').classList.remove('artistvision-kaf');
  document.querySelector('.header-selection-kaf').classList.remove('header-selection-active');
  document.querySelector('.header-selection-kaf-a').classList.remove('header-selection-a-active');
  }
  if(artiststate==2){
    document.querySelector('.artistvision').classList.remove('artistvision-rim');
    document.querySelector('.header-selection-rim').classList.remove('header-selection-active');
    document.querySelector('.header-selection-rim-a').classList.remove('header-selection-a-active');
    }
    if(artiststate==3){
      document.querySelector('.artistvision').classList.remove('artistvision-koko');
      document.querySelector('.header-selection-koko').classList.remove('header-selection-active');
      document.querySelector('.header-selection-koko-a').classList.remove('header-selection-a-active');
      }
  if(artiststate==5){
    document.querySelector('.artistvision').classList.remove('artistvision-isekaijoucho');
    document.querySelector('.header-selection-isekaijoucho').classList.remove('header-selection-active');
    document.querySelector('.header-selection-isekaijoucho-a').classList.remove('header-selection-a-active');
    }      
  artiststate = 4;
}

function isekaijoucho(){
  var an = document.getElementById('artistname');
  an.innerHTML='ヰ世界情緒';
  var ane = document.getElementById('artistname-en');
  ane.innerHTML='isekaijoucho';
  var con = document.getElementById('artistcontent');
  con.innerHTML ='ヰ世界情緒(Isekaijoucho)是一位夢想用自己的歌與創作來表現世界的虛擬黑暗歌手<br>在名為「ヰ世界情緒」的畫布上以強力又虛幻的歌聲，編織出光與闇的嶄新故事<br> 然而比起單純的「歌手」，我更想稱她為「創作者」或「藝術家」 <br> 《鳥の詩》這首歌貫串ヰ世界情緒的所有個人特色<br> 這首翻唱並非一般從錄音室錄出來的，而是去年底CANDY LIVE的ED曲現場音源 <br>情緒在長達兩小時的LIVE後還能有如此穩定且一流的表現<br>整首歌不論是高低音、細節的處理還是情緒渲染都是一流<br>最後更特別的是，這首翻唱的插圖還是情緒親自繪製的<br> ヰ世界情緒是一位重度Vocaloid粉，不只對Vocaloid的歌曲瞭若指掌，也翻唱眾多橫跨10年以上的高難度Vocaloid歌曲  <br> 製作原創曲時也請到著名的Vocaloid P為她作詞、作編曲(samayuzame、とうかさ、はるまきごはん、傘村トータ)<br>有些Vocaloid P在製作歌曲時根本沒考慮過要給人唱，然而情緒卻能以獨特的方式詮釋這些歌曲<br>情緒翻唱的Vocaloid歌曲混合了軟體般的「精準」與人類獨有的強烈「情緒」<br>唯有對Vocaloid深入了解配合自身紮實的唱功才有辦法做到<br>神椿旗下歌手實力的堅強應該無庸置疑，ヰ世界情緒在這之中又有最為寬廣的音域、最多變的聲音與變幻自在的技巧<br>從沉穩的低音、氣泡音收尾、立即轉換到富有穿透力的高音<br>前一段還是情感強烈的本嗓、下一段又是輕柔虛幻的氣音<br>同一首歌你很難想像是由同一人演唱的<br>既然名字中有「情緒」二字，她在歌曲中情緒的渲染也非常強烈<br>利用多變的聲音、尾音的處理與歌曲各個細節細膩的處理方式，讓歌曲在她的詮釋下更有感染力與爆發力<br>ヰ世界情緒有不少與其他歌手合作的機會<br>我認為最特別的是她會根據合作的對象與歌曲選擇合適的歌唱方式<br>與春猿火合唱的ワールド・コーリング選擇強力優美的高音和聲<br>與somunia合唱的透明な呼吸則使用充滿透明感的輕柔氣音和聲<br>花譜合唱的深淵又選擇強力的且黑暗的低音，與花譜清澈的高音形成強烈對比<br>另外，情緒也很常在神椿其他幾位魔女的LIVE上擔任來賓，每次登台都有穩定的表現且不會喧賓奪主<br>シリウスの心臓在她的歌唱方式下呈現孤寂與強烈思念的對比，中間更插入多段摩斯密碼<br>這段高音摩斯密碼極難演唱，構成的正是「I Love You」的電碼<br>作編曲的傘村也認為這不像給人類唱的音域，然而情緒每次在LIVE演唱這首都有絕佳的表現<br>另外幾首原創曲利用畫面配合她多變的歌聲，展現出獨特的世界觀<br>這幾首歌的特色便是比起流行歌，保有更多Vocaloid歌曲的特徵在，更像是原本就要寫給軟體唱的歌曲<br>唯有Vocaloid P與情緒搭配才能製作出這種歌曲吧<br>「ヰ世界の宝石譚」則是敘事詩<br>這首歌將她所擁有的歌唱技巧展現的淋漓盡致，連續高低音的轉換與顫音還有不同聲音之間的切換讓聽者大呼過癮<br>歌詞與畫面想傳達士兵們期望的「和平的世界」<br>歌詞中更大量使用了雙關語和隱喻，是一首十分直得玩味的歌曲<br>';
  var vision = document.getElementById('artistvision');
  document.querySelector('.artistvision').classList.add('artistvision-isekaijoucho');
  document.querySelector('.header-selection-isekaijoucho').classList.add('header-selection-active');
  document.querySelector('.header-selection-isekaijoucho-a').classList.add('header-selection-a-active');
  var zoomin = document.getElementById('zoomin');
  zoomin.src="images/世界情緒 1.png";
  // if($(window).width() > 769)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST isekaijoucho IMG.png')";
  // }else if($(window).width() > 321&&$(window).width() <= 768)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST isekaijoucho IMG 768.png')";
  // }else if($(window).width() <= 320)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST isekaijoucho IMG 320.png')";
  // }

  if(artiststate==1){
    document.querySelector('.artistvision').classList.remove('artistvision-kaf');
  document.querySelector('.header-selection-kaf').classList.remove('header-selection-active');
  document.querySelector('.header-selection-kaf-a').classList.remove('header-selection-a-active');
  }
  if(artiststate==2){
    document.querySelector('.artistvision').classList.remove('artistvision-rim');
    document.querySelector('.header-selection-rim').classList.remove('header-selection-active');
    document.querySelector('.header-selection-rim-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==3){
    document.querySelector('.artistvision').classList.remove('artistvision-koko');
    document.querySelector('.header-selection-koko').classList.remove('header-selection-active');
    document.querySelector('.header-selection-koko-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==4){
    document.querySelector('.artistvision').classList.remove('artistvision-harusaruhi');
    document.querySelector('.header-selection-harusaruhi').classList.remove('header-selection-active');
    document.querySelector('.header-selection-harusaruhi-a').classList.remove('header-selection-a-active');
    }     
  artiststate = 5;
}
function kaf(){
  var an = document.getElementById('artistname');
  an.innerHTML='花譜';
  var ane = document.getElementById('artistname-en');
  ane.innerHTML='KAF';
  var con = document.getElementById('artistcontent');
  con.innerHTML ='日本の何処かに棲む、何処にでもいる、何処にもいない17才。<br>様々な偶然により発見された類い稀な歌声を持つ次世代型バーチャルシンガー。<br><br>2018年10月、バーチャルアーティスト・バーチャルインスタグラマーとして、<br>仮想世界を拠点としながら現実世界への活動を本格始動。以来、彼女の歌声とSNSにアップされるリアルと<br>バーチャルが融合されたミュージックビデオや写真が話題を呼び、<br>フォロワーが急増。現在、YouTubeチャンネル登録者数は60万人を超え、累計再生数は1億回を突破している。<br><br>2019年4月、「ニコニコ超会議2019」内で行われた「VTuber Fes Japan 2019」に出演し、異質な存在感が話題と<br>なってTwitterトレンド入り。<br>5月15日に配信限定1st EP「花と心臓」をリリース。収録曲「糸」がiTunesのトップソ<br>ングチャートのJ-POP3位、総合9位にランクイン。<br>6月28日公開の映画「ホットギミック ガールミーツボーイ」で初の<br>映画主題歌を「夜が降り止む前に」で担当。<br>5月、夏に初のワンマンライブを開催することを目的として、クラウドファ<br>ンディングを実施。目標額500万円に対し、最終的に4,000万円の支援を集め、大きな話題となる。その後、8月1日にLIQUIDROOM（恵比寿）で目標としていたワンマンライブを開催。このワンマンのチケットは即完売、これを受けて当日のライブ<br>全編をYouTube Liveでの生配信、全国各地の映画館、そして世界初となるカラオケルームでのライブビューイングを行い、多くの人がこの出来事を目撃する。ハッシュタグ「#花譜不可解」<br>がTwitterトレンドで世界1位になるなど大成功を収めた。<br>9月11日には待望の1st Album「観測」を2形態（α / β）でリリース。<br>12月25日には1st Album「観測」を13人のアーティストがRemixした「観測γ」をリリース。<br><br>2020年3月23日、ファーストワンマンライブ「不可解」を再構築した「不可解(再)」をZepp DiverCityから無観客配信ライブで開催。Twitterでは「#花譜不可解再」が日本トレンド1位となり大きな話題となった。<br>4月、TVアニメ「ブラッククローバー」のエンディングテーマに「アンサー」が起用される。<br>5月、超没入エナジードリンク『ZONe』のIMMERSIVE SONG PROJECTに参加し、コラボ曲「危ノーマル」を制作。<br>7月、花譜とdocomoがタッグを組んだ、来るべき5Gの時代をイメージした展示イベント「HAYABUSA EXPERIENCE by 3.5D × docomo ONLINE EXHIBITION」がWEB開催され、テーマソング「戸惑いテレパシー」をリリース。<br>シングルには柊キライ、Orangestar、羽生まゐごの3アーティストによるRemixも収録。<br><br>7月9日、Netflixオリジナルアニメ「日本沈没2020」が全世界で配信スタート。新曲「景色」でグランドエンディングテーマを担当し、話題となる。<br>7月22日、収録曲全でがタイアップ曲となっている2nd EP「花と解答」をリリース。<br>9月23日、Kizuna AIとのコラボシングル「愛と花」をリリース。楽曲提供には川谷絵音やORESAMAなど豪華クリエイターが参加。<br>10月10日、2nd ONE-MAN LIVE「不可解弐Q1」をバーチャルライブハウスPANDORAより配信ライブ開催。6万件を超えるツイートにて「#不可解弐Q1」がTwitterのトレンドを再び賑わした。<br>11月25日、2nd Album「魔法」発売決定。<br><br>2021年3月13日に2nd ONE-MAN LIVE「不可解弐Q2」をYouTube Liveにて全編無料配信で開催。同時視聴者数は4万人を超え、Twitterでは「#不可解弐Q2」が10万件を超えるツイートで世界トレンド1位となった。<br>5月19日、配信シングル「例えば」リリース。<br>6月4日公開の劇場アニメ「映画大好きポンポさん」の挿入歌を「例えば」で担当。<br>6月11日12日、2nd ONE-MAN LIVEの集大成「不可解弐REBUILDING」を豊洲PITにて開催。<br><br>10月18日、3周年を迎える。<br>';
  var vision = document.getElementById('artistvision');
  document.querySelector('.artistvision').classList.add('artistvision-kaf');
  document.querySelector('.header-selection-kaf').classList.add('header-selection-active');
  document.querySelector('.header-selection-kaf-a').classList.add('header-selection-a-active');
  var zoomin = document.getElementById('zoomin');
  zoomin.src="images/花譜 1.png";
  // if($(window).width() > 769)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST kaf IMG.png')";
  // } else if($(window).width() > 321&&$(window).width() <= 768)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST kaf IMG 768.png')";
  // } else if($(window).width() <= 320)
  // {
  //   vision.style.backgroundImage= "url('images/ARTIST kaf IMG 320.png')";
  // }
  if(artiststate==5){
    document.querySelector('.artistvision').classList.remove('artistvision-isekaijoucho');
    document.querySelector('.header-selection-isekaijoucho').classList.remove('header-selection-active');
    document.querySelector('.header-selection-isekaijoucho-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==2){
    document.querySelector('.artistvision').classList.remove('artistvision-rim');
    document.querySelector('.header-selection-rim').classList.remove('header-selection-active');
    document.querySelector('.header-selection-rim-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==3){
    document.querySelector('.artistvision').classList.remove('artistvision-koko');
    document.querySelector('.header-selection-koko').classList.remove('header-selection-active');
    document.querySelector('.header-selection-koko-a').classList.remove('header-selection-a-active');
    }
  if(artiststate==4){
    document.querySelector('.artistvision').classList.remove('artistvision-harusaruhi');
    document.querySelector('.header-selection-harusaruhi').classList.remove('header-selection-active');
    document.querySelector('.header-selection-harusaruhi-a').classList.remove('header-selection-a-active');
    }     
  artiststate = 1;
}

$(window).scroll(function(){

  var scrollTop = $(this).scrollTop(); 
  var $menu =$(".main");
  var opcaity;
  /* 透明度初始为1，随着滚动逐渐为0 */
  opcaity = (1 - (scrollTop / 1530)<0) ? 0 : 1 - (scrollTop / 1530);

  
  $($menu).css('opacity', opcaity);

});

// start();
// window.addEventListener('resize', start);

// function start(){
//   const v = document.getElementsByClassName('artistvision');
//   console.log(v); 
//   if(artiststate == 1){
//     if($(window).width() > 769)
//     {
//       document.getElementsByClassName('artistvision')[0].style.backgroundImage= "url('../images/ARTIST kaf IMG.png')";
//     }else if($(window).width() > 321&&$(window).width() <= 768)
//     {
//       document.getElementsByClassName('artistvision')[0].style.backgroundImage= "url('../images/ARTIST kaf IMG 768.png')";
//     }else if($(window).width() <= 320)
//     {
//       document.getElementsByClassName('artistvision')[0].style.backgroundImage= "url('../images/ARTIST kaf IMG 320.png')";
//     }
//   }
// }






 
// const firebaseConfig = {
//   apiKey: "AIzaSyAhQzY61dJfqO9h0rbvEXiCI0MbYE03hws",
//   authDomain: "virtual-witch-phenomenon.firebaseapp.com",
//   projectId: "virtual-witch-phenomenon",
//   storageBucket: "virtual-witch-phenomenon.appspot.com",
//   messagingSenderId: "782442533188",
//   appId: "1:782442533188:web:3d812dc3b8a2f67b7d0711",
//   measurementId: "G-1TB5METLQS"
//   };
    
      
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//  var db = firebase.firestore();

// function storedata() {
//   b.collection("movies").doc("新世紀福爾摩斯").set({
//   name: "新世紀福爾摩斯",
//   date: "2010",
//   desctiption: "本劇改編自阿瑟·柯南·道爾爵士家喻戶曉的推理小說，一位脾氣古怪的大偵探在現代倫敦的街頭悄悄巡行，四處搜尋線索。",
//   actors: ["班尼迪克·康柏拜區", "馬丁·費曼"]
//   });
// }
