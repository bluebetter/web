<?php
namespace app\javascript\controller;
use think\Controller;

class Index {
    public function index() {
        dump('a');
        //$c = new \think\Controller();
        //$c = new Controller();
        $c = new test();
        //dump($c);
        $c->test();
    }
}

class test extends Controller {
    public function test() {
        dump(__CLASS__);
    }
}