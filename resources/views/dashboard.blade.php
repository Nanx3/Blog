<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title>Webforce HQ</title>

    <link href='http://fonts.googleapis.com/css?family=Roboto:300italic,400italic,300,400,500,700,900' rel='stylesheet' type='text/css'/>

    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/bootstrap.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/materialadmin.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/font-awesome.min.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/material-design-iconic-font.min.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/theme-default/libs/jquery-ui/jquery-ui-theme.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/all.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/estilos.css" )}}"/>
    <link type="text/css" rel="stylesheet" href="{{asset("css/custom.css")}}"/>


    <link rel="shortcut icon"  href="{{asset("img/logo.ico")}}">


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script type="text/javascript" src={{asset("js/libs/utils/html5shiv.js")}}></script>
    <script type="text/javascript" src={{asset("js/libs/utils/respond.min.js")}}></script>
    <![endif]-->
</head>

<body class ="menubar-hoverable header-fixed full-content">

<div id="dashboard" class="container"></div>

<script src={{asset("js/libs/jquery/jquery-1.11.2.min.js")}}></script>
<script src={{asset("js/libs/jquery/jquery-migrate-1.2.1.min.js")}}></script>
<script src={{asset("js/libs/bootstrap/bootstrap.min.js")}}></script>

<script src={{asset("js/libs/spin.js/spin.min.js")}}></script>
<script src={{asset("js/libs/flot/jquery.flot.min.js")}}></script>
<script src={{asset("js/libs/flot/jquery.flot.time.min.js")}}></script>
<script src={{asset("js/libs/flot/jquery.flot.resize.min.js")}}></script>
<script src={{asset("js/libs/flot/jquery.flot.orderBars.js")}}></script>
<script src={{asset("js/libs/flot/curvedLines.js")}}></script>
<script src={{asset("js/libs/jquery-knob/jquery.knob.min.js")}}></script>
<script src={{asset("js/libs/sparkline/jquery.sparkline.min.js")}}></script>

<script src={{asset("js/libs/nanoscroller/jquery.nanoscroller.min.js")}}></script>
<script src={{asset("js/libs/d3/d3.min.js")}}></script>
<script src={{asset("js/libs/d3/d3.v3.js")}}></script>
<script src={{asset("js/libs/rickshaw/rickshaw.min.js")}}></script>
<script src={{asset("js/core/source/App.js")}}></script>
<script src={{asset("js/core/source/AppNavigation.js")}}></script>
<script src={{asset("js/core/source/AppOffcanvas.js")}}></script>
<script src={{asset("js/core/source/AppCard.js")}}></script>
<script src={{asset("js/core/source/AppForm.js")}}></script>
<script src={{asset("js/core/source/AppNavSearch.js")}}></script>
<script src={{asset("js/core/source/AppVendor.js")}}></script>
<script src={{asset("js/bundle.js")}}></script>
<script src={{asset("js/custom.js")}}></script>


</body>

</html>