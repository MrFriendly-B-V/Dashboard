<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="utf-8">
		<?php require "../common_include.php"; ?>

        <!--Stylesheets-->
        <link rel="stylesheet" type="text/css" href="css/master.min.css">

        <title> MrFriendly Dashboard </title>
    </head>
    <body>
		<!--This webpage does not work without JavaScript enabled-->
		<noscript>
            <p> This page requires JavaScript to be enabled to function.</p>
		</noscript>

		<?php
			//Check if the user is authenticated to visit this page
			$from = "https://intern.mrfriendly.nl/dashboard"; 
			require "../common_login.php";
		?>

        <div class="root">

		    <!--Navigation bar-->
			<header>
				<div class="nav-container">
					<a href="https://mrfriendly.nl/"><img alt="logo" class="logo" src="images/logo.png"></a>
					<ul class="navlist">
						<li><a href="" class="active"> Dashboard </a></li>
						<li><a href="https://mrfriendly.nl"> Website </a></li>
					</ul>
				</div>
			</header>

			<!--Widgets, i.e. where the links to individual pages are located-->
			<main>
				<div class="panels">

					<!--EspoCRM -->
					<div class="widget">
						<img alt="espocrm" src="images/espocrm-logo.png">
						<p> EspoCRM </p>
					</div>

					<!--CRMQuery-->
					<a href="/crmquery">
						<div class="widget">
							<img alt="espocrm" src="images/espocrm-logo.png">
							<p> CRMQuery </p>
						</div>
					</a>

					<!--TBD-->
					<div class="widget">
						<img alt="espocrm" src="images/espocrm-logo.png">
						<p> EspoCRM </p>
					</div>

					<!--TBD-->
					<div class="widget">
						<img alt="espocrm" src="images/espocrm-logo.png">
						<p> EspoCRM </p>
					</div>
				</div>
			</main>
        </div>
    </body>
</html>