@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <div class="articles-list vertical-fancy-style loading-effect-fade-in with-ajax" data-cur-page="1">
                        <article
                            class="post project-odd post-11286 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">
                            <div class="blog-media wf-td" style="width: 30%;">
                                <div class="fancy-date" ><a style="top: 10px; right: auto;left: 10px;" title="3:24 chiều"
                                                            href="https://baohiem-daiichi.vn/2020/03/19/" rel="nofollow"><span
                                            class="entry-month">Th3</span><span class="entry-date updated">19</span><span
                                            class="entry-year">2020</span></a></div>
                                <a href="https://baohiem-daiichi.vn/tin-tuc/bao-hiem-benh-ung-thu/"
                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"
                                                                              src="./tintuc_files/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg"
                                                                              alt="" title="bảo hiểm bệnh ung thư"
                                                                              width="626" height="626" sizes="178px"
                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg 626w"
                                                                              style="will-change: auto;"><i></i></a>
                            </div>
                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a
                                        href="https://baohiem-daiichi.vn/tin-tuc/bao-hiem-benh-ung-thu/"
                                        title="Bảo hiểm bệnh ung thư – Dai-ichi life Việt Nam" rel="bookmark">Bảo hiểm bệnh
                                        ung thư – Dai-ichi life Việt Nam</a></h3>
                                <div class="entry-meta"><span class="category-link"><a
                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a
                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"
                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span
                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a
                                        href="https://baohiem-daiichi.vn/2020/03/19/" title="3:24 chiều"
                                        class="data-link" rel="bookmark">
                                        <time class="entry-date updated" datetime="2020-03-19T15:24:15+07:00">Tháng Ba 19,
                                            2020
                                        </time>
                                    </a></div>
                                <p>Bảo hiểm Hỗ trợ điều trị bệnh ung thư và Bảo hiểm Bảo toàn thu nhập gia đình Dai-ichi
                                    life Việt Nam ra mắt sản phẩm bảo hiểm ung thư và Bảo toàn thu nhập gia đình. Ngày
                                    10/3/2020, Công ty Bảo hiểm Nhân thọ Dai-ichi Việt Nam (Dai-ichi Life Việt Nam)
                                    chính thức giới…</p> <a
                                    href="https://baohiem-daiichi.vn/tin-tuc/bao-hiem-benh-ung-thu/"
                                    class="details more-link" rel="nofollow">Details</a></div>
                        </article>
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-11113 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="12:42 sáng"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2020/03/05/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th3</span><span class="entry-date updated">5</span><span--}}
                        {{--                                            class="entry-year">2020</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/dich-covid-19-anh-huong-nhu-the-nao-den-bao-hiem-nhan-tho/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/corona-virus-va-bao-hiem-dai-ichi-life-450x450.jpg"--}}
                        {{--                                                                              alt=""--}}
                        {{--                                                                              title="corona-virus-va-bao-hiem-dai-ichi-life"--}}
                        {{--                                                                              width="450" height="450" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/corona-virus-va-bao-hiem-dai-ichi-life-450x450.jpg 450w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/dich-covid-19-anh-huong-nhu-the-nao-den-bao-hiem-nhan-tho/"--}}
                        {{--                                        title="Dịch Covid-19 ảnh hưởng như thế nào đến bảo hiểm nhân thọ" rel="bookmark">Dịch--}}
                        {{--                                        Covid-19 ảnh hưởng như thế nào đến bảo hiểm nhân thọ</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2020/03/05/" title="12:42 sáng"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2020-03-05T00:42:30+07:00">Tháng Ba 5,--}}
                        {{--                                            2020--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Trong thời gian gần đây có lẽ vấn đề được quan tâm nhiều nhất không những ở Việt Nam--}}
                        {{--                                    mà trên toàn thế giới nữa đó là đại dịch Corona Viruts hay Covid-19. Đại dịch đang--}}
                        {{--                                    lây lan trên thế giới với tốc độ khủng khiếp khiến tất cả các ngành nghề và cả--}}
                        {{--                                    nền…</p> <a--}}
                        {{--                                    href="https://baohiem-daiichi.vn/tin-tuc/dich-covid-19-anh-huong-nhu-the-nao-den-bao-hiem-nhan-tho/"--}}
                        {{--                                    class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10888 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="12:20 chiều"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/07/03/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th7</span><span class="entry-date updated">3</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/mua-bao-hiem-nhan-tho-cua-hang-bao-hiem-nuoc-ngoai-hay-trong-nuoc/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/editorial-dai-ichi-life-insurance-footage-085464238_prevstill-2160x2160.jpg"--}}
                        {{--                                                                              alt="mua bảo hiểm nhân thọ của hãng bảo hiểm nước ngoài hay trong nước."--}}
                        {{--                                                                              title="editorial-dai-ichi-life-insurance-footage-085464238_prevstill"--}}
                        {{--                                                                              width="2160" height="2160" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/06/editorial-dai-ichi-life-insurance-footage-085464238_prevstill-2160x2160.jpg 2160w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/mua-bao-hiem-nhan-tho-cua-hang-bao-hiem-nuoc-ngoai-hay-trong-nuoc/"--}}
                        {{--                                        title="mua bảo hiểm nhân thọ của hãng bảo hiểm nước ngoài hay trong nước."--}}
                        {{--                                        rel="bookmark">mua bảo hiểm nhân thọ của hãng bảo hiểm nước ngoài hay trong--}}
                        {{--                                        nước.</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/07/03/" title="12:20 chiều"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-07-03T12:20:35+07:00">Tháng Bảy 3,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Nên mua bảo hiểm nhân thọ của hãng bảo hiểm nước ngoài hay trong nước. Trên thực tế--}}
                        {{--                                    có khá nhiều khách hàng đang có tâm lý e ngại khi mua BHNT của các hãng bảo hiểm--}}
                        {{--                                    nhân thọ nước ngoài. Bài viết sai tổng hợp 7 điều bạn nên biết về bảo hiểm nhân…</p>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/mua-bao-hiem-nhan-tho-cua-hang-bao-hiem-nuoc-ngoai-hay-trong-nuoc/"--}}
                        {{--                                   class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10877 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="9:48 chiều"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/06/28/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th6</span><span class="entry-date updated">28</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/tong-hop-dia-chi-dai-ichi-life-cac-tinh-mien-nam/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/hinhcsho_resize_wnop-440x440.jpg"--}}
                        {{--                                                                              alt="" title="hinhcsho_resize_wnop"--}}
                        {{--                                                                              width="440" height="440" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/06/hinhcsho_resize_wnop-440x440.jpg 440w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/tong-hop-dia-chi-dai-ichi-life-cac-tinh-mien-nam/"--}}
                        {{--                                        title="Tổng hợp địa chỉ Dai-ichi life các tỉnh Miền Nam" rel="bookmark">Tổng hợp địa--}}
                        {{--                                        chỉ Dai-ichi life các tỉnh Miền Nam</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/06/28/" title="9:48 chiều"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-06-28T21:48:28+07:00">Tháng Sáu 28,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Tổng hợp danh sách địa chỉ các văn phòng gia dịch, đại lý bảo hiểm nhân thọ Dai-ichi--}}
                        {{--                                    life các tỉnh Miền Nam. Giúp khách hàng có thể tìm thấy nhanh nhất những địa chỉ gần--}}
                        {{--                                    nhất để được hỗ trợ các vấn đề liên quan. Chú ý: Khách hàng đã tham gia bảo--}}
                        {{--                                    hiểm…</p> <a--}}
                        {{--                                    href="https://baohiem-daiichi.vn/tin-tuc/tong-hop-dia-chi-dai-ichi-life-cac-tinh-mien-nam/"--}}
                        {{--                                    class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10872 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="5:16 chiều"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/06/28/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th6</span><span class="entry-date updated">28</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-vpgd-dai-ichi-life-mien-trung/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/bao-hien-nhan-tho-dai-ichi-life-05-706x706.jpg"--}}
                        {{--                                                                              alt=""--}}
                        {{--                                                                              title="bao-hien-nhan-tho-dai-ichi-life-05"--}}
                        {{--                                                                              width="706" height="706" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2018/01/bao-hien-nhan-tho-dai-ichi-life-05-706x706.jpg 706w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-vpgd-dai-ichi-life-mien-trung/"--}}
                        {{--                                        title="DANH SÁCH ĐỊA CHỈ CÁC VPGD DAI-ICHI LIFE MIỀN TRUNG" rel="bookmark">DANH SÁCH--}}
                        {{--                                        ĐỊA CHỈ CÁC VPGD DAI-ICHI LIFE MIỀN TRUNG</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/06/28/" title="5:16 chiều"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-06-28T17:16:51+07:00">Tháng Sáu 28,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Tổng hợp danh sách địa chỉ các văn phòng giao dịch (VPGD) đại lý bảo hiểm Dai-ichi--}}
                        {{--                                    life tại các tỉnh miền trung. Chú ý: Khách hàng đã tham gia bảo hiểm Dai-ichi life--}}
                        {{--                                    cần hỗ trợ các vấn đề liên quan vui lòng gọi số tổng dai Dai-ichi life:--}}
                        {{--                                    028-381-00-888 để được hỗ trợ…</p> <a--}}
                        {{--                                    href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-vpgd-dai-ichi-life-mien-trung/"--}}
                        {{--                                    class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10862 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="12:08 sáng"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/06/28/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th6</span><span class="entry-date updated">28</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-van-phong-giao-dich-dai-ichi-life-tai-mien-bac/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/1503389862-h-nh-t-a-nh--495x495.jpg"--}}
                        {{--                                                                              alt="" title="1503389862-h–nh-t–a-nh–"--}}
                        {{--                                                                              width="495" height="495" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/06/1503389862-h-nh-t-a-nh--495x495.jpg 495w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-van-phong-giao-dich-dai-ichi-life-tai-mien-bac/"--}}
                        {{--                                        title="Danh sách địa chỉ các VPGD Dai-ichi life Miền Bắc." rel="bookmark">Danh sách--}}
                        {{--                                        địa chỉ các VPGD Dai-ichi life Miền Bắc.</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/06/28/" title="12:08 sáng"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-06-28T00:08:17+07:00">Tháng Sáu 28,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Tổng hợp danh sách địa chỉ các văn phòng giao dịch Dai-ichi life tại Miền Bắc. Để--}}
                        {{--                                    tiện lợi hơn cho những khách hàng của Dai-ichi life khi phải tra cứu địa chỉ của các--}}
                        {{--                                    văn vòng giao dịch (VPGD) Dai-ichi life ở các tỉnh thành trên cả nước, chúng tôi xin--}}
                        {{--                                    được thống kê…</p> <a--}}
                        {{--                                    href="https://baohiem-daiichi.vn/tin-tuc/danh-sach-dia-chi-cac-van-phong-giao-dich-dai-ichi-life-tai-mien-bac/"--}}
                        {{--                                    class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10857 type-post status-publish format-standard has-post-thumbnail hentry category-cau-hoi-thuong-gap category-tin-tuc category-74 category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="1:20 chiều"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/06/27/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th6</span><span class="entry-date updated">27</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/cong-ty-bao-hiem-pha-san-chuyen-gi-se-say-ra/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/20915154_1909519219297541_1588173260520634639_n-318x318.jpg"--}}
                        {{--                                                                              alt=""--}}
                        {{--                                                                              title="20915154_1909519219297541_1588173260520634639_n"--}}
                        {{--                                                                              width="318" height="318" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/06/20915154_1909519219297541_1588173260520634639_n-318x318.jpg 318w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/cong-ty-bao-hiem-pha-san-chuyen-gi-se-say-ra/"--}}
                        {{--                                        title="công ty bảo hiểm phá sản – chuyện gì sẽ sảy ra?." rel="bookmark">công ty bảo--}}
                        {{--                                        hiểm phá sản – chuyện gì sẽ sảy ra?.</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/">Câu hỏi thường gặp</a>, <a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/06/27/" title="1:20 chiều"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-06-27T13:20:39+07:00">Tháng Sáu 27,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Chuyện gì sảy ra nếu công ty bảo hiểm phá sản?. khách hàng có bị mất tiền nếu công ty--}}
                        {{--                                    bảo hiểm nhân thọ phá sản?. các quyền lợi của khách hàng có được đảm bảo?. Đó là--}}
                        {{--                                    băng khoan của rất nhiều khách hàng đang có như cầu tìm hiểu về bhnt. Vậy hôm…</p><a--}}
                        {{--                                    href="https://baohiem-daiichi.vn/cau-hoi-thuong-gap/cong-ty-bao-hiem-pha-san-chuyen-gi-se-say-ra/"--}}
                        {{--                                    class="details more-link" rel="nofollow">Details</a></div>--}}
                        {{--                        </article>--}}
                        {{--                        <article--}}
                        {{--                            class="post project-odd post-10840 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">--}}
                        {{--                            <div class="blog-media wf-td" style="width: 30%;">--}}
                        {{--                                <div class="fancy-date"><a title="6:28 chiều"--}}
                        {{--                                                           href="https://baohiem-daiichi.vn/2019/06/25/" rel="nofollow"><span--}}
                        {{--                                            class="entry-month">Th6</span><span class="entry-date updated">25</span><span--}}
                        {{--                                            class="entry-year">2019</span></a></div>--}}
                        {{--                                <a href="https://baohiem-daiichi.vn/tin-tuc/cong-ty-bao-hiem-nhan-tho-tot-nhat-dai-ichi-life-vn-lien-tiep-11-nam-dat-giai/"--}}
                        {{--                                   class="rollover alignleft this-ready"><img class="preload-me lazy-load is-loaded"--}}
                        {{--                                                                              src="./tintuc_files/daiichi-372x372.jpg"--}}
                        {{--                                                                              alt="" title="daiichi" width="372"--}}
                        {{--                                                                              height="372" sizes="178px"--}}
                        {{--                                                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2019/06/daiichi-372x372.jpg 372w"--}}
                        {{--                                                                              style="will-change: auto;"><i></i></a>--}}
                        {{--                            </div>--}}
                        {{--                            <div class="blog-content wf-td" style="width: 70%;"><h3 class="entry-title"><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/tin-tuc/cong-ty-bao-hiem-nhan-tho-tot-nhat-dai-ichi-life-vn-lien-tiep-11-nam-dat-giai/"--}}
                        {{--                                        title="Công ty bảo hiểm nhân thọ tốt nhất" rel="bookmark">Công ty bảo hiểm nhân thọ--}}
                        {{--                                        tốt nhất</a></h3>--}}
                        {{--                                <div class="entry-meta"><span class="category-link"><a--}}
                        {{--                                            href="https://baohiem-daiichi.vn/tin-tuc/">Tin tức</a></span><a--}}
                        {{--                                        class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"--}}
                        {{--                                        title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By <span--}}
                        {{--                                            class="fn">Nhóm chuyên gia Dai-ichi life</span></a><a--}}
                        {{--                                        href="https://baohiem-daiichi.vn/2019/06/25/" title="6:28 chiều"--}}
                        {{--                                        class="data-link" rel="bookmark">--}}
                        {{--                                        <time class="entry-date updated" datetime="2019-06-25T18:28:17+07:00">Tháng Sáu 25,--}}
                        {{--                                            2019--}}
                        {{--                                        </time>--}}
                        {{--                                    </a></div>--}}
                        {{--                                <p>Submit your reviewTên bạn: Email: Rating: 12345Review: &nbsp; Check this box to--}}
                        {{--                                    confirm you are human.Submit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CancelCreate your own--}}
                        {{--                                    reviewBảo hiểm Dai ichi life Việt NamAverage rating: &nbsp;&nbsp;1 reviewsJun 26,--}}
                        {{--                                    2019 by minh do on Bảo hiểm Dai ichi life Việt NamTuyệt vời…</p></div>--}}
                        {{--                        </article>--}}
                    </div>
                    <div class="paginator with-ajax" role="navigation"><span class="nav-prev disabled"><i
                                class="fas fa-long-arrow-alt-left" aria-hidden="true"></i></span><a
                            href="https://baohiem-daiichi.vn/tin-tuc-bao-hiem/" class="page-numbers act"
                            data-page-num="1">1</a><a href="https://baohiem-daiichi.vn/tin-tuc-bao-hiem/page/2/"
                                                      class="page-numbers " data-page-num="2">2</a><a
                            href="https://baohiem-daiichi.vn/tin-tuc-bao-hiem/page/3/" class="page-numbers "
                            data-page-num="3">3</a><a href="https://baohiem-daiichi.vn/tin-tuc-bao-hiem/page/4/"
                                                      class="page-numbers " data-page-num="4">4</a><a
                            href="https://baohiem-daiichi.vn/tin-tuc-bao-hiem/page/2/" class="page-numbers nav-next"
                            data-page-num="2"><i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i></a></div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection