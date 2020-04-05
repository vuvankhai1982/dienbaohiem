@component('mail::message')
# Xin chào Admin,

Bạn có một liên hệ mới từ người dùng truy cập website với nội dung như sau:

* Tên: {{ $name }}
* Số điện thoại: {{ $phone }}
* Email: {{ $email }}
* Nội dung: {{ $content }}

<br>

<hr>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
