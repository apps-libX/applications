<?php
/**
 * ApplicationsController.php
 * Created by anonymous on 06/03/16 0:50.
 */

namespace Anwendungen\Applications\Controllers;

use Componeint\AppFoundation\Controller\Controller;

/**
 * Class ApplicationsController
 * @package Anwendungen\Applications\Controllers
 */
class ApplicationsController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function appStart()
    {
        return view('applications::index');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function appUnsupported()
    {
        return view('applications::unsupported_browser');
    }

}