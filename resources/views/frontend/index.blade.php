@extends('frontend.layout')

@section('content')
    <div id="slider">
        <!-- revolution slider begin -->
        <div class="fullwidthbanner-container">
            <div id="revolution-slider">
                <ul>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="2500" data-delay="5000">
                        <!--  BACKGROUND IMAGE -->
                        <img src="/my_images/slider1.jpg" alt="">

{{--                        <div class="tp-caption lft custom-font-2" data-x="center" data-y="184" data-speed="800" data-start="800" data-easing="easeInOutCubic">--}}
{{--                            The Best Theme For Insurance Companies--}}
{{--                        </div>--}}

                        <div class="tp-caption sfb custom-font-1" data-x="center" data-y="250" data-speed="800" data-start="1400" data-easing="easeInOutCubic">
                             <span> Bảo vệ cuộc sống và gia đình bạn!</span>
                        </div>

{{--                        <div class="tp-caption sfb" data-x="center" data-y="380" data-speed="800" data-start="1600" data-easing="easeInOutCubic">--}}
{{--                            <a class="btn btn-slider" href="#">Buy Theme</a>&nbsp;&nbsp;<a class="btn btn-border-slider" href="#">Get A Quote</a>--}}
{{--                        </div>--}}
                    </li>

                    <li data-transition="fade" data-slotamount="7" data-masterspeed="2500" data-delay="5000">
                        <!--  BACKGROUND IMAGE -->
                        <img src="/my_images/slider2.jpg" alt="">

                        <div style="color: rgb(230, 134, 22)" class="tp-caption sfb custom-font-1" data-x="center" data-y="250" data-speed="800" data-start="1400" data-easing="easeInOutCubic">
                            Chăm sóc ý tế chu đáo, tận tình
                        </div>

                    </li>
                </ul>
            </div>
        </div>
        <!-- revolution slider close -->
    </div>

    <main>
        <!-- Start Our Services -->

        <!-- ======= Welcome section ======= -->
        <section class="main-service-content">
            <div class="container inner">
                <div class="row main-service-heading">
                    <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                        <h2 class="headline">Tại sao lại chọn <br>Chúng tôi</h2>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel interdum tellus. Suspendisse leo libero, sollicitudin a commodo vel, facilisis vitae diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <!-- End Row -->
                <div class="row welcome main-service">
                    <div class="col-lg-6 col-md-12">
                        <div class="main-service-box">
                            <img src="/my_images/img1.png" alt="images" class="img-intro">
                            <div class="main-service-description">
                                <h3>Bảo vệ trụ cột chính trong gia đình</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                        <div class="main-service-box main-service-box_bottom">
                            <img src="/my_images/img2.jpg" alt="images" class="img-intro">
                            <div class="main-service-description">
                                <h3>Bảo vệ thu nhập khi rủi ro bệnh tật</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 bottom_row">
                        <div class="main-service-box">
                            <img src="/my_images/img3.png" alt="images" class="img-intro">
                            <div class="main-service-description">
                                <h3>Quỹ tiết kiệm tài chính có kỷ luật</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                        <div class="main-service-box main-service-box_bottom">
                            <img src="/my_images/img4.png" alt="images" class="img-intro">
                            <div class="main-service-description">
                                <h3>Chăm Sóc Sức Khỏe với dịch vụ cao cấp</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Row -->
            </div>
            <!-- End container -->
        </section>
        <!-- End main-service-content -->
        <!-- ======= /Welcome section ======= -->

        <!-- End Our Services -->

        <!-- Start Our Projects -->

        <section id="Projects" class="whitesmoke-wrapper">
            <div class="container inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title-section text-left">
                            <h3>CÁC GÓI BẢO HIỂM DAI-ICHI LIFE</h3>
                        </div>
                    </div>
                </div>
                <div class="divcod55"></div>
                <div class="row insurance-service-all" style="height: 630px">

                    <div class="col-md-12">
                        <div class="insurance-coverage">
                            <div class="insurance-service-content">
                                <div class="single-insurance" style="margin-right: 10px">
                                    <div class="single-insurance-content">
                                        <img style="width: 65px;" class="icon icon-responsive " src="/my_images/basic.png" alt="null" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" />
                                        <h3><a href="insurance_single.html">Gói Cơ Bản</a></h3>
                                        <div class="price">210 Triệu<sup>/ Bệnh/Năm</sup></div>
                                        <!-- Lista de Caracteristicas / Propiedades -->
                                        <ul class="table-list">
                                            <li><span>Bảo vệ 210 triệu/ bệnh. Bảo vệ cả ung thư, bệnh hiểm nghèo. Không giới hạn số bệnh, số lần chi trả. </span></li>
                                            <li><span>Bảo lãnh thanh toán viện phí tại hơn 60 bệnh viện quốc tế (VINMEC, VIỆT PHÁP,...). </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                        </ul>
                                        <div class="read-more">
                                            <a href="insurance_single.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-insurance" style="margin-right: 10px">
                                    <div class="single-insurance-content">
                                        <img style="width: 110px;" class="icon icon-responsive " src="/my_images/Paper-Plane.png" alt="null" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" />
                                        <h3><a href="insurance_single.html">Nâng Cao</a></h3>
                                        <div class="price">420 Triệu<sup>/ Bệnh/Năm</sup></div>
                                        <!-- Lista de Caracteristicas / Propiedades -->
                                        <ul class="table-list">
                                            <li><span>Bảo vệ 210 triệu/ bệnh. Bảo vệ cả ung thư, bệnh hiểm nghèo. Không giới hạn số bệnh, số lần chi trả. </span></li>
                                            <li><span>Bảo lãnh thanh toán viện phí tại hơn 60 bệnh viện quốc tế (VINMEC, VIỆT PHÁP,...). </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                        </ul>
                                        <div class="read-more">
                                            <a href="insurance_single.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-insurance" style="margin-right: 10px">
                                    <div class="single-insurance-content">
                                        <img style="width: 90px;" class="icon icon-responsive " src="/my_images/Arcturion_Diamond.png" alt="null" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" />
                                        <h3><a href="insurance_single.html">Toàn Diện</a></h3>
                                        <div class="price">630 Triệu<sup>/ Bệnh/Năm</sup></div>
                                        <!-- Lista de Caracteristicas / Propiedades -->
                                        <ul class="table-list">
                                            <li><span>Bảo vệ 210 triệu/ bệnh. Bảo vệ cả ung thư, bệnh hiểm nghèo. Không giới hạn số bệnh, số lần chi trả. </span></li>
                                            <li><span>Bảo lãnh thanh toán viện phí tại hơn 60 bệnh viện quốc tế (VINMEC, VIỆT PHÁP,...). </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                            <li><span>Đóng phí 15 năm, Bảo vệ 25 năm. Cả gia đình có thể tham gia chỉ cần 1 hợp đồng bảo hiểm </span></li>
                                        </ul>
                                        <div class="read-more">
                                            <a href="insurance_single.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- End Our Projects -->

        <!-- Start Our Why Us -->

        <section id="Why_Us" class="light-wrapper">
            <div class="container inner">
                <div class="row">
                    <div class="col-md-6">
                        <div class="title-section text-left">
                            <p>AWESOME FEATURES</p>
                            <h3>WHY METLIFE !</h3>
                        </div>
                        <div class="divcod40"></div>
                        <!-- Shortcode #5
                            ===================================== -->
                        <div id="shortcode-5" class="shortcode-5 pb-50">

                            <!-- .row end -->
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="panel-group accordion accordions-style1" id="accordion02" role="tablist" aria-multiselectable="true">

                                        <!-- Panel 01 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-1" aria-expanded="true" aria-controls="collapse02-1"> Thu nhập bao nhiêu mới có thể tham gia bảo hiểm nhân thọ?. </a>
                                                    <span class="icon"></span>
                                                </h4>
                                            </div>
                                            <div id="collapse02-1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Tham gia bảo hiểm nhân thọ bao với mệnh giá bao nhiêu là tùy thuộc vào khả năng kinh tế của gia định bạn. Trên thực tế không phải người giàu mới mua được bảo hiểm nhân thọ Vì bạn có nhiều thì tham gia nhiều tiền và ngược lại. Nhưng theo chúng tôi bạn nên tham gia số tiền bằng 10-20% trên tổng thu nhập của bạn hàng tháng. Ko nên tham giá quá nhiều tiền hoặc quá ít tiền.

                                                            Bạn có thể tham khảo thêm bài viết: <a href="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/mua-bao-hiem-nhan-tho-bao-nhieu-tien/">https://baohiem-daiichi.vn/cau-hoi-thuong-gap/mua-bao-hiem-nhan-tho-bao-nhieu-tien/</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 02 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingTwo">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-2" aria-expanded="false" aria-controls="collapse02-2"> Tôi nên chọn đóng phí quý hay năm? </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Đống phí quý hay năm là tùy thuộc vào nguồn tài chính của bạn. Nhưng Theo tư vấn của các chuyên gia tài chính thì: Trường hợp bạn có nguồn thu nhập ổn định VD như thu nhập từ lương và ko có các nguồn khác thì bạn nên chọn đóng phí quý.

                                                            Nếu bạn là người kinh doanh và thu nhập của bạn lúc nhiều lúc ít tùy theo thị trường, sản phẩm của bạn kinh doanh thì bạn nên chọn đóng phí theo năm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 03 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingThree">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-3" aria-expanded="false" aria-controls="collapse02-3"> Khi nào thì tôi nên tham gia bảo hiểm nhân thọ </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Nên tham gia càng sớm càng tốt. Tham gia sớm mức phí bảo hiểm sẽ thấp hơn, và cơ hội được duyệt hồ sơ cao hơn. Tham gia muộn mức phí sẽ cao hơn, và còn không được duyệt hồ sơ nếu sức khỏe suy giảm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingFour">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-4" aria-expanded="false" aria-controls="collapse02-4"> Bao nhiêu tuôi thì được tham gia bảo hiểm nhân thọ?</a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Độ tuổi tham gia cho phép từ 01 tháng tuổi tới 65 tuổi.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 05-->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingFive">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-5" aria-expanded="false" aria-controls="collapse02-5">Bảo hiểm Dai-ichi life có phải của Nhật Bản không</a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Công ty bảo hiểm nhân thọ Dai ichi life là công ty 100% vốn của Nhật Bản. Chất lượng và dịch vụ hàng đầu tại Việt Nam. Bạn nên tham khảo bảo viết bên dưới:

                                                            https://baohiem-daiichi.vn/gioi-thieu/</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 06-->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingSix">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion02" href="#collapse02-6" aria-expanded="false" aria-controls="collapse02-6">Tôi đã có bảo hiểm y tế của công ty mua cho vậy tôi có nên mua thêm bảo hiểm nhân thọ không?.</a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Nếu tài chính của bạn ổn và bạn đã hiểu về bảo hiểm nhân thọ thì tốt nhất bạn nên tham gia. Vì bảo hiểm nhân thọ có nhiều sản phẩm và tính năng ưu việt hơn rất nhiều bảo các loại bảo hiểm của nhà nước.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- End .Accordion-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 get-quote-section">
                        <div class="title-section text-left">
                            <p>IN THE NEWS</p>
                            <h3>GET A QUOTE</h3>
                        </div>
                        <div class="divcod40"></div>
                        <div class="get-quote-form">
                            @include('frontend.contact')
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- End Our Why Us -->

        <!-- Start Our Testimonials -->

        <section id="Testimonials" class="whitesmoke-wrapper">
            <div class="container inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title-section text-left">
                            <p>About us</p>
                            <h3>Meet our insurance agency</h3>
                        </div>
                        <div class="description-welcome text-left">
                            <p>MetLife is a insurace theme. Perfectly suited for insurance company, Find the Perfect Home Loan, Mortgage, Home Service.</p>

                        </div>
                    </div>
                </div>
                <div class="divcod55"></div>
                <!-- Start Out Team Area V-3 -->
                <div class="row">
                    <div class="team-item col-xs-12 col-sm-6 col-md-3">
                        <div class="team-item-block">
                            <div class="team-thumb">
                                <img src="images/team/ps-8.jpg" alt="Mahmoud ADel Baghagho">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    <div class="team-icons">
                                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-team">
                                <h5>Mahmoud ADel Baghagho</h5>
                                <p class="team-company">Company Founder</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-item col-xs-12 col-sm-6 col-md-3">
                        <div class="team-item-block">
                            <div class="team-thumb">
                                <img src="images/team/ps-5.jpg" alt="Katie Willmore">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    <div class="team-icons">
                                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-team">
                                <h5>Katie Willmore</h5>
                                <p class="team-company">Agent</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-item col-xs-12 col-sm-6 col-md-3">
                        <div class="team-item-block">
                            <div class="team-thumb">
                                <img src="images/team/ps-6.jpg" alt="Angelica Watson">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    <div class="team-icons">
                                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-team">
                                <h5>Angelica Watson</h5>
                                <p class="team-company">Agent</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-item col-xs-12 col-sm-6 col-md-3">
                        <div class="team-item-block">
                            <div class="team-thumb">
                                <img src="images/team/ps-7.jpg" alt="Aeni Doe">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    <div class="team-icons">
                                        <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                                        <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-team">
                                <h5>Aeni Doe</h5>
                                <p class="team-company">Agent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Out Team Area V-3 -->

            </div>
        </section>

        <!-- End Our Testimonials -->

        <!-- Start Our Vision -->

        <section id="happy-customers" class="light-wrapper">
            <div class="container inner">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title-section text-left">
                            <p>OUR VISION</p>
                            <h3>Best insurances for everyone</h3>
                        </div>
                        <div class="description-welcome text-left">
                            <p>MetLife is a global provider of Life insurance, annuities, employee benefits and assets management. MetLife has operations in nearly 50 countries serving approximately 100 million coustomers. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

                        </div>
                    </div>
                </div>
                <div class="divcod55"></div>

                <div class="row">

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-mobile el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="987">
                                <span class="factor color-primary"></span>
                            </div>
                            <span class="fact-title">Satisfied Customers</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-desktop el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="5">
                                <span class="factor color-success"></span>
                            </div>
                            <span class="fact-title">professional agents</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-wallet el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="10">
                                <span class="factor color-warning"></span>
                            </div>
                            <span class="fact-title">insurances in our offer</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-briefcase el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="15">
                                <span class="factor color-danger"></span>
                            </div>
                            <span class="fact-title">years of experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- start Slider  -->
        <div class="container inner">
            <div class="row">
                <div id="owl-demo" class="owl-carousel owl-theme"style="border:2px solid #f0f0f0;border-radius: 2px;">
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/thebank.png" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/agribank.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/viettinbank.png" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/vbank.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/acb.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/mb-bank.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/vietcombank.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/unnamed.jpg" alt="">
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src="/images/slider/bidv.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <!-- end Slider  -->
        <!-- End Our Vision  -->
    </main>
@endsection
