<form class="leave-comment contact-form" autocomplete="on" name="contact-form" method="post" style="margin-top: 20px">
    @csrf
    <div class="form-contact">
        <div class="Contact-us">
            <div class="form-input col-md-12">
                <input type="text" id="name" name="name" class="form-control" placeholder="Họ và tên" required>
            </div>
            <div class="form-input col-md-12">
                <input type="text" id="email" name="phone" class="form-control" placeholder="Số điện thoại" required>
            </div>
            <div class="form-input col-md-12">
                <input type="email" id="subject" name="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-input col-md-12">
                <textarea class="txt-box textArea form-control" id="message"  name="content" cols="40" rows="7" placeholder="Nội dung" spellcheck="true" required></textarea>
            </div>

            <div class="form-submit col-md-12" style="margin-top: 10px; text-align: center">
                <input type="submit" class="submit-contact btn common-btn" value="Gửi liên hệ">
            </div>
        </div>
    </div>
    <div class="success-message-contact" style="display: none; text-align: center">
        <div class="form-submit col-md-12" style="margin-top: 10px">
            <input type="button" class="btn common-btn message-contact" value="Cảm ơn bạn! Tin nhắn đã được gửi thành công">
        </div>
    </div>
</form>



