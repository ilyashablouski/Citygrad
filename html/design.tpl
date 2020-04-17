
<section class="entertainment">
	<header class="entertainment__header entertainment__header_cosmo">
		<div class="wrapper">
			<ul class="reset-list entertainment__nav">
				<li class="entertainment__nav-item">
					<a href="cosmo" class="entertainment__nav-link is-active"><span class="entertainment__nav-link-text">Космо</span></a>
				</li>
				<li class="entertainment__nav-item">
					<a href="shpil" class="entertainment__nav-link"><span class="entertainment__nav-link-text">Шпиль</span></a>
				</li>
			</ul>

			<h1 class="entertainment__title">
				<span class="entertainment__subtitle">семейно-Развлекательный центр </span>
				<span class="entertainment__title-text">КОСМО</span>
			</h1>

			<div class="entertainment__header-content"><strong>10−22, без выходных <a href="tel:+37529173776223">+375 17 377-62-23</a></strong><br>6-й этаж, вход со стороны панорамных лифтов<br></div>
		</div>
	</header>

	{if $config->cosmo_gallery_dir}

		{$path = "{$config->root_dir}{$config->cosmo_gallery_dir}"}
		{$images_gallery = scandir($path)}
		{if $images_gallery}
			{$images_gallery = preg_grep('/\\.(?:png|gif|jpe?g)$/', $images_gallery)}
			<!-- {natsort($images_gallery)} -->
			<section class="entertainment__gallery">
				<div class="gallery js-gallery" data-hold="700" data-effect="slide" data-up="100px">
					<div class="fotorama" data-nav="thumbs" data-width="100%"{*  data-ratio="1902/1268" *} data-loop="true" data-thumbwidth="121" data-thumbheight="57">
					{foreach $images_gallery as $image}
						<img src="{$config->cosmo_gallery_dir}{$image}" alt="{$image}">
					{/foreach}
					</div>
				</div>
			</section>
		{/if}
	{/if}

	<section class="entertainment__main entertainment__main_cosmo">
		<div class="wrapper">
			<header class="entertainment__main-header">
				<h2 class="entertainment__main-title">День Рождения в КОСМО!</h2>
				<p class="entertainment__main-text">Профессиональные аниматоры и&nbsp;авторские праздничные программы сделают праздник по-настоящему веселым и&nbsp;интересным</p>
			</header>

			<section class="entertainment__content">
				<div class="entertainment__content-row">
					<div class="entertainment__content-col entertainment__content-col_2">
						<section class="entertainment__item">
							<section class="entertainment__item-content">
								<h3 class="entertainment__item-title">Боулинг</h3>
								<p>8 дорожек, оборудованных современной системой контроля игры</p>
							</section>
							<img src="design/{$settings->theme|escape}/images/entertainment/e_4.jpg" alt="" class="entertainment__item-image">
						</section>
					</div>

					<div class="entertainment__content-col entertainment__content-col_1">
						<section class="entertainment__item">
							<img src="design/{$settings->theme|escape}/images/entertainment/e_5.jpg" alt="" class="entertainment__item-image">
							<section class="entertainment__item-content">
								<h3 class="entertainment__item-title">Лабиринт</h3>
								<p>Огромный детский лабиринт  с  пятиметровыми горками, запутанными тоннелями, подвесными мостами</p>
							</section>
						</section>
					</div>
				</div>

				<div class="entertainment__content-row">
					<div class="entertainment__content-col entertainment__content-col_1">
						<section class="entertainment__item">
							<section class="entertainment__item-content">
								<h3 class="entertainment__item-title">Аттракционы</h3>
								<p>Для самых маленьких детей от года до пяти лет работает игровая зона "Городок", где малыш сможет найти увлекательные приключения</p>
							</section>
							<img src="design/{$settings->theme|escape}/images/entertainment/e_6.jpg" alt="" class="entertainment__item-image">
						</section>
					</div>

					<div class="entertainment__content-col entertainment__content-col_2">
						<section class="entertainment__item">
							<section class="entertainment__item-content mob-hidden">
								<h3 class="entertainment__item-title">&nbsp;</h3>
								<p><br><br><br></p>
							</section>
							<section class="entertainment__item-content">
								<h3 class="entertainment__item-title">Кафе-пиццерия</h3>
								<p>Блюда для детей, а также пицца, бургеры, горячие блюда</p>
							</section>
							<img src="design/{$settings->theme|escape}/images/entertainment/e_7.jpg" alt="" class="entertainment__item-image">
						</section>

						<section class="entertainment__item entertainment__item_small">
							<img src="design/{$settings->theme|escape}/images/entertainment/e_8.jpg" alt="" class="entertainment__item-image">
							<section class="entertainment__item-content">
							</section>
						</section>

					</div>
				</div>
			</section>
		</div>
	</section>
</section>
