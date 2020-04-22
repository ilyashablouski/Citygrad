<!DOCTYPE HTML>
<html lang="ru">
<head>
	<base href="{$config->root_url}/">
	<meta charset="utf-8">
	<title>{$meta_title|escape}</title>
	<meta name="description" content="{$meta_description|escape}">
	<meta name="keywords" content="{$meta_keywords|escape}">
	<meta content="telephone=no" name="format-detection">
	<meta http-equiv="x-rim-auto-match" content="none">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1">

	<link rel="shortcut icon" href="{$config->root_url}/favicon.ico" type="image/x-icon">
	<link rel="icon" href="{$config->root_url}/favicon.ico" type="image/x-icon">
	<meta name="cmsmagazine" content="468f70ab91e70c908dc7b4a7dee94232">
	<meta name="it-rating" content="it-rat-c1a5de279a1e954ecc24af76ceb0188e">
	{* Канонический адрес страницы *}
	{if isset($canonical)}<link rel="canonical" href="{$config->root_url}{$canonical}"/>{/if}



	<link href="design/{$settings->theme|escape}/lib/normalize.css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/fancybox@3.5.7/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/fotorama/fotorama.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/lightslider/lightslider.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/lib/likely/likely.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/css/style.css" rel="stylesheet" type="text/css" />
	<link href="design/{$settings->theme|escape}/css/media.css" rel="stylesheet" type="text/css" />

	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

	<script src="design/{$settings->theme|escape}/lib/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/jquery-ui-1.12.1/jquery-ui.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/fancybox@3.5.7/jquery.fancybox.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/jquery.placeholder/jquery.placeholder.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/jquery.validate/jquery.validate.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/fotorama/fotorama.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/lightslider/lightslider.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/jquery.bxslider/jquery.bxslider.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/likely/likely.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/lib/jquery.sticky-kit/jquery.sticky-kit.min.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/js/classList.js" type="text/javascript"></script>
	<script src="design/{$settings->theme|escape}/js/scripts.js" type="text/javascript"></script>

	{if $smarty.session.admin == 'admin'}
		<script src ="simpla/design/js/admintooltip/admintooltip.js" type="text/javascript"></script>
		<link href="simpla/design/js/admintooltip/css/admintooltip.css" rel="stylesheet" type="text/css" />
		<style>
			text {
				fill: #000000 !important;
			}
		</style>
	{/if}

	{literal}
	<script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?157",t.onload=function(){VK.Retargeting.Init("VK-RTRG-264642-27eDF"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-264642-27eDF" style="position:fixed; left:-999px;" alt=""/></noscript>
	<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '487036551748223');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=487036551748223&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Global site tag (gtag.js) - Google Marketing Platform -->
<script async src="https://www.googletagmanager.com/gtag/js?id=DC-9690623"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'DC-9690623');
</script>
<!-- End of global snippet: Please do not remove -->
	{/literal}
