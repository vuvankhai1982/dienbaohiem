@extends('frontend.layout')
@section('content')
    <style id="the7-fancy-title-css" type="text/css">.fancy-header {
            background-image: url(https://baohiem-daiichi.vn/wp-content/uploads/2019/05/pic6.jpg);
            background-repeat: no-repeat;
            background-position: left bottom;
            background-attachment: scroll;
            background-size: cover;
            background-color: #222
        }

        .fancy-header .wf-wrap {
            min-height: 700px;
            padding-top: 0;
            padding-bottom: 0
        }

        .fancy-header .fancy-title {
            font-size: 46px;
            line-height: 46px;
            color: #ba0b0b;
            text-transform: none
        }

        .fancy-header .fancy-subtitle {
            font-size: 18px;
            line-height: 26px;
            color: #fff;
            text-transform: uppercase
        }

        .fancy-header .breadcrumbs {
            color: #fff
        }

        .fancy-header-overlay {
            background: rgba(0, 0, 0, .5)
        }

        @media screen and (max-width: 778px) {
            .fancy-header .wf-wrap {
                min-height: 0
            }

            .fancy-header .fancy-title {
                font-size: 30px;
                line-height: 38px
            }

            .fancy-header .fancy-subtitle {
                font-size: 20px;
                line-height: 28px
            }

            .fancy-header.breadcrumbs-mobile-off .breadcrumbs {
                display: none
            }

            #fancy-header > .wf-wrap {
                -webkit-flex-flow: column wrap;
                flex-flow: column wrap;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;
                padding-bottom: 0px !important
            }

            .fancy-header.title-left .breadcrumbs {
                text-align: center;
                float: none
            }

            .breadcrumbs {
                margin-bottom: 10px
            }

            .breadcrumbs.breadcrumbs-bg {
                margin-top: 10px
            }

            .fancy-header.title-right .breadcrumbs {
                margin: 10px 0 10px 0
            }

            #fancy-header .hgroup, #fancy-header .breadcrumbs {
                text-align: center
            }

            .fancy-header .hgroup {
                padding-bottom: 5px
            }

            .breadcrumbs-off .hgroup {
                padding-bottom: 5px
            }

            .title-right .hgroup {
                padding: 0 0 5px 0
            }

            .title-right.breadcrumbs-off .hgroup {
                padding-top: 5px
            }

            .title-left.disabled-bg .breadcrumbs {
                margin-bottom: 0
            }
        }</style>
    <header id="fancy-header" class="fancy-header breadcrumbs-mobile-off content-left">
        <div class="wf-wrap">
            <div class="fancy-title-head hgroup"><h1
                    class="fancy-title entry-title color-accent start-animation-done start-animation">
                    <span>Sản phẩm</span></h1></div>
            <div class="assistive-text">You are here:</div>
            <ol class="breadcrumbs text-small start-animation-done start-animation"
                xmlns:v="http://rdf.data-vocabulary.org/#">
                <li typeof="v:Breadcrumb"><a rel="v:url" property="v:title" href="https://baohiem-daiichi.vn/" title="">Home</a>
                </li>
                <li class="current">Sản phẩm</li>
            </ol>
        </div>
    </header>
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <script type="application/ld+json">{
                    "@context": "https://schema.org/",
                    "@type": "Insurance Agency",
                    "@id": "https://baohiem-daiichi.vn/",
                    "url": "https://baohiem-daiichi.vn/",
                    "logo": "https://baohiem-daiichi.vn/wp-content/uploads/2019/04/logo-dai-ichi-160.png",
                    "image": "https://baohiem-daiichi.vn/wp-content/uploads/2017/11/tru-so-chinh-dai-ichi-life-viet-nam.jpg",
                    "priceRange": "1000$-30000$",
                    "hasMap": "https://g.page/baohiemnhanthodaiichilife?share",
                    "email": "mailto:info@baohiem-daiichi.vn			",
                    "founder": "Dai-ichi",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Quậnn 5",
                        "addressCountry": "VIỆT NAM",
                        "addressRegion": "Hồ Chí Minh",
                        "postalCode": "700000",
                        "streetAddress": "Số 49B Đường Hùng Vương, Phường 4, Quận 5, Hồ Chí Minh 700000, Việt Nam"
                    },
                    "description": "Bảo hiểm nhân thọ Dai ichi life Việt Nam, 100% vốn từ Nhật Bản, Dai ichi life công ty BHNT tốt nhất Việt Nam. Sản phẩm chất lượng uy tín, dịch vụ hoàn hảo.",
                    "name": "Bảo hiểm nhân thọ Dai-ichi life",
                    "telephone": "0937-068-573",
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "08:30",
                            "closes": "18:00"
                        },
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Saturday"
                            ],
                            "opens": "8:30",
                            "closes": "11:30"
                        }
                    ],
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "10.7630297",
                        "longitude": "106.6605977"
                    },
                    "potentialAction": {
                        "@type": "ReserveAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://baohiem-daiichi.vn/lien-he/",
                            "inLanguage": "vn",
                            "actionPlatform": [
                                "http://schema.org/DesktopWebPlatform",
                                "http://schema.org/IOSPlatform",
                                "http://schema.org/AndroidPlatform"
                            ]
                        },
                        "result": {
                            "@type": "Reservation",
                            "name": "đăng kí"
                        }
                    },
                    "sameAs": [
                        "https://www.facebook.com/baohiem.daiichi.54",
                        "https://www.youtube.com/channel/UCp-e5tCH98GzJFVxtltLgwQ?view_as=subscriber",
                        "https://twitter.com/daiichi_life",
                        "https://www.instagram.com/baohiem.daiichivn/",
                        "https://www.linkedin.com/in/daiichilife/",
                        "https://www.pinterest.com/baohiemdaiichilife/",
                        "https://medium.com/@daiichilife",
                        "https://www.tumblr.com/blog/daiichilife"
                    ]
                }</script>
                <script type="application/ld+json">{
                    "@context": "http://schema.org",
                    "@type": "Person",
                    "name": "Dai-ichi",
                    "jobTitle": "Ceo",
                    "image": "https://baohiem-daiichi.vn/wp-content/uploads/2019/04/logo-dai-ichi-160.png",
                    "worksFor": "Bảo hiểm nhân thọ Dai-ichi life",
                    "url": "https://baohiem-daiichi.vn/",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Ho Chi Minh",
                        "addressRegion": "vietnam"
                    }
                }</script>
                <div id="content" class="content" role="main">
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1490526340467 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                        <div class="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498750429084">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-39515ea288d6878d5"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-39515ea288d6878d5 uvc-7810 color-title accent-title-color"
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-39515ea288d6878d5 h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:20px;&quot;,&quot;line-height&quot;:&quot;desktop:26px;&quot;}">
                                            <h2 style="font-weight:bold;color:#ff2a00;margin-bottom:5px;font-size: 20px;">AN TÂM HƯNG
                                                THỊNH TOÀN DIỆN</h2></div>
                                        <div class="uvc-sub-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-39515ea288d6878d5 .uvc-sub-heading "
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:34px;&quot;,&quot;line-height&quot;:&quot;desktop:40px;&quot;}"
                                             style="font-family:'Open Sans Condensed';font-weight:700;margin-bottom:20px;">
                                            TIẾT KIỆM CHỈ 10% THU NHẬP BẢO VỆ CẢ GIA ĐÌNH
                                        </div>
                                    </div>
                                    <div class="shortcode-single-image-wrap alignnone "
                                         style="margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; width:800px;">
                                        <div class="shortcode-single-image">
                                            <div class="fancy-media-wrap layzr-bg" style=""><img
                                                    class="preload-me lazy-load"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20465%20290&#39;%2F%3E"
                                                    data-src="https://baohiem-daiichi.vn/wp-content/uploads/2019/05/daiichi-465x290.jpg"
                                                    data-srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/05/daiichi-465x290.jpg 465w"
                                                    width="465" height="290"
                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/print/"
                                                    style="" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element  vc_custom_1556786959675">
                                        <div class="wpb_wrapper"><p>An Tâm Hưng Thịnh Toàn Diện là giải pháp tài chính
                                                chủ động và linh hoạt giúp bạn dễ dàng cân bằng được những ưu tiên, đạt được
                                                các kỳ vọng và hơn hết đảm bảo an toàn tài chính cho chính bạn và gia đình
                                                thân yêu để thật sự làm chủ tương lai.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div class="standard-number-list bullet-top">
                                        <ul>
                                            <li>Bảo vệ sức khỏe và tài chính cho gia đình (khám chữa bệnh tại các bệnh
                                                viện quốc tế và được bảo lãnh viện phí 100%).
                                            </li>
                                            <li>Linh hoạt như một khoản tiết kiệm trong ngân hàng.</li>
                                            <li>Có thể điều chỉnh tăng hoặc giảm số tiền tham gia dễ dàng.</li>
                                            <li>Có lợi nhuận đầu tư dài hạn (bảo tức).</li>
                                            <li>Chỉ cần đóng phí 10 năm được bảo về lên đến 25 năm.</li>
                                            <li>Khoản Thưởng duy trì hơp đồng hấp dẫn lên đến 35%.</li>
                                        </ul>
                                    </div>
                                    <style type="text/css"
                                           data-type="the7_shortcodes-inline-css">#default-btn-9c640645898a004f6394b0ad44f12233 > i {
                                            font-size: 11px
                                        }

                                        #default-btn-9c640645898a004f6394b0ad44f12233 * {
                                            vertical-align: middle
                                        }</style>
                                    <a href="https://baohiem-daiichi.vn/san-pham/an-tam-hung-thinh"
                                       class="default-btn-shortcode dt-btn dt-btn-m btn-inline-left  vc_custom_1557996052387"
                                       id="default-btn-9c640645898a004f6394b0ad44f12233"><span>Xem ngay</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1498753023892 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex ult-vc-hide-row vc_row-has-fill"
                         data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true">
                        <div class="upb_row_bg" data-bg-override="ex-full"
                             style="background: rgb(245, 245, 245); min-width: 1219px; left: -35px; width: 1219px;"></div>
                        <div class="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498750429084">
                                <div class="wpb_wrapper">
                                    <div class="standard-number-list bullet-top">
                                        <ul>
                                            <li>Sinh lợi: Lãi suất công bố luôn theo sát kết quả đầu tư thực tế đồng
                                                thời đảm bảo không thấp hơn mức lãi suất tối thiểu cam kết.
                                            </li>
                                            <li>Đáp ứng nhu cầu tài chính ngắn hạn: Nhận được những khoản tiền mặt định
                                                kỳ được chi trả mỗi 3 năm hợp đồng.
                                            </li>
                                            <li>Bảo vệ toàn diện: Quyền lợi bảo vệ khi rủi ro Tử vong hoặc Thương tật
                                                toàn bộ và vĩnh viễn.
                                            </li>
                                            <li>Quyền lợi đáo hạn: Nhận lại toàn bộ Giá trị hợp đồng khi đáo hạn.</li>
                                            <li>Đầu tư tài chính, ổn định lâu dài: với đội ngũ chuyên gia đầu tư giàu
                                                kinh nghiệm cùng với sự hỗ trợ mạnh mẽ từ Dai-ichi Life Nhật Bản, một
                                                trong những công ty bảo hiểm nhân thọ hàng đầu thế giới có hơn 100 năm
                                                kinh nghiệm, bạn sẽ an tâm rằng những khoản tiền tiết kiệm của mình sẽ
                                                được đầu tư ổn định và hiệu quả.<br> Quyền lựa chọn sớm hoàn tất đóng
                                                phí: Linh hoạt hơn bao giờ hết với các thời hạn đóng phí phù hợp, khách
                                                hàng sẽ sớm hoàn tất việc đóng phí mà vẫn đảm bảo kế hoạch chi tiêu
                                                trong ngắn hạn và thực hiện mục tiêu dài hạn của mình.
                                            </li>
                                        </ul>
                                    </div>
                                    <style type="text/css"
                                           data-type="the7_shortcodes-inline-css">#default-btn-25a9792fac8bb70cf4f0758a3fcfbfb1 > i {
                                            font-size: 11px
                                        }

                                        #default-btn-25a9792fac8bb70cf4f0758a3fcfbfb1 * {
                                            vertical-align: middle
                                        }</style>
                                    <a href="https://baohiem-daiichi.vn/san-pham/an-phuc-hung-thinh"
                                       class="default-btn-shortcode dt-btn dt-btn-m btn-inline-left  vc_custom_1557996089567"
                                       id="default-btn-25a9792fac8bb70cf4f0758a3fcfbfb1"><span>XEM NGAY</span></a></div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498750488327">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-43885ea288d689f0d"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-43885ea288d689f0d uvc-7620 color-title accent-title-color"
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-43885ea288d689f0d h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:20px;&quot;,&quot;line-height&quot;:&quot;desktop:26px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:5px;">AN PHÚC HƯNG THỊNH TOÀN
                                                DIỆN</h2></div>
                                        <div class="uvc-sub-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-43885ea288d689f0d .uvc-sub-heading "
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:34px;&quot;,&quot;line-height&quot;:&quot;desktop:40px;&quot;}"
                                             style="font-family:'Open Sans Condensed';font-weight:700;margin-bottom:20px;">
                                            Đầu tư sáng suất
                                        </div>
                                    </div>
                                    <div class="shortcode-single-image-wrap alignnone "
                                         style="margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; width:800px;">
                                        <div class="shortcode-single-image">
                                            <div class="fancy-media-wrap layzr-bg" style=""><img
                                                    class="preload-me lazy-load"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20494%20494&#39;%2F%3E"
                                                    data-src="https://baohiem-daiichi.vn/wp-content/uploads/2018/04/bao-hien-nhan-tho-dai-ichi-life-02-e1556789223529-494x494.jpg"
                                                    data-srcset="https://baohiem-daiichi.vn/wp-content/uploads/2018/04/bao-hien-nhan-tho-dai-ichi-life-02-e1556789223529-494x494.jpg 494w"
                                                    width="494" height="494"
                                                    data-dt-location="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/kinh-nghiem-khi-mua-bao-hiem-nhan-tho/attachment/bao-hien-nhan-tho-dai-ichi-life-02-2/"
                                                    style="" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element  vc_custom_1556787972403">
                                        <div class="wpb_wrapper"><p>Một giải pháp tài chính toàn diện, mang đến sự bảo
                                                vệ trước những rủi ro trong cuộc sống và đầu tư sinh lợi hiệu quả với lãi
                                                suất theo sát mức lãi suất của thị trường tài chính.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1490526340467 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                        <div class="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498750429084">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-3035ea288d68cbfc"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-3035ea288d68cbfc uvc-104 color-title accent-title-color"
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-3035ea288d68cbfc h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:20px;&quot;,&quot;line-height&quot;:&quot;desktop:26px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:5px;">AN THỊNH ĐẦU TƯ</h2></div>
                                        <div class="uvc-sub-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-3035ea288d68cbfc .uvc-sub-heading "
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:34px;&quot;,&quot;line-height&quot;:&quot;desktop:40px;&quot;}"
                                             style="font-family:'Open Sans Condensed';font-weight:700;margin-bottom:20px;">
                                            Giải pháp làm giàu an toàn cho người bận rộn
                                        </div>
                                    </div>
                                    <div class="shortcode-single-image-wrap alignnone "
                                         style="margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; width:800px;">
                                        <div class="shortcode-single-image">
                                            <div class="fancy-media-wrap layzr-bg" style=""><img
                                                    class="preload-me lazy-load"
                                                    src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20800%20800&#39;%2F%3E"
                                                    data-src="https://baohiem-daiichi.vn/wp-content/uploads/2019/05/28379168_408153652967414_6989168930748518442_n-800x800.jpg"
                                                    data-srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/05/28379168_408153652967414_6989168930748518442_n-800x800.jpg 800w, https://baohiem-daiichi.vn/wp-content/uploads/2019/05/28379168_408153652967414_6989168930748518442_n.jpg 960w"
                                                    width="800" height="800"
                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/28379168_408153652967414_6989168930748518442_n/"
                                                    style="" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element  vc_custom_1556789290138">
                                        <div class="wpb_wrapper"><p>Là giải pháp ưu việt kết hợp giữa bảo hiểm và đầu tư
                                                mang đến cơ hội gia tăng giá trị tài sản với nhiều danh mục đầu tư khác nhau
                                                và linh hoạt trước mọi thay đổi của cuộc sống.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-8 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-2 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498750488327">
                                <div class="wpb_wrapper">
                                    <div class="standard-number-list bullet-top">
                                        <ul>
                                            <li>Tạo dựng tài sản một cách hiệu quả thông qua sự hỗ trợ đầu tư chuyên
                                                nghiệp từ công ty tài chính hàng đầu Nhật Bản.
                                            </li>
                                            <li>Dành cho bạn sự lựa chọn thích hợp từ 3 giải pháp đầu tư khác nhau để
                                                tăng nguồn vốn từ cổ phiếu, trái phiếu hoặc tiền gửi các tổ chức tín
                                                dụng.
                                            </li>
                                            <li>Khoản thưởng duy trì hợp đồng thường xuyên cho sự gắn kết vững bền.</li>
                                            <li>Bảo vệ toàn diện cuộc sống gia đình bạn với bảo hiểm nhân thọ và nhiều
                                                lựa chọn bảo vệ khác phòng khi bệnh hiểm nghèo, nằm viện hoặc tai nạn.
                                            </li>
                                            <li>Bạn toàn quyền chủ động trong việc linh hoạt thay đổi giải pháp đầu tư
                                                trước biến động của thị trường tài chính và cuộc sống.
                                            </li>
                                        </ul>
                                    </div>
                                    <style type="text/css"
                                           data-type="the7_shortcodes-inline-css">#default-btn-1ad1da06293458829f223abac9d420b8 > i {
                                            font-size: 11px
                                        }

                                        #default-btn-1ad1da06293458829f223abac9d420b8 * {
                                            vertical-align: middle
                                        }</style>
                                    <a href="https://baohiem-daiichi.vn/san-pham/an-thinh-dau-tu"
                                       class="default-btn-shortcode dt-btn dt-btn-m btn-inline-left "
                                       id="default-btn-1ad1da06293458829f223abac9d420b8"><span>XEM NGAY</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1498212491956 ult-vc-hide-row vc_row-has-fill"
                         data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true">
                        <div class="upb_row_bg" data-bg-override="ex-full"
                             style="background: rgb(245, 245, 245); min-width: 1219px; left: -35px; width: 1219px;"></div>
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-18905ea288d68e259"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-18905ea288d68e259 uvc-8260 color-title accent-title-color"
                                         data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-18905ea288d68e259 h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:40px;tablet_portrait:20px;&quot;,&quot;line-height&quot;:&quot;desktop:46px;tablet_portrait:26px;&quot;}">
                                            <h2 style="font-family:'Open Sans Condensed';font-weight:700;margin-bottom:10px;">
                                                Kết nối với chúng tôi ngay</h2></div>
                                        <div class="uvc-sub-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-18905ea288d68e259 .uvc-sub-heading "
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:70px;tablet_portrait:40px;&quot;,&quot;line-height&quot;:&quot;desktop:76px;tablet_portrait:46px;&quot;}"
                                             style="font-family:'Open Sans Condensed';font-weight:700;">TƯ VẤN
                                            GÓI SẢN PHẨM PHÙ HỢP NHẤT VỚI BẠN VÀ GIA ĐÌNH
                                        </div>
                                    </div>
                                    <div role="form" class="wpcf7" id="wpcf7-f10543-p4311-o3" lang="en-US" dir="ltr">
                                        <div class="screen-reader-response"></div>
                                        <form action="https://baohiem-daiichi.vn/san-pham/#wpcf7-f10543-p4311-o3"
                                              method="post" class="wpcf7-form" novalidate="novalidate">
                                            <div style="display: none;"><input type="hidden" name="_wpcf7"
                                                                               value="10543"> <input type="hidden"
                                                                                                     name="_wpcf7_version"
                                                                                                     value="5.1.7">
                                                <input type="hidden" name="_wpcf7_locale" value="en_US"> <input
                                                    type="hidden" name="_wpcf7_unit_tag"
                                                    value="wpcf7-f10543-p4311-o3"> <input type="hidden"
                                                                                          name="_wpcf7_container_post"
                                                                                          value="4311"></div>
                                            <p><span class="wpcf7-form-control-wrap text-768"><input type="text"
                                                                                                     name="text-768"
                                                                                                     value="" size="40"
                                                                                                     class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                     aria-required="true"
                                                                                                     aria-invalid="false"
                                                                                                     placeholder="Họ và Tên*"></span><br>
                                                <span class="wpcf7-form-control-wrap email-892"><input type="email"
                                                                                                       name="email-892"
                                                                                                       value=""
                                                                                                       size="40"
                                                                                                       class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                                                       aria-required="true"
                                                                                                       aria-invalid="false"
                                                                                                       placeholder="Email của bạn*"></span><br>
                                                <span class="wpcf7-form-control-wrap tel-848"><input type="tel"
                                                                                                     name="tel-848"
                                                                                                     value="" size="40"
                                                                                                     class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                                                                                     aria-required="true"
                                                                                                     aria-invalid="false"
                                                                                                     placeholder="Số điện thoại*"></span><br>
                                                <span class="wpcf7-form-control-wrap date-41"><input type="date"
                                                                                                     name="date-41"
                                                                                                     value=""
                                                                                                     class="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                                                                                                     aria-required="true"
                                                                                                     aria-invalid="false"
                                                                                                     placeholder="Ngày tháng năm sinh của bạn*?. VD: 23/03/1989"></span><br>
                                                <span class="wpcf7-form-control-wrap text-769"><input type="text"
                                                                                                      name="text-769"
                                                                                                      value="" size="40"
                                                                                                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                      aria-required="true"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Nghề nghiệp*. VD: Nhân viên Văn Phòng"></span><br>
                                                Giới tính*: <span class="wpcf7-form-control-wrap checkbox-926"><span
                                                        class="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required"><span
                                                            class="wpcf7-list-item first"><input type="checkbox"
                                                                                                 name="checkbox-926[]"
                                                                                                 value="Nam"><span
                                                                class="wpcf7-list-item-label">Nam</span></span><span
                                                            class="wpcf7-list-item last"><input type="checkbox"
                                                                                                name="checkbox-926[]"
                                                                                                value="Nữ"><span
                                                                class="wpcf7-list-item-label">Nữ</span></span></span></span><br>
                                                Thu nhập trung bình của bạn* (chúng tôi tính toán mức phí BHNT phù hợp
                                                với thu nhập của gia đình bạn)<br> <span
                                                    class="wpcf7-form-control-wrap text-816"><input type="text"
                                                                                                    name="text-816"
                                                                                                    value=""
                                                                                                    size="40"
                                                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                    aria-required="true"
                                                                                                    aria-invalid="false"
                                                                                                    placeholder="VD: 10tr/tháng"></span><br>
                                                <span class="wpcf7-form-control-wrap text-61"><input type="text"
                                                                                                     name="text-61"
                                                                                                     value="" size="40"
                                                                                                     class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                     aria-required="true"
                                                                                                     aria-invalid="false"
                                                                                                     placeholder="Bạn ở Tỉnh- Thành nào*.?. VD: TP.HCM"></span><br>
                                                <input type="submit" value="Gửi"
                                                       class="wpcf7-form-control wpcf7-submit"><span
                                                    class="ajax-loader"></span></p> <input type="hidden"
                                                                                           class="wpcf7-pum"
                                                                                           value="{&quot;closepopup&quot;:false,&quot;closedelay&quot;:0,&quot;openpopup&quot;:false,&quot;openpopup_id&quot;:0}">
                                            <div class="wpcf7-response-output wpcf7-display-none"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1476008791393">
                        <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1476005293248">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-86715ea288d68effc"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-86715ea288d68effc uvc-9243 "
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-86715ea288d68effc h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:26px;&quot;,&quot;line-height&quot;:&quot;desktop:32px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:20px;">SẢN PHẨM NÀO TỐT
                                                NHẤT.?.</h2></div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element ">
                                        <div class="wpb_wrapper"><p>Đầu tiên tôi xin khẳng định rằng không có sản phẩm
                                                bảo hiểm nhân thọ nào là tốt nhất chỉ có sản phẩm phù hợp nhất với bạn, vì
                                                trên thực tế mỗi sản phẩm bảo hiểm đều có mỗi đặc tính và quyền lợi khác
                                                nhau, có thể nó là tốt với bạn nhưng chưa chắc người khách đã thích vì đơn
                                                giản như cầu của họ khác bạn… Để các bạn đễ dàng lựa chọn một sản phẩm bảo
                                                hiểm nhân thọ tốt nhất và phù hợp với cá nhân mình tôi xin chia sẻ 3 điều
                                                bạn cần lưu ý như sau.</p>
                                            <p>3 lưu ý khi chọn sản phẩm bảo hiểm nhân thọ tốt với bạn<br> Thứ nhất –
                                                sức khỏe<br> Thứ hai – Tài chính của gia đình.<br> Thứ ba – thời gian
                                                tham gia.<br> Kết Luận: Thật sự rất khó để chỉ ra sản phẩm BHNT nào là
                                                tốt nhất, vì tùy vào từng điều kiện, hoàn cảnh, nhu cầu…cụ thể của từng
                                                người mà có cách chọn các gói bảo hiểm khác nhau, không ai giống ai. Do
                                                đó, bạn nên chia sẻ thẳng thắn nhu cầu của bản thân cho các tư vấn viên
                                                để có hướng tìm ra sản phẩm phù hợp nhất với hoàn cảnh của bạn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1476005300152">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-28235ea288d68f34c"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-28235ea288d68f34c uvc-6168 "
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-28235ea288d68f34c h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:26px;&quot;,&quot;line-height&quot;:&quot;desktop:32px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:20px;">OUR EXPERIENCE</h2></div>
                                    </div>
                                    <div class="vc_progress_bar wpb_content_element  vc_progress-bar-color-accent-bg pb-style-two default-bg dt-style">
                                        <small class="vc_label">An tâm hưng thịnh toàn diện</small>
                                        <div class="vc_general vc_single_bar vc_progress-bar-color-bar_red accent-bg">
                                            <span class="vc_bar animated striped" data-percentage-value="90"
                                                  data-value="90" style="width: 90%;"></span></div>
                                        <small class="vc_label">An phúc hưng thịnh toàn diện</small>
                                        <div class="vc_general vc_single_bar vc_progress-bar-color-bar_blue accent-bg">
                                            <span class="vc_bar animated striped" data-percentage-value="10"
                                                  data-value="10" style="width: 10%;"></span></div>
                                        <small class="vc_label">An thịnh đầu tư</small>
                                        <div class="vc_general vc_single_bar accent-bg"><span
                                                class="vc_bar animated striped" data-percentage-value="10"
                                                data-value="10" style="width: 10%;"></span></div>
                                        <small class="vc_label">Chăm sóc sức khỏe toàn diện</small>
                                        <div class="vc_general vc_single_bar accent-bg"><span
                                                class="vc_bar animated striped" data-percentage-value="80"
                                                data-value="80" style="width: 80%;"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1496399827329 ult-vc-hide-row vc_row-has-fill"
                         data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true">
                        <div class="upb_row_bg" data-bg-override="ex-full"
                             style="background: rgba(170, 170, 170, 0.1); min-width: 1219px; left: -35px; width: 1219px;"></div>
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-82255ea288d690fd8"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-82255ea288d690fd8 uvc-1895 "
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-82255ea288d690fd8 h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:26px;&quot;,&quot;line-height&quot;:&quot;desktop:32px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:25px;">ĐỐI TÁC</h2></div>
                                    </div>
                                    <style type="text/css"
                                           data-type="the7_shortcodes-inline-css">.carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a {
                                            width: 22px;
                                            height: 80px;
                                            border-radius: 0
                                        }

                                        .dt-arrow-border-on.carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:not(:hover):before {
                                            border-width: 0
                                        }

                                        .dt-arrow-hover-border-on.carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:hover:after {
                                            border-width: 0
                                        }

                                        .arrows-hover-bg-on.carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:after {
                                            background: #f4a215
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-prev {
                                            top: 50%;
                                            transform: translateY(calc(-50% + 0px));
                                            left: 0
                                        }

                                        @media all and (-ms-high-contrast: none) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-prev {
                                                transform: translateY(-50%);
                                                margin-top: 0
                                            }
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-prev i {
                                            padding: 0 0 0 0
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-next {
                                            top: 50%;
                                            transform: translateY(calc(-50% + 0px));
                                            right: 0
                                        }

                                        @media all and (-ms-high-contrast: none) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-next {
                                                transform: translateY(-50%);
                                                margin-top: 0
                                            }
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a.owl-next i {
                                            padding: 0 0 0 0
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav i {
                                            font-size: 18px
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:not(:hover) i, .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:not(:hover) i:before {
                                            color: #fff;
                                            background: none
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:hover i, .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-nav a:hover i:before {
                                            color: #fff;
                                            background: none
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-dots {
                                            top: calc(100% + 20px);
                                            left: 50%;
                                            transform: translateX(calc(-50% + 0px))
                                        }

                                        @media all and (-ms-high-contrast: none) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-dots {
                                                transform: translateX(-50%);
                                                margin-left: 0
                                            }
                                        }

                                        .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837 .owl-dot {
                                            width: 10px;
                                            height: 10px;
                                            margin: 0 8px
                                        }

                                        @media screen and (max-width: 778px) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837.hide-arrows .owl-nav a {
                                                display: none
                                            }
                                        }

                                        @media screen and (max-width: 778px) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837.reposition-arrows .owl-nav .owl-prev {
                                                top: 50%;
                                                transform: translateY(calc(-50% + 0px));
                                                left: 10px
                                            }

                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837.reposition-arrows .owl-nav .owl-next {
                                                top: 50%;
                                                transform: translateY(calc(-50% + 0px));
                                                right: 10px
                                            }
                                        }

                                        @media screen and (max-width: 778px) and all and (-ms-high-contrast: none) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837.reposition-arrows .owl-nav .owl-prev {
                                                transform: translateY(-50%);
                                                margin-top: 0
                                            }
                                        }

                                        @media screen and (max-width: 778px) and all and (-ms-high-contrast: none) {
                                            .carousel-shortcode.carousel-shortcode-id-84836f6994417508c2ee2f903977e837.reposition-arrows .owl-nav .owl-next {
                                                transform: translateY(-50%);
                                                margin-top: 0
                                            }
                                        }</style>
                                    <div class="owl-carousel carousel-shortcode dt-owl-carousel-call carousel-shortcode-id-84836f6994417508c2ee2f903977e837 bullets-small-dot-stroke arrows-bg-on dt-arrow-border-on dt-arrow-hover-border-on arrows-hover-bg-on  vc_custom_1498756520817 owl-loaded owl-drag"
                                         data-scroll-mode="1" data-col-num="6" data-wide-col-num="6" data-laptop-col="4"
                                         data-h-tablet-columns-num="3" data-v-tablet-columns-num="2"
                                         data-phone-columns-num="1" data-auto-height="true" data-col-gap="30"
                                         data-speed="600" data-autoplay="false" data-autoplay_speed="6000"
                                         data-arrows="true" data-bullet="false" data-next-icon="icon-ar-017-r"
                                         data-prev-icon="icon-ar-017-l">
                                        <div class="owl-stage-outer owl-height" style="height: 85px;">
                                            <div class="owl-stage"
                                                 style="transform: translate3d(-673px, 0px, 0px); transition: all 0s ease 0s; width: 2247px;">
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/sacombank_web.jpg" width="198"
                                                                    height="121" alt="sacombank_web" title="sacombank_web"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/sacombank_web/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/lienvietbank.jpg" width="198"
                                                                    height="121" alt="lienvietbank" title="lienvietbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/lienvietbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/maritmebank.jpg" width="198"
                                                                    height="121" alt="maritmebank" title="maritmebank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/maritmebank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/ocb.jpg" width="198" height="121"
                                                                    alt="ocb" title="ocb"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/ocb/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/vietcombank.jpg" width="198"
                                                                    height="121" alt="vietcombank" title="vietcombank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/vietcombank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/vpbank.jpg" width="198"
                                                                    height="121" alt="vpbank" title="vpbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/vpbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/bacabank.jpg" width="198"
                                                                    height="121" alt="bacabank" title="bacabank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/bacabank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/hdbank.jpg" width="198"
                                                                    height="121" alt="hdbank" title="hdbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/hdbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/sacombank_web.jpg" width="198"
                                                                    height="121" alt="sacombank_web" title="sacombank_web"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/sacombank_web/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/lienvietbank.jpg" width="198"
                                                                    height="121" alt="lienvietbank" title="lienvietbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/lienvietbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/maritmebank.jpg" width="198"
                                                                    height="121" alt="maritmebank" title="maritmebank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/maritmebank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item active"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/ocb.jpg" width="198" height="121"
                                                                    alt="ocb" title="ocb"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/ocb/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item" style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/vietcombank.jpg" width="198"
                                                                    height="121" alt="vietcombank" title="vietcombank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/vietcombank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item" style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/vpbank.jpg" width="198"
                                                                    height="121" alt="vpbank" title="vpbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/vpbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/bacabank.jpg" width="198"
                                                                    height="121" alt="bacabank" title="bacabank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/bacabank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/hdbank.jpg" width="198"
                                                                    height="121" alt="hdbank" title="hdbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/hdbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/sacombank_web.jpg" width="198"
                                                                    height="121" alt="sacombank_web" title="sacombank_web"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/sacombank_web/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/lienvietbank.jpg" width="198"
                                                                    height="121" alt="lienvietbank" title="lienvietbank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/lienvietbank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/maritmebank.jpg" width="198"
                                                                    height="121" alt="maritmebank" title="maritmebank"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/maritmebank/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                                <div class="dt-owl-item cloned"
                                                     style="width: 82.333px; margin-right: 30px;">
                                                    <div class="wpb_single_image wpb_content_element vc_align_center">
                                                        <figure class="wpb_wrapper vc_figure"><a
                                                                href="https://themeforest.net/item/the7-responsive-multipurpose-wordpress-theme/5556590"
                                                                target="_blank"
                                                                class="vc_single_image-wrapper   vc_box_border_grey"
                                                                data-large_image_width="198"
                                                                data-large_image_height="121"><img
                                                                    class="lazy-load vc_single_image-img is-loaded"
                                                                    src="./index_file/ocb.jpg" width="198" height="121"
                                                                    alt="ocb" title="ocb"
                                                                    data-dt-location="https://baohiem-daiichi.vn/san-pham/attachment/ocb/"
                                                                    style="will-change: auto;"></a></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav"><a class="owl-prev"><i class="icon-ar-017-l"></i></a><a
                                                class="owl-next"><i class="icon-ar-017-r"></i></a></div>
                                        <div class="owl-dots disabled"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper"></div>
                            </div>
                        </div>
                    </div>
                    <div id="comments" class="comments-area">
                        <div id="respond" class="comment-respond"><h3 id="reply-title" class="comment-reply-title">Trả
                                lời <small><a rel="nofollow" id="cancel-comment-reply-link"
                                              href="https://baohiem-daiichi.vn/san-pham/#respond"
                                              style="display:none;">Hủy</a></small></h3>
                            <form action="https://baohiem-daiichi.vn/wp-comments-post.php" method="post"
                                  id="commentform" class="comment-form"><p class="comment-notes text-small">Your email
                                    address will not be published. Required fields are marked <span
                                        class="required">*</span></p>
                                <p class="comment-form-comment"><label class="assistive-text"
                                                                       for="comment">Comment</label><textarea
                                        id="comment" placeholder="Comment" name="comment" cols="45" rows="8"
                                        aria-required="true"></textarea></p>
                                <div class="form-fields"><span class="comment-form-author"><label class="assistive-text"
                                                                                                  for="author">Name *</label><input
                                            id="author" name="author" type="text" placeholder="Name*" value="" size="30"
                                            aria-required="true"></span> <span class="comment-form-email"><label
                                            class="assistive-text" for="email">Email *</label><input id="email" name="email"
                                                                                                     type="text"
                                                                                                     placeholder="Email*"
                                                                                                     value="" size="30"
                                                                                                     aria-required="true"></span>
                                    <span class="comment-form-url"><label class="assistive-text"
                                                                          for="url">Website</label><input id="url"
                                                                                                          name="url"
                                                                                                          type="text"
                                                                                                          placeholder="Website"
                                                                                                          value=""
                                                                                                          size="30"></span>
                                </div>
                                <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent"
                                                                               name="wp-comment-cookies-consent"
                                                                               type="checkbox" value="yes"><label
                                        for="wp-comment-cookies-consent">Save my name, email, and website in this
                                        browser for the next time I comment.</label></p>
                                <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit"
                                                              value="Phản hồi"> <a href="javascript:void(0);"
                                                                                   class="dt-btn dt-btn-m"><span>Post comment</span></a><input
                                        type="hidden" name="comment_post_ID" value="4311" id="comment_post_ID"> <input
                                        type="hidden" name="comment_parent" id="comment_parent" value="0"></p></form>
                        </div>
                    </div>
                </div>
                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection
