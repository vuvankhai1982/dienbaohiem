@extends('layouts.layout')
@section('NoiDung')

		<!-- Start Pages Title  -->

		<section id="Page-title" class="Page-title-Style3">
			<div class="color-overlay"></div>
			<div class="container inner-img">
				<div class="row">
					<div class="Page-title">
						<div class="col-md-12 text-center">
							<div class="title-text">
								<h6>We Wanna Hear You</h6>
								<h2 class="page-title">Contact Us</h2>
							</div>
						</div>
						<div class="col-md-12 text-center">
							<div class="breadcrumb-trail breadcrumbs">
								<span class="trail-begin"><a href="#">Home</a></span>
								<span class="sep">/</span> <span class="trail-end">Contact</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- End Pages Title  -->


		<!-- Start Contact Us -->

		<div id="Contact" class="light-wrapper">
			<div class="container inner">
				<div class="row">
					<div class="col-md-12">
						<!-- Start Map Style1 -->
						<div id="Map-Style" class="light-wrapper">
							<div id="map_canvas"></div>
							<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;signed_in=true"></script>
							<script>
								// This example displays a marker at the center of Australia.
								// When the user clicks the marker, an info window opens.

								function initialize() {
									var myLatlng = new google.maps.LatLng(38.6692501, -78.5463);
									var mapOptions = {
										zoom: 10,
										center: myLatlng,
										zoomControl: false,
										scaleControl: false,
										scrollwheel: false,
										disableDoubleClickZoom: true,
									};

									var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

									var contentString = '<div id="content">' +
											'<h3>metlife.</h3><p>3453 corn street, Sanford, FL 34232</p>' +
											'</div>';

									var infowindow = new google.maps.InfoWindow({
										content: contentString
									});

									var marker = new google.maps.Marker({
										position: myLatlng,
										map: map,
										title: 'Uluru (Ayers Rock)'
									});
									google.maps.event.addListener(marker, 'click', function() {
										infowindow.open(map, marker);
									});
								}

								google.maps.event.addDomListener(window, 'load', initialize);
							</script>

						</div>
						<!-- End Map Style1 -->
					</div>
				</div>
				<div class="divcod70"></div>
				<div class="row">
					<div class="col-md-8">
						<div class="row">
							<div class="Contact-Form">
								<form class="leave-comment contact-form" autocomplete="on" id="contact-form"  name="contact-form" method="post" action="php/send.php">
									<fieldset>
										<div id="formstatus"></div>
										<div class="Contact-us">
											<div class="form-input col-md-6">
												<input type="text" id="name" name="name" placeholder="Your Name" required>
											</div>
											<div class="form-input col-md-6">
												<input type="email" id="email" name="email" placeholder="Email" required>
											</div>
											<div class="form-input col-md-12">
												<input type="text" id="subject" name="subject" placeholder="Subject">
											</div>
											<div class="form-input col-md-12">
												<textarea class="txt-box textArea" id="message" name="message" cols="40" rows="7"  placeholder="Message" spellcheck="true" required></textarea>
											</div>
											<div class="form-submit col-md-12">
												<input type="submit" id="submit" class="btn btn-large main-bg" value="Send Message">
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="Contact-Info">
							<h4>Contact Details</h4>
							<div class="tex-contact">
								<p>Lorem ipsum dolor sit amet, adipiscing condimentum tristique vel, eleifend sed turpis. Amet, consectetur adipising elit Integer.</p>
							</div>
							<div class="Block-Contact col-md-12">

								<ul>
									<li>
										<i class="fa fa-phone"></i>
										<span>+0 (123) 456 - 7890</span>
									</li>
									<li>
										<i class="fa fa-fax"></i>
										<span>+0 (123) 456 - 7890</span>
									</li>
									<li>
										<i class="fa fa-envelope"></i>
										<span>demo@metlife.com</span>
									</li>
									<li>
										<i class="fa fa-map-marker"></i>
										<span>3453 corn street, Sanford, FL 34232.</span>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- End Contact Us -->

@endsection