</head>

	<body{if $module == 'MainView'} class="home-page"{elseif $module == 'ShopsView'} class="js-catalog-page"{/if}>
		<!--[if lt IE 10]>
		<div class="browse-happy">
			<div class="wrapper">
				<p class="browse-happy__notice">Мы обнаружили, что вы используете <strong>устаревшую версию</strong> браузера Internet Explorer</p>
				<p class="browse-happy__security">Из соображений безопасности этот сайт поддерживает Internet Explorer версии 10 и выше <br>Кроме того, этот и многие другие сайты могут отображаться <strong>некорректно</strong></p>
				<p class="browse-happy__update">Пожалуйста, обновите свой браузер по этой <a href="http://browsehappy.com/" target="_blank">ссылке</a></p>
				<p class="browse-happy__recommend">(мы рекомендуем <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>)</p>
			</div>
		</div>
		<![endif]-->

		<header class="header">
			<div class="wrapper">
				<div class="header__top">
					<div class="header__logo">
						<a href="{$config->root_url}/" class="logo">
							<img src="design/{$settings->theme|escape}/images/logo.png" title="{$settings->site_name|escape}" alt="{$settings->site_name|escape}" class="logo__img">
						</a>
					</div>

					<div class="header__contacts">
						<div class="header__contacts-item">
							Торгово-развлекательный центр: ВТ−ВС  10−19<br>
							Минск, ул. Тимирязева, д. 123/2
						</div>

						<div class="header__contacts-item">
							КОСМО: ПН−ВС, 10−22<br>
							ШПИЛЬ: ПН−ВС, круглосуточно
						</div>
					</div>
				</div>

				<div class="header__bottom">
					<div class="header__nav js-header-nav">
						<ul class="reset-list nav">
							{foreach $pages as $p}
								{* Выводим только страницы из первого меню *}
								{if $p->menu_id == 1 && $p->url != ''}
								<li class="nav__item">
									<a data-page="{$p->id}" href="{$p->url}" class="nav__link">{$p->name|escape}</a>
								</li>
								{/if}
							{/foreach}
						</ul>
						<span class="header__nav-close js-header-nav-close"></span>
					</div>

					<span class="header__nav-target js-header-nav-target"></span>

					<div class="header__search">
						<div class="search-field">


							<script>
								$(document).ready(function(){

								});
							</script>

							<form class="search-field__form js-validation-form">
								<input type="text" name="search" class="search-field__input js-search-input" placeholder="Я ищу..." required autocomplete="off">
								<button type="submit" class="search-field__btn"></button>
							</form>

							<div class="search-field__dropdown js-search-dropdown">
								<div class="search-field__dropdown-content">
									<div class="search-field__result-loader js-search-loader"></div>
									<div class="search-field__result-info js-search-info">Нет результатов</div>
									<div class="search-field__result-list js-search-result"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		{$content}
		<footer class="footer">
			<div class="wrapper">
				<div class="footer__second">
				<div class="social">
					<a target="_blank" href="https://vk.com/club_citygrad" class="social__link social__link_vk"></a>
					<a target="_blank" href="https://www.instagram.com/citygrad/" class="social__link social__link_in"></a>
					<a target="_blank" href="https://www.facebook.com/center.citygrad/" class="social__link social__link_fb"></a><br><br>
				</div>
				<div class="footer__social">
						<div class="likely likely-small likely-light">
							<div class="vkontakte">Поделиться</div>
							<div class="facebook">Поделиться</div>
							<div class="twitter">Твитнуть</div>
						</div>
				</div>

					<div class="footer__copyright">© 2015, Торгово-развлекательный центр «ГРАД»</div>

					<div class="footer__email">
						<!--<a href="mailto:razvitie@zhdanovichi.by">razvitie@zhdanovichi.by</a>-->
					</div>
				</div>

				<div class="footer__main">
					<div class="footer__contacts">
						<strong>По&nbsp;вопросам рекламы и&nbsp;маркетинга:</strong><br>
						тел.: +375 17 399-33-02<br>
						факс.: +375 17 379-63-80<br>
						с 10:00 до 19:00<br>
						e-mail: <a href="mailto:reklama@citygrad.by">reklama@citygrad.by</a>
			
					</div>

					<div class="footer__contacts">
						<strong>По вопросам аренды торговых помещений:</strong><br>
						тел.: +375 17 399-33-02<br>
						факс.: +375 17 379-63-80<br>
						с 10:00 до 19:00<br>
						e-mail: <a href="mailto:arenda@citygrad.by">arenda@citygrad.by</a><br><br>
					</div>
				</div>

				<div class="footer__dev">
					<a href="https://axora.by/" target="_blank" class="dev">
						<img src="design/{$settings->theme|escape}/images/dev.png" alt="" class="dev__img">
						<span class="dev__title">Разработка сайта</a>
				</div>
			</div>
		</footer>

		<div class="scheme-tooltip js-scheme-tooltip"></div>

		<div class="responsive-helper responsive-helper_lg"></div>
		<div class="responsive-helper responsive-helper_md"></div>
		<div class="responsive-helper responsive-helper_sm"></div>
		<div class="responsive-helper responsive-helper_xs"></div>
		{literal}
		<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80338199-26', 'auto');
  ga('send', 'pageview');


</script>
		{/literal}
		{literal}
		<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter34243470 = new Ya.Metrika({
                    id:34243470,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/34243470" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
{/literal}
{literal}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71465519-1', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
  
</script>
{/literal}
</body>
</html>
