<?php
/**
 * unit_data:data from source
 */
class UnitData {
    public $key;
    public $method;
    public function get($unitDataGetter) {
        // @TODO
        return $unitDataGetter->get($this);
    }
}

/**
 * unit_data getter
 */
class UnitDataGetter {
    public function get() {

    }
}
