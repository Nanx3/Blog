<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Post;
use App\User;
class PostTest extends TestCase
{

    use WithoutMiddleware; //To not use the CSRF token
    use DatabaseTransactions; //Rollback

    /**
     * @group CreatePostSuccess
     *
     */
    public function testCreatePostSuccess()
    {
        $tags = [1,2,3];
        $user = User::first();
        $this->actingAs($user)
            ->post('admin/post', [
                         "title" => 'Esto es un ejemplo',
                         "tags" => $tags,
                         "description" => 'Ejemplo']) ////Created successfully
            ->seeJson(['success' => true ]);
    }

    /**
     * @group CreatePostFail
     *
     */
    public function testCreatePostFail()
    {
        $user = User::first();
        $this->actingAs($user)
            ->post('admin/post', [
                "title" => 'Esto es un ejemplo',
                "tags" => '',
                "description" => 'Ejemplo']) //Error 302
            ->assertResponseStatus(302);
    }

    /**
     * @group UpdatePostSuccess
     *
     */
    public function testUpdatePostSuccess()
    {
        $tags = [1,2,3];
        $user = User::first();
        $post = Post::first();
        $this->actingAs($user)
            ->put('admin/post/'.$post->id, [
                "title" => 'Esto es un ejemplo',
                "tags" => $tags,
                "description" => 'Ejemplo'])  //Updated successfully
            ->seeJson(['success' => true ]);
    }

    /**
     * @group UpdatePostFail
     *
     */
    public function testUpdatePostFail()
    {
        $user = User::first();
        $post = Post::first();
        $this->actingAs($user)
            ->put('admin/post/'.$post->id, [
                "title" => 'Esto es un ejemplo',
                "tags" => '',
                "description" => 'Ejemplo'])
            ->assertResponseStatus(302); //Error 302
    }

    /**
     * @group DeletePostSuccess
     *
     */
    public function testDeletePostSuccess()
    {
        $user = User::first();
        $post = Post::first();
        $this->actingAs($user)
            ->delete('admin/post/'.$post->id)
            ->seeJson(['success' => true ]); //Deleted successfully
    }

    /**
     * @group DeletePostFail
     *
     */
    public function testDeletePostFail()
    {
        $user = User::first();
        $number = -1200;
        $this->actingAs($user)
            ->delete('admin/post/'.$number)
            ->assertResponseStatus(404); //Not found
    }


}
