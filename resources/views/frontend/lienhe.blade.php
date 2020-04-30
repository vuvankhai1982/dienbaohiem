@extends('frontend.layout')
@section('content')
    <style id="the7-fancy-title-css" type="text/css">.fancy-header {
            background-image: url(https://baohiem-daiichi.vn/wp-content/uploads/2018/01/tuvanthamgiabaohiem.png);
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: scroll;
            background-size: cover;
            background-color: #222
        }

        .fancy-header .wf-wrap {
            min-height: 400px;
            padding-top: 0;
            padding-bottom: 0
        }

        .fancy-header .fancy-title {
            font-size: 30px;
            line-height: 36px;
            color: #fff;
            text-transform: none
        }

        .fancy-header .fancy-subtitle {
            font-size: 18px;
            line-height: 26px;
            color: #fff;
            text-transform: none
        }

        .fancy-header .breadcrumbs {
            color: #fff
        }

        .fancy-header-overlay {
            background: rgba(0, 0, 0, .5)
        }

        @media screen and (max-width: 778px) {
            .fancy-header .wf-wrap {
                min-height: 70px
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
    <header id="fancy-header" class="fancy-header titles-off breadcrumbs-mobile-off title-center">
        <div class="wf-wrap">
            <div class="assistive-text">You are here:</div>
            <ol class="breadcrumbs text-small start-animation-done start-animation"
                xmlns:v="http://rdf.data-vocabulary.org/#">
                <li typeof="v:Breadcrumb"><a rel="v:url" property="v:title" href="https://baohiem-daiichi.vn/" title="">Home</a>
                </li>
                <li class="current">Liên hệ</li>
            </ol>
        </div>
    </header>
    <div id="main" class="sidebar-none sidebar-divider-vertical">
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
                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1498572765023">
                        <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-7 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498821716836">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-99405ea2964f49de0"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-99405ea2964f49de0 uvc-864 "
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-99405ea2964f49de0 h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:26px;&quot;,&quot;line-height&quot;:&quot;desktop:32px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:20px;">ĐĂNG KÝ NGAY NHẬN QUÀ LIỀN
                                                TAY</h2></div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element  vc_custom_1556858966287">
                                        <div class="wpb_wrapper"><p style="text-align: center;">Đăng ký ngay chúng tôi
                                                sẽ lên lịch và đến tận nơi để tư vấn về điều bạn quan tâm. Nhận ngay bảng
                                                minh họa về quyền lợi, phí bảo hiểm của sản phẩm phù hợp với bạn và gia
                                                đình. Sử dụng gói bảo hiểm nhân thọ Dai-ichi life&nbsp;<strong>MIỄN
                                                    PHÍ</strong>&nbsp;trong 21 ngày.</p></div>
                                    </div>
                                    <div role="form" class="wpcf7" id="wpcf7-f10444-p165-o3" lang="en-US" dir="ltr">
                                        <div class="screen-reader-response"></div>
                                        <form action="https://baohiem-daiichi.vn/lien-he/#wpcf7-f10444-p165-o3"
                                              method="post" class="wpcf7-form" novalidate="novalidate">
                                            <div style="display: none;"><input type="hidden" name="_wpcf7"
                                                                               value="10444"> <input type="hidden"
                                                                                                     name="_wpcf7_version"
                                                                                                     value="5.1.7">
                                                <input type="hidden" name="_wpcf7_locale" value="en_US"> <input
                                                    type="hidden" name="_wpcf7_unit_tag"
                                                    value="wpcf7-f10444-p165-o3"> <input type="hidden"
                                                                                         name="_wpcf7_container_post"
                                                                                         value="165"></div>
                                            <p><span class="wpcf7-form-control-wrap text-94"><input type="text"
                                                                                                    name="text-94"
                                                                                                    value="" size="40"
                                                                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                    aria-required="true"
                                                                                                    aria-invalid="false"
                                                                                                    placeholder="Họ và tên*"></span><br>
                                                <span class="wpcf7-form-control-wrap email-603"><input type="email"
                                                                                                       name="email-603"
                                                                                                       value=""
                                                                                                       size="40"
                                                                                                       class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                                                                       aria-required="true"
                                                                                                       aria-invalid="false"
                                                                                                       placeholder="Email của bạn*"></span><br>
                                                <span class="wpcf7-form-control-wrap tel-195"><input type="tel"
                                                                                                     name="tel-195"
                                                                                                     value="" size="40"
                                                                                                     class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                                                                                     aria-required="true"
                                                                                                     aria-invalid="false"
                                                                                                     placeholder="Số diện thoại*"></span><br>
                                                <span class="wpcf7-form-control-wrap text-414"><input type="text"
                                                                                                      name="text-414"
                                                                                                      value="" size="40"
                                                                                                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                                                      aria-required="true"
                                                                                                      aria-invalid="false"
                                                                                                      placeholder="Tỉnh thành*. VD: TP.Hồ Chí Minh"></span><br>
                                                <span class="wpcf7-form-control-wrap textarea-351"><textarea
                                                        name="textarea-351" cols="40" rows="10"
                                                        class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"
                                                        placeholder="Nội dung (bạn có thể đặt những câu hỏi trực tiếp. Chúng tôi sẽ phản hồi lại ngay để hỗ trợ bạn sớm nhất.!."></textarea></span><br>
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
                        <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-5 vc_col-xs-12">
                            <div class="vc_column-inner vc_custom_1498572768127">
                                <div class="wpb_wrapper">
                                    <div id="ultimate-heading-7435ea2964f4b739"
                                         class="uvc-heading ult-adjust-bottom-margin ultimate-heading-7435ea2964f4b739 uvc-1975 "
                                         data-hspacer="no_spacer" data-halign="left" style="text-align:left">
                                        <div class="uvc-heading-spacer no_spacer" style="top"></div>
                                        <div class="uvc-main-heading ult-responsive"
                                             data-ultimate-target=".uvc-heading.ultimate-heading-7435ea2964f4b739 h2"
                                             data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:26px;&quot;,&quot;line-height&quot;:&quot;desktop:32px;&quot;}">
                                            <h2 style="font-weight:bold;margin-bottom:30px;">Thông tin liên hệ</h2>
                                        </div>
                                    </div>
                                    <div class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1498572805259 vc_row-o-equal-height vc_row-flex">
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1475919323336">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1556859187595  accent-icon-bg color-title style_1">
                                                        <div id="Info-box-wrap-2776" class="aio-icon-box left-icon"
                                                             style="">
                                                            <div class="aio-icon-left">
                                                                <div class="ult-just-icon-wrapper  ">
                                                                    <div class="align-icon" style="text-align:center;">
                                                                        <div class="aio-icon advanced "
                                                                             style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                            <i class="fas fa-map-marker"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="aio-ibd-block">
                                                                <div class="aio-icon-description ult-responsive"
                                                                     data-ultimate-target="#Info-box-wrap-2776 .aio-icon-description"
                                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                     style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                    <p>Số 49B, đường Hùng Vương, phường 4, quận 5,
                                                                        TP.HCM</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1475919331923">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1556859164837  accent-icon-bg color-title style_1">
                                                        <div id="Info-box-wrap-1428" class="aio-icon-box left-icon"
                                                             style="">
                                                            <div class="aio-icon-left">
                                                                <div class="ult-just-icon-wrapper  ">
                                                                    <div class="align-icon" style="text-align:center;">
                                                                        <div class="aio-icon advanced "
                                                                             style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                            <i class="Defaults-phone-square"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="aio-ibd-block">
                                                                <div class="aio-icon-description ult-responsive"
                                                                     data-ultimate-target="#Info-box-wrap-1428 .aio-icon-description"
                                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                     style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                    <p>0937.068.573</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1475919340203">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1556859238792  accent-icon-bg color-title style_1">
                                                        <div id="Info-box-wrap-8177" class="aio-icon-box left-icon"
                                                             style="">
                                                            <div class="aio-icon-left">
                                                                <div class="ult-just-icon-wrapper  ">
                                                                    <div class="align-icon" style="text-align:center;">
                                                                        <div class="aio-icon advanced "
                                                                             style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                            <i class="fas fa-mail-bulk"></i></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="aio-ibd-block">
                                                                <div class="aio-icon-description ult-responsive"
                                                                     data-ultimate-target="#Info-box-wrap-8177 .aio-icon-description"
                                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                     style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                    <p>info@baohiem-daiichi.vn</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1498823671287">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1583175725355  accent-icon-bg color-title ib-link-prevent-accent style_1">
                                                        <a class="aio-icon-box-link"
                                                           href="https://baohiem-daiichi.vn/lien-he/"></a>
                                                        <div id="Info-box-wrap-9014" class="aio-icon-box left-icon"
                                                             style=""><a class="aio-icon-box-link"
                                                                         href="https://baohiem-daiichi.vn/lien-he/">
                                                                <div class="aio-icon-left">
                                                                    <div class="ult-just-icon-wrapper  ">
                                                                        <div class="align-icon" style="text-align:center;">
                                                                            <div class="aio-icon advanced "
                                                                                 style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                                <i class="Defaults-comment"></i></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div class="aio-ibd-block"><a class="aio-icon-box-link"
                                                                                          href="https://baohiem-daiichi.vn/lien-he/"></a>
                                                                <div class="aio-icon-description ult-responsive"
                                                                     data-ultimate-target="#Info-box-wrap-9014 .aio-icon-description"
                                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                     style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                    <a class="aio-icon-box-link"
                                                                       href="https://baohiem-daiichi.vn/lien-he/"></a><a
                                                                        href="https://www.facebook.com/groups/baohiemnhanthovietnamofficial/">Nhóm
                                                                        chuyên gia BHNT</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1475919464233">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1556860186929  accent-icon-bg color-title ib-link-prevent-accent style_1">
                                                        <a class="aio-icon-box-link">
                                                            <div id="Info-box-wrap-3868" class="aio-icon-box left-icon"
                                                                 style="">
                                                                <div class="aio-icon-left">
                                                                    <div class="ult-just-icon-wrapper  ">
                                                                        <div class="align-icon"
                                                                             style="text-align:center;">
                                                                            <div class="aio-icon advanced "
                                                                                 style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                                <i class="fab fa-facebook-square"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="aio-ibd-block">
                                                                    <div class="aio-icon-description ult-responsive"
                                                                         data-ultimate-target="#Info-box-wrap-3868 .aio-icon-description"
                                                                         data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                         style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                        Facebook
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wpb_column vc_column_container vc_col-sm-6">
                                            <div class="vc_column-inner vc_custom_1475919448283">
                                                <div class="wpb_wrapper">
                                                    <div class="aio-icon-component  vc_custom_1556860214744  accent-icon-bg color-title ib-link-prevent-accent style_1">
                                                        <a class="aio-icon-box-link" href="https://baohiem-daiichi.vn/">
                                                            <div id="Info-box-wrap-8635" class="aio-icon-box left-icon"
                                                                 style="">
                                                                <div class="aio-icon-left">
                                                                    <div class="ult-just-icon-wrapper  ">
                                                                        <div class="align-icon"
                                                                             style="text-align:center;">
                                                                            <div class="aio-icon advanced "
                                                                                 style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                                <i class="Defaults-globe"></i></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="aio-ibd-block">
                                                                    <div class="aio-icon-description ult-responsive"
                                                                         data-ultimate-target="#Info-box-wrap-8635 .aio-icon-description"
                                                                         data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                                         style="font-family:&#39;Open Sans Condensed&#39;;font-weight:700;">
                                                                        www.baohiem-daiichi.vn
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wpb_single_image wpb_content_element vc_align_left">
                                        <figure class="wpb_wrapper vc_figure">
                                            <div class="vc_single_image-wrapper   vc_box_border_grey"><img
                                                    class="vc_single_image-img lazyloaded"
                                                    src="./lienhe_files/nguyen-cao-ky-dai-ichi-life-viet-nam-550x400.jpg"
                                                    width="550" height="400" alt="nguyen-cao-ky-dai-ichi-life-viet-nam"
                                                    title="nguyen-cao-ky-dai-ichi-life-viet-nam"
                                                    data-dt-location="https://baohiem-daiichi.vn/lien-he/attachment/nguyen-cao-ky-dai-ichi-life-viet-nam/"
                                                    data-lazy-src="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/nguyen-cao-ky-dai-ichi-life-viet-nam-550x400.jpg"
                                                    data-was-processed="true">
                                                <noscript><img class="vc_single_image-img "
                                                               src="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/nguyen-cao-ky-dai-ichi-life-viet-nam-550x400.jpg"
                                                               width="550" height="400"
                                                               alt="nguyen-cao-ky-dai-ichi-life-viet-nam"
                                                               title="nguyen-cao-ky-dai-ichi-life-viet-nam"
                                                               data-dt-location="https://baohiem-daiichi.vn/lien-he/attachment/nguyen-cao-ky-dai-ichi-life-viet-nam/"/>
                                                </noscript>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
