<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Shape Button</title>
</head>

<body>
    <a href="#">Button</a>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #cbe058;
}

a {
    position: relative;
    padding: 15px 40px;
    background: #fff;
    color: #555;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2em;
    letter-spacing: 2px;
    transition: 0.5s;
    clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);
}

a:hover {
    background: #a7b612;
    color: #fff;
    letter-spacing: 4px;
    clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 10% 100%, 0% 50%, 10% 0);
}
  </style>
</body>

</html>
