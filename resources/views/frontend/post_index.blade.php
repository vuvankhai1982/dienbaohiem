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
                                        <a href="#"><img src="/images/blog/blog-post-1.png" alt=""></a>
                                    </figure>
                                    <span class="icon-post-type"><i class="fa fa-image"></i></span>
                                </div>
                                <!-- /.img-post -->
                                <div class="info-post">
                                    <h5><a href="#">{{ $post->title }}</a></h5>
                                    <ul class="meta-post">
                                        <li>On : <span class="date">Des 13, 2015</span></li>
                                        <li>By : <span class="author"><a href="#">John Doe</a></span></li>
                                        <li>Comments : <span class="author"><a href="#">254</a></span></li>
                                        <li>Category : <span class="author"><a href="#">Life Insurance</a>,<a href="#">Insurance</a></span></li>
                                        <li>View : 150</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. </p>
                                </div>
                                <!-- /.info-post -->
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="row">
                        <div class="pagination col-md-12">
                            <div class="pagination-style1 text-center">
                                <span class="active">1</span>
                                <span>2</span>
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </section>
@endsection
