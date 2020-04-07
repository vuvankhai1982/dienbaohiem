@extends('frontend.layout')

@section('content')
    <section id="latestnews" class="light-wrapper">
        <div class="container inner">
            <div class="row">
                <div class="col-md-9 col-sm-8">
                    <div class="latestnews">
                        @foreach ($posts as $post)
                        <div class="blog-standard">
                            <div class="item-post">
                                <div class="img-post">
                                    <figure>
                                        <a href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}"><img src="{{ $post->image }}" alt=""></a>
                                    </figure>
                                    <span class="icon-post-type"><i class="fa fa-image"></i></span>
                                </div>
                                <!-- /.img-post -->
                                <div class="info-post">
                                    <h5><a href="{{ route('show_post', get_sanitize_url($post->title, $post->id)) }}">{{ $post->title }}</a></h5>
                                    <ul class="meta-post">
                                        <li>Ngày: <span class="date">{{ \Carbon\Carbon::parse($post->created_at)->format('d-m-Y') }}</span></li>
                                        <li>Đăng bởi : <span class="author"><a href="#">{{ $post->user->name }}</a></span></li>
                                    </ul>
                                    <p>
                                        {!! $post->short_content !!}
                                    </p>
                                </div>
                                <!-- /.info-post -->
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="row">
                        {{ $posts->links() }}
                    </div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </section>
@endsection
