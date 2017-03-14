<!DOCTYPE HTML>
<html lang="en">
<head>
    <!--=============== basic  ===============-->
    <meta charset="UTF-8">
    <title>Blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <!--=============== css  ===============-->
    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/bootstrap.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="css/css_public/reset.css">
    <link type="text/css" rel="stylesheet" href="css/css_public/plugins.css">
    <link type="text/css" rel="stylesheet" href="css/css_public/style.css">
    <link type="text/css" rel="stylesheet" href="css/custom_public.css">

    <!--=============== favicons ===============-->
    <link rel="shortcut icon"  href="{{asset("img/logo.ico")}}">

</head>
<body>
<!--Loader  -->
<div class="loader"><i class="fa fa-refresh fa-spin"></i></div>
<!--LOader end  -->
<!--================= main start ================-->
<div id="main">

    <!--=============== wrapper ===============-->

    <div id="public"></div>

    <!-- wrapper end -->
    <div class="left-decor"></div>
    <div class="right-decor"></div>
    <!--=============== Footer ===============-->
    <footer>
        <!-- footer social -->
        <div class="footer-social">
            <ul>
                <li><a href="#" target="_blank" ><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" target="_blank" ><i class="fa fa-instagram"></i></a></li>
                <li><a href="#" target="_blank" ><i class="fa fa-pinterest"></i></a></li>
                <li><a href="#" target="_blank" ><i class="fa fa-tumblr"></i></a></li>
            </ul>
        </div>
        <!-- footer social end -->
        <div class="to-top"><i class="fa fa-angle-up"></i></div>
    </footer>
    <!-- footer end -->
</div>
<!-- Main end -->
<!--=============== scripts  ===============-->
<script src={{asset("js/libs/bootstrap/bootstrap.min.js")}}></script>
<script type="text/javascript" src="js/js_public/jquery.min.js"></script>
<script type="text/javascript" src="js/js_public/plugins.js"></script>
<script type="text/javascript" src="js/js_public/scripts.js"></script>
<script type="text/javascript" src={{asset("js/bundlePublic.js")}}></script>

</body>
</html>