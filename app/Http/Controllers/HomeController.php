<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index()
    {
        return view('frontend.index');
    }

    public function sendContact(Request $request)
    {
        $contact = new Contact($request->all());

        Mail::send($contact);
    }

    public function getPosts()
    {
        $posts = Post::all();
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

        return view('frontend.post_show', compact('post', 'recentPosts', 'tags'));
    }
}
