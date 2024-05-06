<!doctype html>
<html lang="en">

<head>
    <title>Stock Pulse | Registration</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="stylesheet" href="../css/registration.css">


    <script src="https://kit.fontawesome.com/b38ffb082e.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
</head>

<body>
    <main class="container" id="registration-box">
        <a href="/" class="logo">
            <i class="fa-solid fa-chart-line"></i>
            <h1>Stock<span>Pulse</span></h1>
        </a>
        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <div class="invalid-feedback"></div>
                        <div class="valid-feedback"></div>
                        <form id="registration" method="post" action="../processes/registration-process.php">
                            <input type="hidden" name="action" value="register">
                            <div class="col-md-12">
                               <input class="form-control" type="text" name="username" placeholder="Username">
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="text" name="email" placeholder="E-mail Address">
                            </div>

                           <div class="col-md-12">
                              <input class="form-control" type="password" name="password" placeholder="Password" id="password">
                              <input class="form-check-input" type="checkbox" name="checkPassword" value="" id="checkPassword">
                              <label class="form-check-label">Show Password</label>
                           </div>

                        <div class="form-check" id="checkbox">
                          <input class="form-check-input" type="checkbox" name="checkbox" value="" id="invalidCheck">
                          <label class="form-check-label">I agree to the <a href="#">Terms and Conditions</a></label>
                        </div>
                  

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </main>
    
    <script src="../js/registration.js"></script>

    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
    </script>
</body>

</html>