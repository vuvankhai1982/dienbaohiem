@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <h2 style="text-transform: uppercase ; color: black">{{ $post->title }}</h2>

                    <div style="margin-top: 50px"
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1498572805259 vc_row-o-equal-height vc_row-flex">
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner vc_custom_1475919323336">
                                <div class="wpb_wrapper">
                                    <div
                                        class="aio-icon-component  vc_custom_1556859187595  accent-icon-bg color-title style_1">
                                        <div id="Info-box-wrap-3487" class="aio-icon-box left-icon" style="">
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
                                                     data-ultimate-target="#Info-box-wrap-3487 .aio-icon-description"
                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                     style="font-family:'Open Sans Condensed';font-weight:700;"><p>Số
                                                        49B, đường Hùng Vương, phường 4, quận 5, TP.HCM</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner vc_custom_1475919331923">
                                <div class="wpb_wrapper">
                                    <div
                                        class="aio-icon-component  vc_custom_1556859164837  accent-icon-bg color-title style_1">
                                        <div id="Info-box-wrap-7284" class="aio-icon-box left-icon" style="">
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
                                                     data-ultimate-target="#Info-box-wrap-7284 .aio-icon-description"
                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                     style="font-family:'Open Sans Condensed';font-weight:700;"><p>
                                                        0973.564.638</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner vc_custom_1475919340203">
                                <div class="wpb_wrapper">
                                    <div
                                        class="aio-icon-component  vc_custom_1556859238792  accent-icon-bg color-title style_1">
                                        <div id="Info-box-wrap-6441" class="aio-icon-box left-icon" style="">
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
                                                     data-ultimate-target="#Info-box-wrap-6441 .aio-icon-description"
                                                     data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                     style="font-family:'Open Sans Condensed';font-weight:700;"><p>
                                                        lyminhdien@gmail.com</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner vc_custom_1475919448283">
                                <div class="wpb_wrapper">
                                    <div
                                        class="aio-icon-component  vc_custom_1556860214744  accent-icon-bg color-title ib-link-prevent-accent style_1">
                                        <a class="aio-icon-box-link" href="https://mrfinance.vn/">
                                            <div id="Info-box-wrap-8761" class="aio-icon-box left-icon" style="">
                                                <div class="aio-icon-left">
                                                    <div class="ult-just-icon-wrapper  ">
                                                        <div class="align-icon" style="text-align:center;">
                                                            <div class="aio-icon advanced "
                                                                 style="color:#ffffff;border-style:;border-color:#333333;border-width:1px;width:34px;height:34px;line-height:34px;border-radius:500px;font-size:16px;display:inline-block;">
                                                                <i class="Defaults-globe"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="aio-ibd-block">
                                                    <div class="aio-icon-description ult-responsive"
                                                         data-ultimate-target="#Info-box-wrap-8761 .aio-icon-description"
                                                         data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;desktop:24px;&quot;}"
                                                         style="font-family:'Open Sans Condensed';font-weight:700;">
                                                        www.mrfinance.vn
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        @include('frontend.contact')
                    </div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection
