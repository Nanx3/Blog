<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <title>WebForce HQ</title>
    <link rel="stylesheet" href="css/login.css">
    <link type="text/css" rel="stylesheet" href="css/theme-default/bootstrap.css" />
    <link rel='stylesheet prefetch' href='http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css'>
    <link rel='stylesheet prefetch' href='https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css'>

    <link rel="shortcut icon"  href="{{asset("img/logo.ico")}}">
</head>

<body>
<div class="all-login">
    <div class="left-login">
        <div class="col-md-12 login-box flex-lg flex-vc">
            <div class="log-content">


                @if (session('status'))
                    <div id="snackbar_enviar_correo">
                        An email has been sent to reset your password
                    </div>

                    <script type="text/javascript">
                        // Get the snackbar DIV
                        var x = document.getElementById("snackbar_enviar_correo");

                        // Add the "show" class to DIV
                        x.className = "show";

                        // After 3 seconds, remove the show class from DIV
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
                        banderaRecuperar = false;
                    </script>
                @endif

                @if (count($errors) > 0)
                    <div id="snackbar">
                        <strong>¡Oops!</strong> There has been problem <br/>
                        @foreach ($errors->all() as $error)
                            {{ $error }}<br/>
                        @endforeach
                    </div>
                    <script type="text/javascript">
                        // Get the snackbar DIV
                        var x = document.getElementById("snackbar");

                        // Add the "show" class to DIV
                        x.className = "show";

                        // After 3 seconds, remove the show class from DIV
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                    </script>
                @endif

                <div class="app-title">
                    <img src="{{url('/img/logo.png')}}" alt="Logo">
                </div>

                <div>
                    <div id="wrapper">
                        <div id="boxy-login-wrapper">
                            <div id="boxy-login-form" name="boxy-login-form">
                                <fieldset>
                                    <div class="boxy-form-inner rotateFirst3d">

                                        <form name="form-login" class="form" role="form" method="POST" action="{{ url('/login') }}">
                                            {{ csrf_field() }}

                                            <span class="end-cap left">
                                                            <span class="glyphicon glyphicon-user" data-toggle="tooltip" title="Login"></span>
                                                        </span>

                                            <span class="side front">
                                                              <span class="glyphicon glyphicon-user" data-toggle="tooltip" title="Email"></span>
                                                              <input id="email" type="email" value="{{ old('email')}}" name="email" class="rotate boxy-input" placeholder="Email" required />
                                                              <button class="boxy-button next-field" data-step="0"></button>
                                                        </span>

                                            <span class="side bottom">
                                                              <span class="glyphicon glyphicon-asterisk" data-toggle="tooltip" title="password"></span>
                                                              <input id="password" step="2" type="password" name="password" class="rotate boxy-password" placeholder="Password" required />
                                                              <button class="boxy-button next-field sub" data-step="1"></button>
                                                        </span>

                                            <span class="side back">
                                                              <span class="boxy-checked glyphicon glyphicon-check"></span>
                                                              <span class="boxy-unchecked glyphicon glyphicon-unchecked"></span>
                                                                  <label for="remember-me">
                                                                    <input id="remember-me" type="checkbox" name="remember-me" checked />Remember me?
                                                                  </label>
                                                               <button  type="submit" class="btn" class="boxy-button boxy-final-button" data-step="2">OK</button>
                                                        </span>
                                        </form>

                                        <form name="form-recuperar" class="form" role="form" method="POST" action="{{ url('/password/email') }}">
                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                            <span class="side top">
                                                              <span class="glyphicon glyphicon-question-sign" data-toggle="tooltip" title="Recover password"></span>
                                                              <input id="emailP" step="9" type="email" name="email" value="{{ old('email') }}" class="rotate boxy-input" placeholder="Enter email to reset" />
                                                              <button type="submit" style="background: rgba(255, 255, 255, 0) !important; border-color: rgba(255, 255, 255, 0) !important;" class="boxy-button next-field forgot-btn" data-step="9"></button>
                                                        </span>
                                        </form>
                                        <span class="end-cap right">
                                                            <span class="glyphicon glyphicon-remove-circle icon-failure" data-toggle="tooltip" title=""></span>
                                                            <span class="glyphicon glyphicon-user icon-success" data-toggle="tooltip" title="">
                                                            </span>
                                                        </span>
                                    </div>
                                </fieldset>
                            </div>


                            <span class="boxy-refresh glyphicon glyphicon-refresh"></span>
                            <em class="small-forgot">
                                <a href="#" class="boxy-forgot">Forget your password?</a>
                            </em>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="right-login"></div>
</div>


<div id="r8-logo-coin" ></div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min.js'></script>
<script src='http://s3-us-west-2.amazonaws.com/s.cdpn.io/1251/bootstrap.glyphs.js'></script>
<script src='js/login.js'></script>

</body>
</html>
