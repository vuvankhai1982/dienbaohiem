<div class="col-md-3 col-sm-4 sidebar-right">
    <div class="SideBar-Blog">
        <div class="Categories-Blog widget">
            <div class="Top-Title-SideBar">
                <h3>BẢO HIỂM NHÂN THỌ DAI-ICHI LIFE VIỆT NAM.</h3>
            </div>
            <div class="Categories-Block">
                <p>
                    Với hệ thông cộng sự trên 64 tỉnh thành Chúng tôi cam kết đặt lợi ích của khách hàng lên hàng đầu làm tôn chỉ làm việc, với sứ mệnh đưa bảo hiểm nhân thọ Dai-ichi life đến với mỗi gia đình Việt.
                </p>
                <ul class="social-links__list" >
                    <li class="social-links__item">
                        <a class="social-links__link social-links__link--type--youtube" href="https://www.youtube.com/" target="_blank">
                            <i class="fa fa-youtube-play" style="font-size:30px;color:red"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="fa fa-facebook-square" style="font-size:30px;color:#3c5a99;"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="Last-post-Blog widget">
            <div class="Top-Title-SideBar">
                <h3>Bài viết gần đây</h3>
            </div>
            <div class="Last-post">
                <ul class="news-footer">
                    @foreach($recentPosts as $post)
                        <li>
                            <a href="#"><img src="/images/page/ournews-1.png" alt=""></a>
                            <h6><a href="#">{{ $post->title }}</a></h6>
                            <span class="news-date">On : <a href="#">Jan 13, 2015</a></span>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="Tag-Blog widget">
            <div class="Top-Title-SideBar">
                <h3>Chuyên mục</h3>
            </div>
            <div class="tagcloud">
                <ul>
                    @foreach($tags as $tag)
                        <li><a href="{{ route('get_posts_by_task', get_sanitize_url($tag->name, $tag->id)) }}">{{ $tag->name }}</a></li>
                    @endforeach
                </ul>
            </div>
        </div>

    </div>
</div>
