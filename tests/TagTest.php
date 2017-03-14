<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Tag;
use App\User;
class TagTest extends TestCase
{

    use WithoutMiddleware; //To not use the CSRF token
    use DatabaseTransactions; //Rollback

    /**
     * @group CreateTagSuccess
     *
     */
    public function testCreateTagSuccess()
    {
        $user = User::first();
        $this->actingAs($user)
            ->post('admin/tag', [
                "name" => 'Esto es un ejemplo']) ////Created successfully
            ->seeJson(['success' => true ]);
    }

    /**
     * @group CreateTagFail
     *
     */
    public function testCreateTagFail()
    {
        $user = User::first();
        $this->actingAs($user)
            ->post('admin/tag', [
                "name" => '']) //Error 302
            ->assertResponseStatus(302);
    }

    /**
     * @group UpdateTagSuccess
     *
     */
    public function testUpdateTagSuccess()
    {
        $user = User::first();
        $tag = Tag::first();
        $this->actingAs($user)
            ->put('admin/tag/'.$tag->id, [
                "name" => 'Esto es un ejemplo'])  //Updated successfully
            ->seeJson(['success' => true ]);
    }

    /**
     * @group UpdateTagFail
     *
     */
    public function testUpdateTagFail()
    {
        $user = User::first();
        $tag = Tag::first();
        $this->actingAs($user)
            ->put('admin/tag/'.$tag->id, [
                "name" => ''])
            ->assertResponseStatus(302); //Error 302
    }

    /**
     * @group DeleteTagSuccess
     *
     */
    public function testDeleteTagSuccess()
    {
        $user = User::first();
        $tag = Tag::first();
        $this->actingAs($user)
            ->delete('admin/tag/'.$tag->id)
            ->seeJson(['success' => true ]); //Deleted successfully
    }

    /**
     * @group DeleteTagFail
     *
     */
    public function testDeleteTagFail()
    {
        $user = User::first();
        $number = -1200;
        $this->actingAs($user)
            ->delete('admin/tag/'.$number)
            ->assertResponseStatus(404); //Not found
    }

}
