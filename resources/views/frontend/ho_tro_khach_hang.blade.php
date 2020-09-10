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
                                            Phí bảo hiểm chăm sóc sức khỏe được tính như thế nào?.                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                    <div class="card-body">
                                        Giá phí bảo hiểm chăm sóc sức khỏe được tính dựa vào các yếu tố sau.</br>

                                       1. Tuổi của người được bảo hiểm: Theo đó tuổi càng cao thì phí càng cao.</br>
                                       2. Giới tính: phụ nữ thì phí sẽ thấp hơn nam giới.</br>
                                       3. Nghề nghiệp: những nghề nghiệp có độ rủi ro cao thì phí sẽ cao hơn những nghề nghiệp rủi ro thất
                                        VD: nghề công nhân xây dựng sẽ có phí bảo hiểm cao hơn nhân viên văn phòng,</br>

                                        4. Tình trạng sức khỏe: Những người có nhiều tiền sử bệnh án hơn sẽ có mức phí bảo hiểm cao hơn.                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button style="background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)" class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                            Có thể tham gia cho các thành viên trong gia đình trong một hợp đồng không?.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                    <div class="card-body">
                                        Trong cùng một hợp đồng, có thể tham gia cho người hôn phối, vợ/chồng, con, cha/mẹ, anh chị em của người được bảo hiểm chính.

                                        VD: người được bảo hiểm chính là anh A. Anh A tham gia gói An Tâm Hưng Thịnh Toàn Diện (gói bảo hiểm chính) Vậy trong cùng một hợp đồng của anh A có thể tham gia bảo hiểm chăm sóc sức khỏe cho bản thân anh A, vợ anh A, con anh A, Cha/mẹ anh A. trong cùng một hợp đồng.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button style="background: linear-gradient(135deg, #1ebbf0 30%, #39dfaa 100%)"  class="btn btn-info collapsed" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                                            Trường hợp nằm viện nhưng quên báo về công ty Dai-ichi life. Sau một thời gian dài mới nhớ ra thì có được chi trả hay không?.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree3" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                    <div class="card-body">
                                        Khách hàng có thể nộp chứng từ liên quan đến đợt điều trị trong vòng 90 ngày kể từ ngày xuất viện hoặc điều trị ngoại trú, chăm sóc răng. Nếu nộp sau 90 ngày có thể gây ảnh hưởng đến quyền lợi thanh toán của khách hàng nếu có lý do hợp lệ, và không thanh toán khi nộp chứng từ quá 12 tháng kể từ ngày xuất viện hoặc điều trị ngoại trú, chăm sóc sức khỏe.
                                    </div>
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
