<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10"><![endif]-->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="/images/favicon.png">
    <title>Bao hiem</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/css/icon/et-line-font.css">
    <!-- reset CSS -->
    <link href="/css/reset.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <!-- icon CSS -->
    <link href="/css/font-awesome.css" rel="stylesheet">
    <link href="/css/Stroke-Gap-Icons.css" rel="stylesheet">
    <!-- Themify icons -->
    <link href="/css/themify-icons/themify-icons.css" rel="stylesheet">

    <link href="/css/hover.css" rel="stylesheet">
    <link href="/css/animate.css" rel="stylesheet">
    <!-- Revelation Slider -->
    <link href="/rs-plugin/css/rev-settings.css" rel="stylesheet">
    <link href="/rs-plugin/css/settings.css" rel="stylesheet">

    <!-- owl carousel CSS -->
    <link href="/css/owl.carousel.css" rel="stylesheet">
{{--    <link href="/css/owl.theme.css" rel="stylesheet">--}}
    <!-- Main style CSS -->
    <link href="/css/style.css" rel="stylesheet">
    <!-- Responsive CSS -->
    <link href="/css/responsive.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- css-slide -->
    {{--    <link rel="stylesheet" href="owlcarousel/assets/owl.carousel.min.css">--}}
{{--    <link rel="stylesheet" href="owlcarousel/assets/owl.theme.default.min.css">--}}

    <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>


    <![endif]-->

    <style>
        /*!*=========== custom style ===============*!*/
        /*@font-face {*/
        /*    font-family: 'Futura';*/
        /*    src: url('elle-futura-book?#iefix') format('embedded-opentype'), url('/elle-futura-book.woff') format('woff'), url('elle-futura-book.ttf') format('truetype'), url('elle-futura-book.svg#brandon_textbold') format('svg');*/
        /*}*/
        /*body{*/
        /*    font-family: Futura, sans-serif!important;*/
        /*}*/

        .img-intro {
            width: 178px;
            height: 178px;
            border-radius: 90px;
        }
    </style>

</head>

<body>
<!-- Start Loading -->

<section class="loading-overlay">
    <div class="Loading-Page">
        <h1 class="loader">Loading...</h1>
    </div>
</section>


<div class="content-wrap">
    <div id="home" class="body-wrapper">

        <!-- Start Header  -->
        <header class="full-header">
            <div id="top-bar" class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                            <ul class="list-inline top-contact">
                                <li>
                                    <p>
                                        Phone: <span>0973.564.638</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Email: <span>lyminhdien@gmail.com</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="primary-menu" class="navbar style-1" style="-webkit-box-shadow: 10px 10px 5px -5px rgba(176,169,176,1);-moz-box-shadow: 10px 10px 5px -5px rgba(176,169,176,1);box-shadow: 10px 10px 5px -5px rgba(176,169,176,1);">
                <div class="row">
                    <div class="container mobile-heading">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="logo" href="/">
                                <img src="/images/logo/logo1.png" style="height: 80px; " alt="Yellow Hats">
                            </a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-left">
                                <li class="">
                                    <a href="{{ route('show_post', get_sanitize_url('gioi-thieu', 1)) }}">Giới thiệu</a>
                                </li>

                                <li class="">
                                    <a href="{{ route('show_post', get_sanitize_url('lien-he', 2)) }}">Liên hệ</a>
                                </li>
                                <li class="has-dropdown">
                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">Insurance</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="get-a-quote.html">Get a quote <span class="new">New</span></a>
                                        </li>
                                        <li>
                                            <a href="insurance_all.html">Insurance All</a>
                                        </li>
                                        <li>
                                            <a href="insurance_single.html">Insurance Single</a>
                                        </li>
                                        <li>
                                            <a href="make_a_claim.html">Make A Claim</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="has-dropdown">
                                    <a href="{{ route('get_posts') }}">Tin tức</a>
                                </li>
                            </ul>
                        </div>
                        <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
            </nav>
        </header>
        <!-- End  Header -->

    @yield('content')

    <!-- Start Footer -->

        <footer id="footer" class="site-footer">
            <div id="template-footer" role="contentinfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 to-animate">
                            <h3 class="section-header section-title">Giới Thiệu.</h3>
                            <p>Với hệ thông cộng sự trên 64 tỉnh thành Chúng tôi cam kết đặt lợi ích của khách hàng lên
                                hàng đầu làm tôn chỉ làm việc, với sứ mệnh đưa bảo hiểm nhân thọ Dai-ichi life đến với
                                mỗi gia đình Việt.</p>
                            <p class="copy-right">&copy; 2016 Dai-ichi life Việt Nam. <br>All Rights Reserved. <br>
                                Designed by <a href="http://mrfinance.vn" target="_blank">http://mrfinance.vn</a>
                            </p>
                            <div class="copyright">
                                <label class="footer-link"><a href="#">Privacy Policy</a> - <a href="#">Terms of Use</a></label>
                            </div>
                        </div>

                        <div class="col-md-6 to-animate">
                            <h3 class="section-header section-title">Thông Tin Liên Hệ.</h3>
                            <ul class="contact-info">
                                <li><span><i class="fa fa-home"></i>49B Hùng Vương Phường 4 Quận 5, HCM.</span></li>
                                <li><span><i class="fa fa-phone"></i>0973.564.638</span></li>
                                <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a
                                        href="#">lyminhdien@gmail.com</a></li>
                                <li><i class="fa fa-share-square-o"></i><a href="http://mrfinance.vn">http://mrfinance.vn</a>
                                </li>
                            </ul>
                            <h3 class="section-header section-title">Kết nối với chúng tôi.</h3>
                            <ul class="social-media">
                                <li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
                                <li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
                                <li><a href="#" class="google-plus"><i class="icon-googleplus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- End Footer  -->


    </div>

    <!-- Back to top Link -->
    <div id="to-top" class="main-bg"><span class="fa fa-chevron-up"></span></div>

