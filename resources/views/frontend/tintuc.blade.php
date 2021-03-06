@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <div class="articles-list vertical-fancy-style loading-effect-fade-in with-ajax" data-cur-page="1">
                        @foreach($posts as $post)
                            @php
                                $image = $post->image ?? '/tintuc_files/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg'
                            @endphp
                            <article style="margin-top: 10px"
                                     class="post project-odd post-11286 type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc category-79 bg-on description-off">
                                <div class="blog-media wf-td" style="width: 30%;">
                                    <div class="fancy-date">
                                        <a style="top: 10px; right: auto;left: 10px;" title="3:24 chiều"
                                           href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}" rel="nofollow"><span
                                                class="entry-month">{{ \Carbon\Carbon::parse($post->created_at)->dayName }}</span><span class="entry-date updated">{{ \Carbon\Carbon::parse($post->created_at)->day }}</span><span
                                                class="entry-year">{{ \Carbon\Carbon::parse($post->created_at)->year }}</span></a>
                                    </div>
                                    <a href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}"
                                       class="rollover alignleft this-ready">
                                        <img class="preload-me lazy-load is-loaded"
                                              src="{{ $image }}"
                                              alt="" title="bảo hiểm bệnh ung thư"
                                              width="626" height="626" sizes="178px"
                                              srcset="https://baohiem-daiichi.vn/wp-content/uploads/2020/03/bao-hiem-benh-ung-thu-dai-ichi-life-02-626x626.jpg 626w"
                                              style="will-change: auto;"
                                        >
                                    </a>
                                </div>
                                <div class="blog-content wf-td" style="width: 70%;">
                                    <h3 class="entry-title">
                                        <a href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}"
                                           title="{{ $post->title }}" rel="bookmark">
                                            {{ $post->title }}
                                        </a>
                                    </h3>
                                    <p>{{ $post->short_content }}…</p>
                                    <a
                                        href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}"
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
