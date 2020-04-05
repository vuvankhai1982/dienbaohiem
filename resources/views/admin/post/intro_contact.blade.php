@extends('admin.layouts.app')

@section('content')
    @include('admin.post.base', [
        'route' => route('admin.posts.update', $post->id),
        'method' => 'put',
        'title' => 'Chỉnh sửa bài viết',
        'type' => 'edit',
        'isSpecialPost' => true,
    ])
@endsection



