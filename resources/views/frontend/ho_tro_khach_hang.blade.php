@extends('frontend.layout')
@section('content')
    <div id="main" class="sidebar-right sidebar-divider-vertical">
        <div class="main-gradient"></div>
        <div class="wf-wrap">
            <div class="wf-container-main">
                <div id="content" class="content" role="main">
                    <h2 style="text-transform: uppercase; color: black">Những câu hỏi thông dụng</h2>

                    <div style="margin-top: 20px">
                        <div id="accordion1" style="margin-top: 15px">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Thu nhập bao nhiêu mới có thể tham gia bảo hiểm nhân thọ?.   </button>
                                    </h5>
                                </div>

                                <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                    <div class="card-body">
                                        Tham gia bảo hiểm nhân thọ bao với mệnh giá bao nhiêu là tùy thuộc vào khả năng kinh tế của gia định bạn. Trên thực tế không phải người giàu mới mua được bảo hiểm nhân thọ Vì bạn có nhiều thì tham gia nhiều tiền và ngược lại. Nhưng theo chúng tôi bạn nên tham gia số tiền bằng 10-20% trên tổng thu nhập của bạn hàng tháng. Ko nên tham giá quá nhiều tiền hoặc quá ít tiền.                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button style="background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)" class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                            Tôi nên chọn đóng phí quý hay năm?.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                    <div class="card-body">
                                        Đống phí quý hay năm là tùy thuộc vào nguồn tài chính của bạn. Nhưng Theo tư vấn của các chuyên gia tài chính thì: Trường hợp bạn có nguồn thu nhập ổn định VD như thu nhập từ lương và ko có các nguồn khác thì bạn nên chọn đóng phí quý.

                                        Nếu bạn là người kinh doanh và thu nhập của bạn lúc nhiều lúc ít tùy theo thị trường, sản phẩm của bạn kinh doanh thì bạn nên chọn đóng phí theo năm.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button style="background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)"  class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                                            Khi nào thì tôi nên tham gia bảo hiểm nhân thọ
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree3" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                    <div class="card-body">
                                        Nên tham gia càng sớm càng tốt. Tham gia sớm mức phí bảo hiểm sẽ thấp hơn, và cơ hội được duyệt hồ sơ cao hơn. Tham gia muộn mức phí sẽ cao hơn, và còn không được duyệt hồ sơ nếu sức khỏe suy giảm.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseFour4" aria-expanded="true" aria-controls="collapseFour" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Bao nhiêu tuôi thì được tham gia bảo hiểm nhân thọ?.                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseFour4" class="collapse" aria-labelledby="headingFour" data-parent="#accordion1">
                                    <div class="card-body">
                                        Độ tuổi tham gia cho phép từ 01 tháng tuổi tới 65 tuổi.                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFive">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseFive5" aria-expanded="true" aria-controls="collapseFive" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Tôi là người trụ cột trong gia định (người kiếm tiền chính trong gia đinh). Tôi nên mua bảo hiểm nhân thọ cho con cái trước hay mua cho bản thân tôi trước?.                                       </button>
                                    </h5>
                                </div>

                                <div id="collapseFive5" class="collapse" aria-labelledby="headingFive" data-parent="#accordion1">
                                    <div class="card-body">
                                        Nên tham gia cho bố mẹ (người trụ cột) trước. Thu nhập của bố mẹ rất quan trọng trong gia đình và con cái. Do đó cần bảo vệ thu nhập của bố mẹ trong mọi hoàn cảnh có thể xảy ra. Khi có điều kiện, mỗi người trong gia đình nên có 1 hợp đồng bảo hiểm riêng biệt để được bảo vệ tốt nhất. Hoặc để tiết kiệm bạn có thể tham gia cho bạn trước sau đó mua thêm cho con bạn gói chăm sóc sức khỏe để bảo vệ sức khỏe cho con bạn.                                 </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingSix">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseSix6" aria-expanded="true" aria-controls="collapseSix" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Phí tham gia bảo hiểm phụ thuộc vào các yếu tố nào?.                                       </button>
                                    </h5>
                                </div>

                                <div id="collapseSix6" class="collapse" aria-labelledby="headingSix" data-parent="#accordion1">
                                    <div class="card-body">
                                        Trên thực tế ko có bảng giá cố định khi tham gia bảo hiểm nhân thọ. Một số yếu tố quyết định phí tham gia bảo hiểm nhân thọ như:

                                        Tuổi: tuổi càng cao thì phí tham gia bảo hiểm càng cao và ngược lại.
                                        Giới tính: Phí bảo hiểm của Nam giới sẽ cao hơn của Nữ giới.
                                        Nghề nghiệp: Những nghành nghề có múc độ rủi ro cao hơn sẽ có mức phí cao hơn và ngược lại.
                                        Sức khỏe: những người có sức khỏe tốt ít hoặc không có tiền sử bệnh sẽ có mức phí thấp hơn và ngược lại.                                  </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingSeven">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseSeven7" aria-expanded="true" aria-controls="collapseSeven" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Tôi nêm mua sản phẩm bảo hiểm nào là tốt nhất?.     </button>
                                    </h5>
                                </div>

                                <div id="collapseSeven7" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion1">
                                    <div class="card-body">
                                        Hiện ở Việt Nam có khoảng 18 công ty bảo hiểm nhân thọ với hàng trăm sản phẩm bảo hiểm khác nhau. Trên thực tế không có sản phẩm nào là tốt nhất mà chỉ có sản phẩm phù hợp nhất với bạn mà thôi. Hãy liên hệ với đội ngũ tư vấn của chúng tôi để được tư vấn sản phẩm bảo hiểm phù hợp nhất với bạn và gia đình nhé.                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingEight">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseEight8" aria-expanded="true" aria-controls="collapseEight" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Tôi có nên mua bảo hiểm nhân thọ cho ba mẹ không?.</button>
                                    </h5>
                                </div>

                                <div id="collapseEight8" class="collapse" aria-labelledby="headingEight" data-parent="#accordion1">
                                    <div class="card-body">
                                        Mua bảo hiểm nhân thọ cho ba mẹ là điều rất ý nghĩ để bảo hiếu cho ba mẹ. Tuy nhiên bạn cũng nên suy nghĩa phướng án tốt nhất trong các trường hợp khác nha. VD.

                                        Ba mẹ bạn có đang trong độ tuổi được phép tham gia bảo hiểm không?.
                                        Ba mẹ bạn có phải là người trụ cột không?.
                                        Nếu bạn là người trụ cột thì nên mua cho bạn trước rồi sau đó nếu khả năng tài chính tối bạn có thể mua thêm cho ba mẹ.
                                        Nếu ba mẹ bạn là người trụ côt bạn nên trao đổi với ba mẹ về các gói bảo hiểm phù hợp với tài chính của gia đình.                               </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingNine">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseNine9" aria-expanded="true" aria-controls="collapseNine" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Tôi đã có bảo hiểm y tế của công ty mua cho vậy tôi có nên mua thêm bảo hiểm nhân thọ không?. </button>
                                    </h5>
                                </div>

                                <div id="collapseNine9" class="collapse" aria-labelledby="headingNine" data-parent="#accordion1">
                                    <div class="card-body">
                                        Nếu tài chính của bạn ổn và bạn đã hiểu về bảo hiểm nhân thọ thì tốt nhất bạn nên tham gia. Vì bảo hiểm nhân thọ có nhiều sản phẩm và tính năng ưu việt hơn rất nhiều bảo các loại bảo hiểm của nhà nước.                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTen">
                                    <h5 class="mb-0">
                                        <button class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseTen10" aria-expanded="true" aria-controls="collapseTen" style="white-space: inherit; text-align: left; background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)">
                                            Bảo hiểm Dai-ichi life có phải của Nhật Bản không   </button>
                                    </h5>
                                </div>

                                <div id="collapseTen10" class="collapse" aria-labelledby="headingTen" data-parent="#accordion1">
                                    <div class="card-body">
                                        Công ty bảo hiểm nhân thọ Dai ichi life là công ty 100% vốn của Nhật Bản. Chất lượng và dịch vụ hàng đầu tại Việt Nam. Bạn nên tham khảo bảo viết bên dưới:                 </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr>
                        @include('frontend.contact')
                    </div>
                </div>

                @include('frontend.post_right')
            </div>
        </div>
    </div>
@endsection
