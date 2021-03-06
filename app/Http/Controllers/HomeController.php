<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function admin()
    {
        return redirect()->route('login');
    }

    public function index()
    {
        $recentPosts = Post::orderBy('id', 'desc')
            ->where('type_id', config('constant.post.types.Bài viết'))
            ->where('status_id', config('constant.post.status.Công bố'))
            ->limit(10)->get();

        return view('frontend.index', compact('recentPosts'));
    }

    public function gioiThieu()
    {
        $post = Post::where('type_id', config('constant.post.types.Giới thiệu'))
            ->first();

        return view('frontend.bai_viet.base', compact('post'));
    }

    public function tuyenDung()
    {
        $post = Post::where('type_id', config('constant.post.types.Tuyển dụng'))
            ->first();

        return view('frontend.bai_viet.base', compact('post'));
    }

    public function lienHe()
    {
        $post = Post::where('type_id', config('constant.post.types.Liên hệ'))
            ->first();

        return view('frontend.bai_viet.lien_he', compact('post'));
    }

    public function sanPham(string $nameAndId)
    {
        $id = get_last_character($nameAndId);
        $post = Post::find($id);

        return view('frontend.san_pham.base', compact('post'));
    }

    public function sendContact(Request $request)
    {
        $contact = new Contact($request->all());

        Mail::send($contact);
    }

    public function getPosts()
    {
        $posts = Post::orderBy('id', 'desc')
            ->where('type_id', config('constant.post.types.Bài viết'))
            ->where('status_id', config('constant.post.status.Công bố'))
            ->paginate(10);

        $tags = Tag::all();
        $recentPosts = Post::orderBy('id', 'desc')->limit(3)->get();

        return view('frontend.post_index', compact('posts', 'recentPosts', 'tags'));
    }

    public function getPostsByTask(string $tagNameAndId, Request $request)
    {
        $tag = Tag::find(get_last_character($tagNameAndId));

        $posts = Post::orderBy('id', 'desc')
            ->whereHas('tags', function ($query) use ($tag) {
                $query->where('tag_id', $tag->id);
            })
            ->where('type_id', config('constant.post.types.Bài viết'))
            ->where('status_id', config('constant.post.status.Công bố'))
            ->paginate(10);

        $tags = Tag::all();
        $recentPosts = Post::orderBy('id', 'desc')->limit(3)->get();

        return view('frontend.post_index', compact('posts', 'recentPosts', 'tags'));
    }

    public function showPost($nameAndId)
    {
        $postId = get_last_character($nameAndId);
        $post = Post::find($postId);

        $tags = Tag::all();
        $recentPosts = Post::orderBy('id', 'desc')->limit(3)->get();

        return view('frontend.bai_viet.base', compact('post'));
    }

    public function hoTroKhachHang()
    {
        return view('frontend.ho_tro_khach_hang');
    }

//    public function tuyenDung()
//    {
//        return view('frontend.tuyendung');
//    }

    public function tinTuc()
    {
        $posts = Post::orderBy('id', 'desc')
            ->where('type_id', config('constant.post.types.Bài viết'))
            ->where('status_id', config('constant.post.status.Công bố'))
            ->paginate(10);

        return view('frontend.tintuc', compact('posts'));
    }
}
