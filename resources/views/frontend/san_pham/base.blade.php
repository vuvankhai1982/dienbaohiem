@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <h2 style="text-transform: uppercase; color: black">{{ $post->title }}</h2>

                    <div style="margin-top: 20px">
                        {!! $post->content !!}
                    </div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection
