<?php
/**
 * routes.php
 * Created by anonymoussc on 22/11/15 5:03.
 */

Route::get('/',
    [
        'as'   => 'home',
        'uses' => 'Anwendungen\Applications\Controllers\ApplicationsController@appStart',
    ]
);

Route::get('/unsupported-browser',
    [
        'as'   => 'app.unsupported',
        'uses' => 'Anwendungen\Applications\Controllers\ApplicationsController@appUnsupported',
    ]
);