</div>

<!-- Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="/js/bootstrap.min.js"></script>

<!-- SLIDER REVOLUTION SCRIPTS  -->
<script type="text/javascript" src="/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript" src="/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script type="text/javascript" src="/rs-plugin/js/revslider-custom.js"></script>

<script type="text/javascript" src="/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="/js/jquery.easing.min.js"></script>
<script type="text/javascript" src="/js/jquery.fancybox.js"></script>
<script type="text/javascript" src="/js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="/js/jquery.fancybox-media.js"></script>
<script type="text/javascript" src="/js/jquery.inview.min.js"></script>

<script type="text/javascript" src="/js/modernizr.custom.js"></script>
<script type="text/javascript" src="/js/classie.js"></script>
<script type="text/javascript" src="/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="/js/wow.min.js"></script>
<script type="text/javascript" src="/js/jquery.appear.js"></script>
<script type="text/javascript" src="/js/jquery.countTo.js"></script>
{{--<script type="text/javascript" src="/js/smoothscroll.js"></script>--}}
<!--  Form validate -->
<script src="/js/jqueryvalidate/jquery.validate.min.js"></script>
<!--  Form submit  -->
<script src="/js/jqueryform/jquery.form.min.js"></script>
<script type="text/javascript" src="/js/custom.js"></script>
<!-- js-slide -->
{{--<script type="text/javascript" src="owlcarousel/owl.carousel.min.js"></script>--}}
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $(function () {
        "use strict";
        $(".fact-number").appear(function () {
            var t = $(this).attr("data-perc");
            $(this).each(function () {
                $(this).find(".factor").delay(6e3).countTo({
                    from: 10,
                    to: t,
                    speed: 3e3,
                    refreshInterval: 50
                })
            })
        });

        $('#submit-contact').click(function (e) {
            e.preventDefault();

            $.ajax({
                data: $(this).parents('form').serialize(),
                type: "POST",
                url: `{{ route('send_contact') }}`,
                success: function (result) {
                    console.log(result);
                    console.log('done');
                },
                error: function (error) {
                    console.log('error');
                }
            });
        });
    })


</script>
<script>
    $(document).ready(function () {
        $('.slider-brand').owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoPlay: true,
            autoplayHoverPause: true,
            slideSpeed: 200,
        });
    });
</script>
</body>
</html>
