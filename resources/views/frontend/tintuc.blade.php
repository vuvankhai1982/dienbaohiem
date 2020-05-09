@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <div class="articles-list vertical-fancy-style loading-effect-fade-in with-ajax" data-cur-page="1">
                        @foreach($posts as $post)
                            <article style="margin-top: 10px"
                                     class="post project-odd post-11286 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">
                                <div class="blog-media wf-td" style="width: 30%;">
                                    <div class="fancy-date">
                                        <a style="top: 10px; right: auto;left: 10px;" title="3:24 chiều"
                                           href="https://baohiem-daiichi.vn/2020/03/19/" rel="nofollow"><span
                                                class="entry-month">Th3</span><span class="entry-date updated">19</span><span
                                                class="entry-year">2020</span></a>
                                    </div>
                                    <a href="https://baohiem-daiichi.vn/tin-tuc/bao-hiem-benh-ung-thu/"
                                       class="rollover alignleft this-ready">
                                        <img class="preload-me lazy-load is-loaded"
                                              src="./tintuc_files/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg"
                                              alt="" title="bảo hiểm bệnh ung thư"
                                              width="626" height="626" sizes="178px"
                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg 626w"
                                              style="will-change: auto;">
                                    </a>
                                </div>
                                <div class="blog-content wf-td" style="width: 70%;">
                                    <h3 class="entry-title">
                                        <a href="/tin-tuc/bao-hiem-benh-ung-thu/"
                                           title="{{ $post->title }}" rel="bookmark">
                                            {{ $post->title }}
                                        </a>
                                    </h3>
                                    <div class="entry-meta">
                                        <span class="category-link"><a href="/tin-tuc/">Tin tức</a></span>
                                        <a
                                            class="author vcard" href="https://baohiem-daiichi.vn/author/admin/"
                                            title="View all posts by Nhóm chuyên gia Dai-ichi life" rel="author">By
                                            <span
                                                class="fn">Nhóm chuyên gia Dai-ichi life</span>
                                        </a>
                                        <a
                                            href="https://baohiem-daiichi.vn/2020/03/19/" title="3:24 chiều"
                                            class="data-link" rel="bookmark">
                                            <time class="entry-date updated" datetime="2020-03-19T15:24:15+07:00">Tháng
                                                Ba 19,
                                                2020
                                            </time>
                                        </a>
                                    </div>
                                    <p>{{ $post->short_content }}…</p>
                                    <a
                                        href="https://baohiem-daiichi.vn/tin-tuc/bao-hiem-benh-ung-thu/"
                                        class="details more-link" rel="nofollow">Chi tiết</a>
                                </div>
                            </article>
                        @endforeach
                    </div>
                    <div style="margin-top: 20px">
                        {{ $posts->links() }}
                    </div>
                </div>
                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection
