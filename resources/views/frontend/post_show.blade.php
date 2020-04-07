@extends('frontend.layout')

@section('content')
    <section id="latestnews" class="light-wrapper">
        <div class="container inner">
            <div class="row">
                <div class="col-md-9 col-sm-8">
                    <div class="blog-standard latestnews">
                        <div class="item-post">
                            @if($post->image)
                            <div class="img-post">
                                <img src="{{ $post->image }}" alt="">
                            </div>
                            @endif
                            <!-- /.img-post -->
                            <div class="info-post">
                                <h5><a href="#">{{ $post->title }}</a></h5>
                                <ul class="meta-post">
                                    <li>Ngày: <span class="date">{{ \Carbon\Carbon::parse($post->created_at)->format('d-m-Y') }}</span></li>
                                    <li>Đăng bởi : <span class="author"><a href="#">{{ $post->user->name }}</a></span></li>
                                </ul>
                                {!! $post->content !!}

                                @if($post->id == 2)
                                <div class="get-quote-form" style="padding-top: 50px">
                                    @include('frontend.contact')
                                </div>
                                @endif
                            </div>
                            <!-- /.info-post -->
                            <div class="Under-Post">
                                @if (!$post->tags->isEmpty())
                                    <div class="post-tags">
                                        <h5>Tags</h5>
                                        <div class="tagcloud">
                                            <ul>
                                                @foreach($post->tags as $tag)
                                                    <a href="{{ route('get_posts_by_task', get_sanitize_url($tag->name, $tag->id)) }}">{{ $tag->name }}</a>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                @include('frontend.post_right')
            </div>
        </div>
    </section>
@endsection
