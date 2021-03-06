<?php

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'title' => 'Giới thiệu',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Giới thiệu'),
            'content' => 'Nội dung giới thiệu về công ty',
        ]);

        DB::table('posts')->insert([
            'title' => 'Liên hệ',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Liên hệ'),
            'content' => 'Nội dung liên hệ về công ty',
        ]);
        DB::table('posts')->insert([
            'title' => 'Liên hệ',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Tuyển dụng'),
            'content' => 'Nội dung liên hệ về công ty',
        ]);

        DB::table('posts')->insert([
            'title' => 'An Tâm Hưng Thịnh Toàn Diện',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Sản phẩm'),
            'content' => 'Nội dung An Tâm Hưng Thịnh Toàn Diện',
        ]);

        DB::table('posts')->insert([
            'title' => 'An phúc hưng thịnh',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Sản phẩm'),
            'content' => 'Nội dung An phúc hưng thịnh',
        ]);

        DB::table('posts')->insert([
            'title' => 'An thịnh đầu tư',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Sản phẩm'),
            'content' => 'Nội dung An thịnh đầu tư',
        ]);

        DB::table('posts')->insert([
            'title' => 'Bảo hiểm chăm sóc sức khỏe',
            'status_id' => 2,
            'user_id' => 1,
            'type_id' => config('constant.post.types.Sản phẩm'),
            'content' => 'Nội dung Bảo hiểm chăm sóc sức khỏe',
        ]);

        factory(Post::class, 40)->create();

        $tags = Tag::all();

        Post::whereNotIn('id', [1, 2])->get()->each(function (Post $post) use ($tags) {
            $post->tags()->attach(
                $tags->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
