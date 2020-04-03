<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10"><![endif]-->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>WEB BẢO HIỂM</title>
    <base href="{{asset('')}}">
    <link rel="shortcut icon" href="source/images/favicon.png">
    <link rel="stylesheet" href="source/css/icon/et-line-font.css">
    <!-- reset CSS -->
    <link href="source/css/reset.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="source/css/bootstrap.min.css" rel="stylesheet">
    <!-- icon CSS -->
    <link href="source/css/font-awesome.css" rel="stylesheet">
    <link href="source/css/Stroke-Gap-Icons.css" rel="stylesheet">
    <!-- Themify icons -->
    <link href="source/css/themify-icons/themify-icons.css" rel="stylesheet">

    <link href="source/css/hover.css" rel="stylesheet">
    <link href="source/css/animate.css" rel="stylesheet">
    <!-- Revelation Slider -->
    <link href="source/rs-plugin/css/rev-settings.css" rel="stylesheet">
    <link href="source/rs-plugin/css/settings.css" rel="stylesheet">

    <!-- owl carousel CSS -->
    <link href="source/css/owl.carousel.css" rel="stylesheet">
    <link href="source/css/owl.theme.css" rel="stylesheet">
    <!-- Main style CSS -->
    <link href="source/css/style.css" rel="stylesheet">
    <!-- Responsive CSS -->
    <link href="source/css/responsive.css" rel="stylesheet">
    <!-- them CSS -->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="source/js/html5shiv.js"></script>
    <script src="source/https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<!-- Start Loading -->

<section class="loading-overlay">
    <div class="Loading-Page">
        <h1 class="loader">Loading...</h1>
    </div>
</section>

<!-- End Loading  -->


