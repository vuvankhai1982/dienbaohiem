<div class="col-md-3 col-sm-4 sidebar-right">
    <div class="SideBar-Blog">
        <div class="Categories-Blog widget">
            <div class="Top-Title-SideBar">
                <h3>Categories</h3>
            </div>
            <div class="Categories-Block">
                <ul>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Life Insurance</p></a><span>(5)</span></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Travel</p></a><span>(77)</span></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Auto</p></a><span>(6)</span></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Family</p></a><span>(11)</span></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Bike</p></a><span>(54)</span></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i><p>Insurance Agency</p></a><span>(22)</span></li>
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
