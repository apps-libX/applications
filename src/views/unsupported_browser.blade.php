<!doctype html>
<html ng-app="applications">
<head>
    <title>Unsupported browser</title>
    <style>
        body {
            background-color : #FBFBFB;
            text-align       : center;
            font-family      : Helvetica, Arial;
            color            : #717887
        }

        div {
            display : inline-block;
        }

        a {
            text-decoration : none;
        }

        #font-warning {
            margin-top  : 200px;
            font-size   : 20px;
            font-weight : bold;
        }

        #box-message {
            font-size   : 16px;
            line-height : 23px;
        }

        #box-separator {
            width  : 50px;
            height : 1px;
        }
    </style>
</head>
<body>

<h3 id="font-warning">Please update your browser</h3>
<br>

<div id="box-message">You are using an old version of Internet Explorer<br>
    Please update it or try one of these options.
</div>
<br>
<br>

<div>
    <a target="_blank" href="https://www.mozilla.org/en-US/firefox/new/">
        <img src="https://raw.githubusercontent.com/anonymoussc/stratosphere/gh-pages/img/public/firefox_logo.png"/><br>
    </a>
</div>

<div id="box-separator"></div>

<div>
    <a target="_blank" href="https://www.google.com/chrome/browser/desktop/index.html">
        <img src="https://raw.githubusercontent.com/anonymoussc/stratosphere/gh-pages/img/public/chrome_logo.png"/><br>
    </a>
</div>

</body>
</html>


{{--
  - unsupported_browser.blade.php
  - Created by anonymoussc on 05/10/15 19:38.
--}}
