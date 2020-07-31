<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <!--------------< LOGIN / REGISTER >-------------->
        <div class="center-layer" id="center-layer">
            <div class="register-login-wrapper">
                <div class="x" id="x"></div>
                <div class="login-wrapper">
                    <div class="login-icon"></div>
                    <div class="login-half">
                        <div class="login-half-input-title">
                            Email
                        </div>
                        <div class="login-half-input">
                            <input type="text">
                        </div>
                        <div class="login-half-input-title">
                            Username
                        </div>
                        <div class="login-half-input">
                            <input type="text">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="register-login-shader" id="register-login-shader"></div>

        <!-------------< TITLE >-------------------------->
        <div class="title-wrapper">
            <div class="title">
                Notecard-Online
            </div>
        </div>

        <!--------------< NOTECARD ANIMATION >------------------------------->
        <div class="panel-wrapper">
            <div class="panel" id="panel3" style="top: -16px; left: -18px">
            </div>
            <div class="panel" id="panel2" style="top: -8px; left: -9px">
            </div>
            <div class="panel" id="panel1">
            </div>
        </div>

        <!---------------------< BUTTONS >---------------------->
        <div class="button-wrapper">
            <a class="button" id="login-button">Login</a>
            <a class="button" id="register-button">Register</a>
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="wave" d=""/></svg>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="wave2" d=""/></svg>
        
		<script src="node_modules/jquery/dist/jquery.min.js"></script>
		<script src="node_modules/gsap/dist/gsap.min.js"></script>
		<script src="node_modules/wavify/wavify.js"></script>
        <script src="node_modules/animejs/lib/anime.min.js"></script>
		<script src="node_modules/wavify/jquery.wavify.js"></script>
        <script src="js/animation.js"></script>
        <script src="js/functions.js"></script>
        <script src="js/index.js"></script>
    </body>
</html>