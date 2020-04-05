<div class="row">
    <div class="col-md-12">
        <div class="card {{ $type == 'create' ? 'card-primary' : 'card-warning' }}">
            <div class="card-header">
                <h3 class="card-title">{{ $title }}</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            {{ Form::open(array('url' => $route, 'method' => $method, 'enctype' => 'multipart/form-data','class' => '')) }}
            {{ Form::hidden('id', $post->id, ['class' => 'form-control']) }}
            <div class="card-body row">
                <div class="col-sm-8">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Tiêu đề</label>
                        <div class="col-sm-10">
                            {{ Form::text('title', $post->title, ['class' => 'form-control']) }}
                            @error('title')
                            <div class="error text-red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group row" style="{{ !isset($isSpecialPost) ? '' : 'display: none' }}">
                        <label class="col-sm-2 col-form-label">Trạng thái</label>
                        <div class="col-sm-10">
                            {{ Form::select('status_id', array_flip(config('constant.post.status')), $post->status_id ?? config('constant.post.status.Công bố'), ['class' => 'form-control']) }}
                            @error('status_id')
                            <div class="error text-red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>

                    @if(!isset($isSpecialPost))
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Tags</label>
                        <div class="col-sm-10">
                            @php
                                $tagIdsOfPost = $tagsOfPost->pluck('id')->all();
                            @endphp
                            <select class="basic-multiple form-control" name="tags[]" multiple="multiple">
                                @foreach($tags as $tag)
                                    <option {{ in_array($tag->id, $tagIdsOfPost) ? "selected='selected'" : ''}} value="{{ $tag->id }}">{{ $tag->name }}</option>
                                @endforeach
                            </select>
                            @error('tags[]')
                            <div class="error text-red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    @endif
                </div>
                <div class="col-sm-4" style="{{ !isset($isSpecialPost) ? '' : 'display: none' }}">
                    <div class="form-group text-center">
                        <img id="show-image" src="#" alt="" style="max-height: 150px; max-width: 350px">
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            {{ Form::file('file', ['id' => 'select-image']) }}
                            @error('file')
                            <div class="error text-red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group row">
                        <label class="col-sm-1 col-form-label">Nội dung</label>
                        <div class="col-sm-11">
                            {{ Form::textarea('content', $post->content, ['class' => 'detail-description form-control']) }}
                            @error('content')
                            <div class="error text-red">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </div>
            </div>

            <!-- /.card-body -->
            <div class="actions_fixbar">
                <div class="content-wrapper text-center" style="background: #f4f6f9; padding-top: 8px;">
                    <div class="form-group tl-center">
                        <button type="submit" class="btn btn-primary">Lưu</button>
                    </div>
                </div>
            </div>
            {{ Form::close() }}
        </div>
    </div>
</div>

@section('script')
    <script>
        $(function () {
            $('.detail-description').summernote({
                height: 350,
            });

            $('.basic-multiple').select2({
                tags: true,
                multiple: true,
                tokenSeparators: [','],
                createTag: function(newTag) {
                    return {
                        id: 'new:' + newTag.term,
                        text: newTag.term + ' (new)'
                    };
                }
            });

        })
    </script>
@endsection
