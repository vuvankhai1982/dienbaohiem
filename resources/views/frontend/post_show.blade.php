@extends('frontend.layout')

@section('content')
    <section id="latestnews" class="light-wrapper">
        <div class="container inner">
            <div class="row">
                <div class="col-md-9 col-sm-8">
                    <div class="blog-standard latestnews">
                        <div class="item-post">
                            <div class="img-post">
                                <figure>
                                    <div id="slider-blog" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
                                        <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 5076px; left: 0px; display: block; transition: all 400ms ease 0s; transform: translate3d(-846px, 0px, 0px);"><div class="owl-item" style="width: 846px;"><div class="item">
                                                        <a href="#"><img src="/images/blog/blog-post-2.png" alt=""></a>
                                                    </div></div><div class="owl-item" style="width: 846px;"><div class="item">
                                                        <a href="#"><img src="/images/blog/blog-post-5.png" alt=""></a>
                                                    </div></div><div class="owl-item" style="width: 846px;"><div class="item">
                                                        <a href="#"><img src="/images/blog/blog-post-4.png" alt=""></a>
                                                    </div></div></div></div>


                                        <div class="owl-controls clickable"><div class="owl-pagination"><div class="owl-page"><span class=""></span></div><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></div>
                                    <div class="customNavigation">
                                        <a class="btn prev"><i class="fa fa-angle-left"></i></a>
                                        <a class="btn next"><i class="fa fa-angle-right"></i></a>
                                    </div>
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
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. Lacus eu nulla ante lorem, viverra pretium ipsum etiam, platea nec purus malesuada id leo, aliquam metus, ac velit viverra. Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut. Congue ultricies, libero velit amet magna erat. Orci in, eleifend venenatis lacus tincidunt nisl malesuada tristique, cum egestas vel ac dapibus euismod suspendisse. . </p>
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. Lacus eu nulla ante lorem, viverra pretium ipsum etiam, platea nec purus malesuada id leo, aliquam metus, ac velit viverra. Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut. Congue ultricies, libero velit amet magna erat. Orci in, eleifend venenatis lacus tincidunt nisl malesuada tristique, cum egestas vel ac dapibus euismod suspendisse. . </p>
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. Lacus eu nulla ante lorem, viverra pretium ipsum etiam, platea nec purus malesuada id leo, aliquam metus, ac velit viverra. Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut. Congue ultricies, libero velit amet magna erat. Orci in, eleifend venenatis lacus tincidunt nisl malesuada tristique, cum egestas vel ac dapibus euismod suspendisse. . </p>
                                <p>Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut. Congue ultricies, libero velit amet magna erat. Orci in, eleifend venenatis lacus tincidunt nisl malesuada tristique, cum egestas vel ac dapibus euismod suspendisse.</p>
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. Lacus eu nulla ante lorem, viverra pretium ipsum etiam, platea nec purus malesuada id leo, aliquam metus, ac velit viverra.</p>
                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et New Office Room mattis integer aenean nulla, in vitae id augue vitae. Lacus eu nulla ante lorem, viverra pretium ipsum etiam, platea nec purus malesuada id leo, aliquam metus, ac velit viverra. Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut. Congue ultricies, libero velit amet magna erat. Orci in, eleifend venenatis lacus tincidunt nisl malesuada tristique, cum egestas vel ac dapibus euismod suspendisse. . </p>
                            </div>
                            <!-- /.info-post -->
                            <div class="Under-Post">
                                <div class="post-tags">
                                    <h5>Tags</h5>
                                    <div class="tagcloud">
                                        <ul>
                                            <li><a href="#">Insurance</a></li>
                                            <li><a href="#">Auto</a></li>
                                            <li><a href="#">Bike</a></li>
                                            <li><a href="#">Fresh</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Fresh</a></li>
                                            <li><a href="#">Mortgage</a></li>
                                            <li><a href="#">Mount</a></li>
                                            <li><a href="#">Responsive</a></li>
                                            <li><a href="#">Life Insurance</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="share-post">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h5>Share This Post :</h5>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="social-content">
                                                <a class="post-facebook" href="#"><i class="fa fa-facebook"></i></a>
                                                <a class="post-google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                                                <a class="post-twitter" href="#"><i class="fa fa-twitter"></i></a>
                                                <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="author-box">
                        <img src="images/blog/Img-User.png" alt="John Doe" height="64" width="64">
                        <h6>Kevin Dixon</h6>
                        <p>Imperdiet mauris viverra maecenas, tortor enim aliquam at nec. Pellentesque penatibus, sed rutrum viverra quisque pede, mauris commodo sodales enim porttitor. Magna convallis mi mollis, neque nostra mi vel volutpat lacinia, vitae blandit est, bibendum vel ut.</p>
                    </div>
                    <div class="Single-Blog-Comment">
                        <div class="Title-Comment">
                            <h3>3 Comments</h3>
                        </div>
                        <div class="Comments-Post">
                            <ul>
                                <li>
                                    <div class="Block-Comment">
                                        <img src="images/blog/Img-Comment.png" alt="post footer" width="44" height="44">
                                        <h4>John Doe</h4>
                                        <span>Oct 14, 2014 - 08:07 pm <a href="#">Reply</a></span>
                                        <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div class="Block-Comment">
                                                <img src="images/blog/Img-Comment2.png" alt="post footer" width="44" height="44">
                                                <h4>John Doe</h4>
                                                <span>Oct 14, 2014 - 08:07 pm <a href="#">Reply</a></span>
                                                <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="Block-Comment">
                                        <img src="images/blog/Img-Comment3.png" alt="post footer" width="44" height="44">
                                        <h4>Connie Tinker</h4>
                                        <span>Oct 14, 2014 - 08:07 pm <a href="#">Reply</a></span>
                                        <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="Block-Comment">
                                        <img src="images/blog/Img-Comment2.png" alt="post footer" width="44" height="44">
                                        <h4>John Doe</h4>
                                        <span>Oct 14, 2014 - 08:07 pm <a href="#">Reply</a></span>
                                        <p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="Add-Comment">
                        <div class="Title-Comment">
                            <h3>Leave Comment</h3>
                        </div>
                        <div class="Comment-Form">
                            <form action="#" class="leave-comment contact-form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-input">
                                            <input type="text" placeholder="Your Name" required="">
                                        </div>
                                        <div class="form-input">
                                            <input type="email" placeholder="Email" required="">
                                        </div>
                                        <div class="form-input">
                                            <input type="submit" class="btn btn-large main-bg" value="Add Comment">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-input">
                                            <textarea class="txt-box textArea" name="message" cols="40" rows="7" id="messageTxt" placeholder="Comment" spellcheck="true" required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                @include('frontend.post_right')
            </div>
        </div>
    </section>
@endsection
