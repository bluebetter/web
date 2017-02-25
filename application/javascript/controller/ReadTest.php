<?php
namespace app\javascript\controller;
use think\Controller;

class ReadTest extends Controller {
    public function index() {
        return $this->fetch('index');
    }
}
