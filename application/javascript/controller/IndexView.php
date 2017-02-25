<?php
namespace app\javascript\controller;
use think\Controller;

class IndexView extends Controller {
    public function index() {
        return $this->fetch();
    }
}