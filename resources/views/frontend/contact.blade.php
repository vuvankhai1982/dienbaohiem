<form class="leave-comment contact-form" autocomplete="on" id="contact-form"  name="contact-form" method="post">
    @csrf
    <fieldset>
        <div id="formstatus"></div>
        <div class="Contact-us">
            <div class="form-input col-md-12">
                <input type="text" id="name" name="name" placeholder="Họ và tên" required>
            </div>
            <div class="form-input col-md-12">
                <input type="text" id="email" name="phone" placeholder="Số điện thoại" required>
            </div>
            <div class="form-input col-md-12">
                <input type="email" id="subject" name="email" placeholder="Email">
            </div>
            <div class="form-input col-md-12">
                <textarea class="txt-box textArea" id="message" name="content" cols="40" rows="7" placeholder="Nội dung" spellcheck="true" required></textarea>
            </div>

            <div class="form-submit col-md-12">
                <input type="submit" id="submit-contact" class="btn common-btn" value="Gửi liên hệ">
            </div>
        </div>
    </fieldset>
</form>
