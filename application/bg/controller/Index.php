<?php
namespace app\bg\controller;
use think\Controller;

class Index extends Controller{
    public function Index() {
        return $this->fetch();
    }

    public function letter() {
        return $this->fetch('letter');
    }

    public function touch() {
        return $this->fetch();
    }

    public function music() {
        return $this->fetch();
    }
}
