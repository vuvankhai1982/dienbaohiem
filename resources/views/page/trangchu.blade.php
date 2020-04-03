@extends('layouts.layout')
@section('NoiDung')
    <!-- slider -->
    <div id="slider">
        <!-- revolution slider begin -->
        <div class="fullwidthbanner-container">
            <div id="revolution-slider">
                <ul>
                    @foreach($slide as $sl)
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="2500" data-delay="5000">
                        <!--  BACKGROUND IMAGE -->
                        <img src="source/img-rev-slider/{{$sl->image}}" alt="">

                        <div class="tp-caption lft custom-font-2" data-x="center" data-y="184" data-speed="800"
                             data-start="800" data-easing="easeInOutCubic">
                            The Best Theme For Insurance Companies
                        </div>

                        <div class="tp-caption sfb custom-font-1" data-x="center" data-y="250" data-speed="800"
                             data-start="1400" data-easing="easeInOutCubic">
                            Say Hello To <span>MetLife !</span>
                        </div>

                        <div class="tp-caption sfb" data-x="center" data-y="380" data-speed="800" data-start="1600"
                             data-easing="easeInOutCubic">
                            <a class="btn btn-slider" href="#">Buy Theme</a>&nbsp;&nbsp;<a
                                class="btn btn-border-slider" href="#">Get A Quote</a>
                        </div>
                    </li>
                    @endforeach
{{--
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="2500" data-delay="5000">
                        <!--  BACKGROUND IMAGE -->
                        <img src="source/img-rev-slider/slider2.jpg" alt="">

                        <div class="tp-caption lft custom-font-2" data-x="center" data-y="184" data-speed="800"
                             data-start="800" data-easing="easeInOutCubic">
                            Hello, We Offer You The Best Theme
                        </div>

                        <div class="tp-caption sfb custom-font-1" data-x="center" data-y="250" data-speed="800"
                             data-start="1400" data-easing="easeInOutCubic">
                            Protecting You and your Family
                        </div>

                        <div class="tp-caption sfb" data-x="center" data-y="380" data-speed="800" data-start="1600"
                             data-easing="easeInOutCubic">
                            <a class="btn btn-slider" href="#">Buy Theme</a>&nbsp;&nbsp;<a
                                class="btn btn-border-slider" href="#">Get A Quote</a>
                        </div>
                    </li>

                    <li data-transition="fade" data-slotamount="7" data-masterspeed="2500" data-delay="5000">
                        <!--  BACKGROUND IMAGE -->
                        <img src="source/img-rev-slider/slider3.jpg" alt="">

                        <div class="tp-caption lft custom-font-2" data-x="center" data-y="184" data-speed="800"
                             data-start="800" data-easing="easeInOutCubic">
                            Hello, We Offer You The Best Theme
                        </div>

                        <div class="tp-caption sfb custom-font-1" data-x="center" data-y="250" data-speed="800"
                             data-start="1400" data-easing="easeInOutCubic">
                            Friendly Staff <span>MetLife !</span>
                        </div>

                        <div class="tp-caption sfb" data-x="center" data-y="380" data-speed="800" data-start="1600"
                             data-easing="easeInOutCubic">
                            <a class="btn btn-slider" href="#">Buy Theme</a>&nbsp;&nbsp;<a
                                class="btn btn-border-slider" href="#">Get A Quote</a>
                        </div>
                    </li>--}}
                </ul>
            </div>
        </div>
        <!-- revolution slider close -->
    </div>
    <!-- slider close -->

    <main>
        <!-- Start Our Services -->

        <!-- ======= Welcome section ======= -->
        <section class="main-service-content">
            <div class="container inner">
                <div class="row main-service-heading">
                    <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                        <h2 class="headline">CHÚNG TÔI CUNG CẤP <br>CÁC SẢN PHẨM BẢO HIỂM</h2>
                        <div class="sologun-icon"><span class="ti-announcement"></span></div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel interdum tellus.
                            Suspendisse leo libero, sollicitudin a commodo vel, facilisis vitae diam.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.</p>
                    </div>
                </div>
                <!-- End Row -->
                <div class="row welcome main-service">
                    <div class="col-lg-6 col-md-12">
                        <div class="main-service-box">
                            <img src="source/images/service/mortgage-1.png" alt="images">
                            <div class="main-service-description">
                                <h3>Find A Mortgage</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                        <div class="main-service-box main-service-box_bottom">
                            <img src="source/images/service/home-insurance-1.png" alt="images">
                            <div class="main-service-description">
                                <h3>Find Insurance</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 bottom_row">
                        <div class="main-service-box">
                            <img src="source/images/service/home-service-1.png" alt="images">
                            <div class="main-service-description">
                                <h3>Find A Home Service</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipis civelit sed quia non numquam eius modi.</p>
                            </div>
                        </div>
                        <div class="main-service-box main-service-box_bottom">
                            <img src="source/images/service/consulting-1.png" alt="images">
                            <div class="main-service-description">
                                <h3>Consulting</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipis civelit sed quia non numquam eius modi.</p>
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
                            <p>CHÚNG TÔI CUNG CẤP</p>
                            <h3>CÁC SẢN PHẨM BẢO HIỂM</h3>

                        </div>
                        <div class="description-welcome text-left">
                            <p>Insurance coverage around your needs is easier than you think. Sometimes on purpose
                                injected humour and the like simple dummy.</p>

                        </div>
                    </div>
                </div>
                <div class="divcod55"></div>
                <div class="row insurance-service-all">
                    <div class="col-md-12">
                        <div class="insurance-coverage">
                            <div class="insurance-service-content">
                                <div class="container">
                                    <div class="col-md-4 col-sm-4">
                                        <div class="single-insurance">
                                            <div class="single-insurance-content">
                                                <img src="source/images/insurance/img1.jpg" alt="Aeni Doe">
                                                <span class="ti-check-box"></span>
                                                <h3><a href="insurance_single.html">Bảo Hiểm Chăm Sóc Sức Khỏe</a>
                                                </h3>
                                                <p>Đồng hành với một sản phẩm chính là các sản phẩm bổ xung giúp bảo
                                                    vệ toàn diện bạn và gia đình trước những rủi ro trong cuộc sống,
                                                    các sản phẩm bổ .</p>
                                                <div class="read-more">
                                                    <a href="insurance_single.html">Xem Thêm</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="single-insurance">
                                            <div class="single-insurance-content">
                                                <img src="source/images/insurance/img2.jpg" alt="Aeni Doe">
                                                <span class="ti-check-box"></span>
                                                <h3><a href="insurance_single.html">An Phúc Hưng Thịnh Toàn Diện</a>
                                                </h3>
                                                <p>Một giải pháp tài chính toàn diện, mang đến sự bảo vệ trước những
                                                    rủi ro trong cuộc sống và đầu tư sinh lợi hiệu quả với lãi suất
                                                    theo sát mức lãi suất.</p>
                                                <div class="read-more">
                                                    <a href="insurance_single.html">Xem Thêm</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4  col-sm-4">
                                        <div class="single-insurance">
                                            <div class="single-insurance-content">
                                                <img src="source/images/insurance/img3.jpg" alt="Aeni Doe">
                                                <span class="ti-check-box"></span>
                                                <h3><a href="insurance_single.html">An Tâm Hưng Thịnh Toàn Diện</a>
                                                </h3>
                                                <p>An Tâm Hưng Thịnh Toàn Diện là giải pháp tài chính chủ động và
                                                    linh hoạt giúp bạn dễ dàng cân bằng được những ưu tiên, đạt được
                                                    các kỳ vọng …</p>
                                                <div class="read-more">
                                                    <a href="insurance_single.html">Xem Thêm</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Insurance coverage End Here -->
                </div>
            </div>

        </section>

        <!-- End Our Projects -->

        <!-- Start gia goi so -->
        <section class="ftco-section bg-light">
            <div class="container">
                <div class="col-md-12">
                    <div class="title-section text-left">
                        <h3 style="margin: 0 0 30px 0;">CÁC GÓI BẢO HIỂM</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 ftco-animate">
                        <div class="pricing-entry pb-5 text-center">
                            <div>
                                <h3 class="mb-4"><b>GÓI CƠ BẢN</b></h3>
                                <p><span class="price">210 Triệu</span> <span class="per">Bệnh/ Năm</span></p>
                            </div>
                            <ul>
                                <li>Diagnostic Services</li>
                                <li>Professional Consultation</li>
                                <li>Tooth Implants</li>
                                <li>Surgical Extractions</li>
                                <li>Teeth Whitening</li>
                            </ul>
                            <p class="button text-center"><a href="get-a-quote.html" class="btn btn-primary px-4 py-3">Đăng Ký Tư
                                    Vấn</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 ftco-animate">
                        <div class="pricing-entry pb-5 text-center">
                            <div>
                                <h3 class="mb-4"><b>GÓI NÂNG CAO</b></h3>
                                <p><span class="price">420 Triệu</span> <span class="per">Bệnh/ Năm</span></p>
                            </div>
                            <ul>
                                <li>Diagnostic Services</li>
                                <li>Professional Consultation</li>
                                <li>Tooth Implants</li>
                                <li>Surgical Extractions</li>
                                <li>Teeth Whitening</li>
                            </ul>
                            <p class="button text-center"><a href="get-a-quote.html" class="btn btn-primary px-4 py-3">Đăng Ký Tư
                                    Vấn</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 ftco-animate">
                        <div class="pricing-entry active pb-5 text-center">
                            <div>
                                <h3 class="mb-4"><b>TOÀN DIỆN</b></h3>
                                <p><span class="price">630 Triệu</span> <span class="per">Bệnh/ Năm</span></p>
                            </div>
                            <ul>
                                <li>Diagnostic Services</li>
                                <li>Professional Consultation</li>
                                <li>Tooth Implants</li>
                                <li>Surgical Extractions</li>
                                <li>Teeth Whitening</li>
                            </ul>
                            <p class="button text-center"><a href="get-a-quote.html" class="btn btn-primary px-4 py-3">Đăng Ký Tư
                                    Vấn</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="ftco-section bg-light">
            <div class="container">
                <div class="col-md-12">
                    <div class="title-section text-left">
                        <h3 style="margin: 0 0 30px 0;">TIN TƯC & SỰ KIỆN</h3>
                    </div>
                </div>
                <div class="row">
                    @foreach($tintuc as $tt)
                    <div class="col-md-4 ftco-animate">
                        <div class="blog-entry">
                            <a href="{{$tt->link}}"
                               class="block-20"
                               style="background-image: url('{{$tt->link_image}}');">
                             {{--
                              <div class="meta-date text-center p-2">
                                    <span class="day">23</span>
                                    <span class="mos">January</span>
                                    <span class="yr">2019</span>
                                </div>
                                --}}
                            </a>
                            <div class="text bg-white p-4">
                                <h3 class="heading"><a
                                        href="{{$tt->link}}">{{$tt->title}}</a></h3>
                                <p>{{$tt->content}}</p>
                                <div class="d-flex align-items-center mt-4">
                                    <p class="mb-0"><a
                                            href="{{$tt->link}}"
                                            class="btn btn-primary">Đọc Thêm <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
  {{--
                    <div class="col-md-4 ftco-animate">
                        <div class="blog-entry">
                            <a href="blog-sihttps://tuoitre.vn/covid-19-thong-tin-cac-khu-cach-ly-tap-trung-o-ha-noi-qua-tai-la-sai-20200318102853206.htmngle.html"
                               class="block-20"
                               style="background-image: url('https://cdn.tuoitre.vn/thumb_w/586/2020/2/24/phat-khau-trang-noi-bai-15813330747771453242507-1582465301320242868531-15824654794501550891468-1read-only-1582509457276132088840.png');">
                                <div class="meta-date text-center p-2">
                                    <span class="day">23</span>
                                    <span class="mos">January</span>
                                    <span class="yr">2019</span>
                                </div>
                            </a>
                            <div class="text bg-white p-4">
                                <h3 class="heading"><a
                                        href="https://tuoitre.vn/covid-19-thong-tin-cac-khu-cach-ly-tap-trung-o-ha-noi-qua-tai-la-sai-20200318102853206.htm">COVID-19:
                                        Thông tin các khu cách ly tập trung ở Hà Nội quá tải là sai</a></h3>
                                <p>TTO - Thông tin các khu cách ly tập trung ở Hà Nội quá tải do phải đón số lượng
                                    lớn người nước ngoài về nước là không chính xác. Hà Nội có đầy đủ kiều kiện,
                                    nhân lực, trang thiết bị y tế, khu vực cách ly để phòng chống kiểm soát
                                    dịch.</p>
                                <div class="d-flex align-items-center mt-4">
                                    <p class="mb-0"><a
                                            href="https://tuoitre.vn/covid-19-thong-tin-cac-khu-cach-ly-tap-trung-o-ha-noi-qua-tai-la-sai-20200318102853206.htm"
                                            class="btn btn-primary">Đoc Thêm <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ftco-animate">
                        <div class="blog-entry">
                            <a href="https://baoquocte.vn/thong-tin-moi-nhat-ve-37-benh-nhan-covid-19-dang-dieu-tri-tai-viet-nam-111553.html"
                               class="block-20"
                               style="background-image: url('https://baoquocte.vn/stores/news_dataimages/thanhtruc/032020/15/18/viet-nam-thong-tin-moi-nhat-ve-37-benh-nhan-covid-19-dang-dieu-tri.jpg');">
                                <div class="meta-date text-center p-2">
                                    <span class="day">23</span>
                                    <span class="mos">January</span>
                                    <span class="yr">2019</span>
                                </div>
                            </a>
                            <div class="text bg-white p-4">
                                <h3 class="heading"><a
                                        href="https://baoquocte.vn/thong-tin-moi-nhat-ve-37-benh-nhan-covid-19-dang-dieu-tri-tai-viet-nam-111553.html">Thông
                                        tin mới nhất về 37 bệnh nhân Covid-19 đang điều trị tại Việt Nam</a></h3>
                                <p>TGVN. Bộ Y tế cho biết, tình hình sức khỏe của phần lớn các bệnh nhân đang ổn
                                    định. Có một trường hợp bệnh nhân cao tuổi người Anh phải thở máy. </p>
                                <div class="d-flex align-items-center mt-4">
                                    <p class="mb-0"><a
                                            href="https://baoquocte.vn/thong-tin-moi-nhat-ve-37-benh-nhan-covid-19-dang-dieu-tri-tai-viet-nam-111553.html"
                                            class="btn btn-primary">Đọc Thêm <span
                                                class="ion-ios-arrow-round-forward"></span></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
--}}

                </div>
            </div>
        </section>

        <!-- End gia goi so -->

        <!-- Start Our Why Us -->

        <section id="Why_Us" class="light-wrapper">
            <div class="container inner">
                <div class="row">
                    <div class="col-md-6">
                        <div class="title-section text-left">
                            <h3>CÂU HỎI THƯỜNG GẶP!</h3>
                        </div>
                        <div class="divcod40"></div>
                        <!-- Shortcode #5
                            ===================================== -->
                        <div id="shortcode-5" class="shortcode-5 pb-50">

                            <!-- .row end -->
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="panel-group accordion accordions-style1" id="accordion02"
                                         role="tablist" aria-multiselectable="true">

                                        <!-- Panel 01 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle" role="button" data-toggle="collapse"
                                                       data-parent="#accordion02" href="#collapse02-1"
                                                       aria-expanded="true" aria-controls="collapse02-1"> Thu nhập
                                                        bao nhiêu mới có thể tham gia bảo hiểm nhân thọ?. </a>
                                                    <span class="icon"></span>
                                                </h4>
                                            </div>
                                            <div id="collapse02-1" class="panel-collapse collapse in"
                                                 role="tabpanel" aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Tham gia bảo hiểm nhân thọ bao với mệnh giá bao nhiêu là
                                                            tùy thuộc vào khả năng kinh tế của gia định bạn. Trên
                                                            thực tế không phải người giàu mới mua được bảo hiểm nhân
                                                            thọ Vì bạn có nhiều thì tham gia nhiều tiền và ngược
                                                            lại. Nhưng theo chúng tôi bạn nên tham gia số tiền bằng
                                                            10-20% trên tổng thu nhập của bạn hàng tháng. Ko nên
                                                            tham giá quá nhiều tiền hoặc quá ít tiền.

                                                            Bạn có thể tham khảo thêm bài viết:
                                                            https://baohiem-daiichi.vn/cau-hoi-thuong-gap/mua-bao-hiem-nhan-tho-bao-nhieu-tien/</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 02 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingTwo">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-2" aria-expanded="false"
                                                       aria-controls="collapse02-2">Tôi nên chọn đóng phí quý hay
                                                        năm?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-2" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Đống phí quý hay năm là tùy thuộc vào nguồn tài chính của
                                                            bạn. Nhưng Theo tư vấn của các chuyên gia tài chính thì:
                                                            Trường hợp bạn có nguồn thu nhập ổn định VD như thu nhập
                                                            từ lương và ko có các nguồn khác thì bạn nên chọn đóng
                                                            phí quý.

                                                            Nếu bạn là người kinh doanh và thu nhập của bạn lúc
                                                            nhiều lúc ít tùy theo thị trường, sản phẩm của bạn kinh
                                                            doanh thì bạn nên chọn đóng phí theo năm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 03 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingThree">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-3" aria-expanded="false"
                                                       aria-controls="collapse02-3">Khi nào thì tôi nên tham gia bảo
                                                        hiểm nhân thọ</a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-3" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Nên tham gia càng sớm càng tốt. Tham gia sớm mức phí bảo
                                                            hiểm sẽ thấp hơn, và cơ hội được duyệt hồ sơ cao hơn.
                                                            Tham gia muộn mức phí sẽ cao hơn, và còn không được
                                                            duyệt hồ sơ nếu sức khỏe suy giảm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="headingFour">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-4" aria-expanded="false"
                                                       aria-controls="collapse02-4"> Bao nhiêu tuôi thì được tham
                                                        gia bảo hiểm nhân thọ?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-4" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">

                                                        <p>Độ tuổi tham gia cho phép từ 01 tháng tuổi tới 65
                                                            tuổi.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="heading5">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-5" aria-expanded="false"
                                                       aria-controls="collapse02-5"> Tôi là người trụ cột trong gia
                                                        định (người kiếm tiền chính trong gia đinh). Tôi nên mua bảo
                                                        hiểm nhân thọ cho con cái trước hay mua cho bản thân tôi
                                                        trước?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-5" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">

                                                        <p>Nên tham gia cho bố mẹ (người trụ cột) trước. Thu nhập
                                                            của bố mẹ rất quan trọng trong gia đình và con cái. Do
                                                            đó cần bảo vệ thu nhập của bố mẹ trong mọi hoàn cảnh có
                                                            thể xảy ra. Khi có điều kiện, mỗi người trong gia đình
                                                            nên có 1 hợp đồng bảo hiểm riêng biệt để được bảo vệ tốt
                                                            nhất. Hoặc để tiết kiệm bạn có thể tham gia cho bạn
                                                            trước sau đó mua thêm cho con bạn gói chăm sóc sức khỏe
                                                            để bảo vệ sức khỏe cho con bạn..</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="heading6">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-6" aria-expanded="false"
                                                       aria-controls="collapse02-6"> Phí tham gia bảo hiểm phụ thuộc
                                                        vào các yếu tố nào?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-6" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">
                                                        <p>Trên thực tế ko có bảng giá cố định khi tham gia bảo
                                                                hiểm nhân thọ. Một số yếu tố quyết định phí tham gia bảo
                                                                hiểm nhân thọ như:</p><br>

                                                        <p> - Tuổi: tuổi càng cao thì phí tham gia bảo hiểm càng cao
                                                            và ngược lại.</p>
                                                        <p> - Giới tính: Phí bảo hiểm của Nam giới sẽ cao hơn của Nữ
                                                            giới.</p>
                                                        <p> - Nghề nghiệp: Những nghành nghề có múc độ rủi ro cao
                                                            hơn sẽ có mức phí cao hơn và ngược lại.</p>
                                                        <p> - Sức khỏe: những người có sức khỏe tốt ít hoặc không có
                                                            tiền sử bệnh sẽ có mức phí thấp hơn và ngược
                                                            lại..</p></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="heading7">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-7" aria-expanded="false"
                                                       aria-controls="collapse02-7"> Tôi nêm mua sản phẩm bảo hiểm
                                                        nào là tốt nhất?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-7" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">

                                                        <p>Hiện ở Việt Nam có khoảng 18 công ty bảo hiểm nhân thọ
                                                            với hàng trăm sản phẩm bảo hiểm khác nhau. Trên thực tế
                                                            không có sản phẩm nào là tốt nhất mà chỉ có sản phẩm phù
                                                            hợp nhất với bạn mà thôi. Hãy liên hệ với đội ngũ tư vấn
                                                            của chúng tôi để được tư vấn sản phẩm bảo hiểm phù hợp
                                                            nhất với bạn và gia đình nhé.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Panel 04 -->
                                        <div class="panel panel-default section-content">
                                            <div class="panel-heading" role="tab" id="heading8">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" role="button"
                                                       data-toggle="collapse" data-parent="#accordion02"
                                                       href="#collapse02-8" aria-expanded="false"
                                                       aria-controls="collapse02-8"> Tôi đã có bảo hiểm y tế của
                                                        công ty mua cho vậy tôi có nên mua thêm bảo hiểm nhân thọ
                                                        không?. </a>
                                                </h4>
                                            </div>
                                            <div id="collapse02-8" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="tap-inner" style="display: block;">

                                                        <p>Nếu tài chính của bạn ổn và bạn đã hiểu về bảo hiểm nhân
                                                            thọ thì tốt nhất bạn nên tham gia. Vì bảo hiểm nhân thọ
                                                            có nhiều sản phẩm và tính năng ưu việt hơn rất nhiều bảo
                                                            các loại bảo hiểm của nhà nước.</p>
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
                            <h3>ĐĂNG KÝ TƯ VẤN</h3>
                        </div>
                        <div class="divcod40"></div>
                        <div class="get-quote-form">

                            <form class="leave-comment contact-form" autocomplete="on" id="contact-form"
                                  name="contact-form" method="post" action="php/send.php">
                                <fieldset>
                                    <div id="formstatus"></div>
                                    <div class="Contact-us">
                                        <div class="form-input col-md-12">
                                            <input type="text" id="name" name="name"
                                                   placeholder="Họ & Tên* - VD: Phạm Thị Hoa" required>
                                        </div>
                                        <div class="form-input col-md-12">
                                            <input type="text" id="sdt" name="sdt"
                                                   placeholder="Số điện thoại liên hệ* - VD:0909999999" required>
                                        </div>
                                        <div class="form-input col-md-12">
                                            <input type="email" id="email" name="email"
                                                   placeholder="Email của bạn* - VD: hoapham@gmail.com" required>
                                        </div>
                                        <div class="form-input col-md-12">
                                            <input type="text" id="diachi" name="diachi"
                                                   placeholder="Tỉnh - Thành - VD: TP.HCM">
                                        </div>

                                        <div class="form-input col-md-12">
                                            <input type="text" id="namsinh" name="namsinh"
                                                   placeholder="Ngày tháng năm sinh của bạn* - VD:20/02/2020">
                                        </div>
                                        <div class="form-input col-md-12">
                                                <textarea class="txt-box textArea" id="message" name="message" cols="40"
                                                          rows="7"
                                                          placeholder="Viết các yêu cầu tư vấn khác của bạn nếu có."
                                                          spellcheck="true" required></textarea>
                                        </div>
                                        <div class="form-submit col-md-12">
                                            <input type="submit" id="submit" class="btn common-btn"
                                                   value="Xác nhận và gửi đi">
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
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
                            <p>VỀ CHÚNG TÔI</p>
                            <h3>GẶP CƠ QUAN BẢO HIỂM CỦA CHÚNG TÔI</h3>
                        </div>
                        <div class="description-welcome text-left">
                            <p>MetLife is a insurace theme. Perfectly suited for insurance company, Find the Perfect
                                Home Loan, Mortgage, Home Service.</p>

                        </div>
                    </div>
                </div>
                <div class="divcod55"></div>
                <!-- Start Out Team Area V-3 -->
                <div class="row">
                    <div class="team-item col-xs-12 col-sm-6 col-md-3">
                        <div class="team-item-block">
                            <div class="team-thumb">
                                <img src="source/images/team/img01.jpg" alt="Mahmoud ADel Baghagho">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
                                <img src="source/images/team/img02.jpg" alt="Katie Willmore">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
                                <img src="source/images/team/img03.jpg" alt="Angelica Watson">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
                                <img src="source/images/team/img04.jpg" alt="Aeni Doe">
                                <div class="team-overlay">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
                            <p>TẦM NHÌN CỦA CHÚNG TÔI</p>
                            <h3>BẢO HIỂM TỐT NHẤT CHO MỌI NGƯỜI</h3>
                        </div>
                        <div class="description-welcome text-left">
                            <p>MetLife is a global provider of Life insurance, annuities, employee benefits and
                                assets management. MetLife has operations in nearly 50 countries serving
                                approximately 100 million coustomers. Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.</p>

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
                            <span class="fact-title">KHÁCH HÀNG HÀI LÒNG</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-desktop el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="5">
                                <span class="factor color-success"></span>
                            </div>
                            <span class="fact-title">ĐẠI LÝ CHUYÊN NGHIỆP</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-wallet el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="10">
                                <span class="factor color-warning"></span>
                            </div>
                            <span class="fact-title">BẢO HIỂM TRONG ĐỀ NGHỊ CỦA CHÚNG TÔI</span>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                        <span class="icon-briefcase el-icon3x"></span>
                        <div class="fact">
                            <div class="fact-number timer" data-perc="15">
                                <span class="factor color-danger"></span>
                            </div>
                            <span class="fact-title">SỐ NĂM KINH NGHIỆM</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- End Our Vision  -->
    </main>

@endsection