<div class="content-wrap">
    <div id="home" class="body-wrapper">

        <!-- Start Header  -->
        <header class="full-header">
            <div id="top-bar" class="top-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6 hidden-xs">
                            <ul class="list-inline top-contact list-inline top-widget">
                                <li>
                                    <p>Phone:
                                        <span>+ 2 0106 5371234</span>
                                    </p>
                                </li>
                                <li>
                                    <p>Email:
                                        <span>demo@metlife.com</span>
                                    </p>
                                </li>
                                <li class="top-social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                                </li>
                            </ul>
                        </div>
                        <!-- .col-md-6 end -->

                        <!-- .col-md-6 end -->
                    </div>
                </div>
            </div>
            <nav id="primary-menu" class="navbar style-1">
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
                            <a class="logo" href="/public/trangchu">
                                <img src="source/images/logo/logo.jpg" alt="Yellow Hats" style="width: 150px">
                            </a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-left">
                                <li class="has-dropdown active">
                                    <a href="/public/trangchu" class="dropdown-toggle">Trang Chủ</a>
                                </li>

                                <!-- li end -->
                                <li class="has-dropdown">
                                    <a href="/public/gioithieu" class="dropdown-toggle">Giới Thiệu</a>
                                </li>
                                <!-- li end -->
                                <li class="has-dropdown">
                                    <a href="/public/goibaohiem" class="dropdown-toggle">Gói Bảo Hiểm</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="/public/baogia">Báo Giá<span class="new">New</span></a>
                                        </li>
                                        <li>
                                            <a href="/public/goibaohiem">Các Gói Bảo Hiểm</a>
                                        </li>

                                    </ul>
                                </li>
                                <!-- li end -->
                                <li class="has-dropdown">
                                    <a href="#" class="dropdown-toggle">Hỗ Trợ Khách Hàng</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="/public/ykien">Ý Kiến Khách Hàng</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQS</a>
                                        </li>
                                    </ul>
                                </li>
                                <!-- li end -->

                                <li class="has-dropdown">
                                    <a href="/public/blog" class="dropdown-toggle">Blog</a>
                                </li>
                                <!-- li end -->

                                <!-- li end -->
                                <li class="has-dropdown pull-left margin-right-zero">
                                    <a href="/public/lienhe" class="dropdown-toggle">Liên Hệ</a>
                                </li>
                                <!-- li end -->
                            </ul>


                        </div>
                        <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
            </nav>
        </header>
        <!-- End  Header -->
       @yield('NoiDung')


        <!-- Start Footer -->

        <footer id="footer" class="site-footer">
            <div id="template-footer" role="contentinfo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 to-animate">
                            <h3 class="section-header section-title">Về chúng tôi</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel interdum tellus.
                                Suspendisse leo libero, sollicitudin a commodo vel, facilisis vitae diam.</p>
                            <p class="copy-right">&copy; 2016 MetLife Premium Template. <br>All Rights Reserved. <br>
                                Designed by <a href="#" target="_blank">http://demo.com/</a>
                            </p>
                            <div class="copyright">
                                <label class="footer-link"><a href="#">Privacy Policy</a> - <a href="#">Terms of Use</a></label>
                            </div>
                        </div>

                        <div class="col-md-4 to-animate">
                            <h3 class="section-header section-title">Địa chỉ của chúng tôi</h3>
                            <ul class="contact-info">
                                <li><span><i class="fa fa-home"></i>3453 corn street, Sanford, FL 34232.</span></li>
                                <li><span><i class="fa fa-phone"></i>+ 1235 2355 34</span></li>
                                <li><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="#">info@contact.com</a>
                                </li>
                                <li><i class="fa fa-share-square-o"></i><a href="#">www.demo.com</a></li>
                            </ul>
                            <h3 class="section-header section-title">Kết nối với chúng tôi</h3>
                            <ul class="social-media">
                                <li><a href="#" class="facebook"><i class="icon-facebook"></i></a></li>
                                <li><a href="#" class="twitter"><i class="icon-twitter"></i></a></li>
                                <li><a href="#" class="google-plus"><i class="icon-googleplus"></i></a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 to-animate">
                            <h3 class="section-header section-title">Touch with Us</h3>
                            <div id="quickmessage"></div>
                            <form class="contact-form" method="post" action="#" name="contactform" id="contactform">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="quickname"
                                           placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" id="quickemail"
                                           placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <textarea name="comments" class="form-control" id="comments" rows="7"
                                              placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" id="btn-submit" class="btn btn-send-message btn-md"
                                           value="Send Message">
                                </div>
                            </form>
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
<script type="text/javascript" src="source/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="source/js/bootstrap.min.js"></script>

<!-- SLIDER REVOLUTION SCRIPTS  -->
<script type="text/javascript" src="source/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript" src="source/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script type="text/javascript" src="source/rs-plugin/js/revslider-custom.js"></script>

<script type="text/javascript" src="source/js/jquery.nicescroll.min.js"></script>
<script type="text/javascript" src="source/js/jquery.easing.min.js"></script>
<script type="text/javascript" src="source/js/jquery.fancybox.js"></script>
<script type="text/javascript" src="source/js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="source/js/jquery.fancybox-media.js"></script>
<script type="text/javascript" src="source/js/jquery.inview.min.js"></script>

<script type="text/javascript" src="source/js/modernizr.custom.js"></script>
<script type="text/javascript" src="source/js/classie.js"></script>
<script type="text/javascript" src="source/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="source/js/wow.min.js"></script>
<script type="text/javascript" src="source/js/jquery.appear.js"></script>
<script type="text/javascript" src="source/js/jquery.countTo.js"></script>
<script type="text/javascript" src="source/js/smoothscroll.js"></script>
<!--  Form validate -->
<script src="source/js/jqueryvalidate/jquery.validate.min.js"></script>
<!--  Form submit  -->
<script src="source/js/jqueryform/jquery.form.min.js"></script>
<script type="text/javascript" src="source/js/custom.js"></script>

<script type="text/javascript">
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
        })
    })
</script>


</body>


</html>
