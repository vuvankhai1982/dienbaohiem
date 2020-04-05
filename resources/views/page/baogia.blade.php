@extends('layouts.layout')
@section('NoiDung')

		<!-- Start Pages Title  -->

		<section id="Page-title" class="Page-title-Style2">
			<div class="color-overlay"></div>
			<div class="container inner-img">
				<div class="row">
					<div class="Page-title">
						<div class="col-md-12 text-center">
							<div class="title-text">
								<h6>Great Service</h6>
								<h2 class="page-title">Get a quote</h2>
							</div>
						</div>
						<div class="col-md-12 text-center">
							<div class="breadcrumb-trail breadcrumbs">
								<span class="trail-begin"><a href="#">Home</a></span>
								<span class="sep">/</span> <span class="trail-end">Get a quote</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- End Pages Title  -->

		<!-- Start 404 page -->

		<section id="get-a-quote" class="light-wrapper">
			<div class="container inner">
				<div class="row">
                    <div class="col-md-8 get-quote-section">

                        <div class="get-quote-form">

                            <form class="leave-comment contact-form" autocomplete="on" id="contact-form"  name="contact-form" method="post" action="php/send.php">
                                <fieldset>
                                    <div id="formstatus"></div>
                                    <div class="Contact-us">
                                        <div class="form-input col-md-12">
                                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                                        </div>
                                        <div class="form-input col-md-12">
                                            <input type="email" id="email" name="email" placeholder="Email" required>
                                        </div>
                                        <div class="form-input col-md-12">
                                            <input type="text" id="subject" name="subject" placeholder="Subject">
                                        </div>
                                        <div class="form-input col-md-12">
                                            <textarea class="txt-box textArea" id="message" name="message" cols="40" rows="7"  placeholder="Message" spellcheck="true" required></textarea>
                                        </div>
                                        <div class="form-submit col-md-12">
                                            <input type="submit" id="submit" class="btn common-btn" value="Send Message">
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="single-team-icons">
                            <img src="source/images/team/single-agent-v1.png" alt="">
                            <br> <br>
                            <a href="#"><i class="teamicon fa fa-facebook"></i></a>
                            <a href="#"><i class="teamicon fa fa-twitter"></i></a>
                            <a href="#"><i class="teamicon fa fa-linkedin"></i></a>
                            <br> <br>
                        </div>

                    </div>
				</div>
			</div>
		</section>

		<!-- End  404 page -->

@endsection
