<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Sidebar Menu</title>
</head>

<body>

    <div class="navigation">
        <div class="menuToggle"></div>
        <ul>
            <li class="list active" style="--clr: #f44336;">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list" style="--clr: #ffa117;">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span class="text">About</span>
                </a>
            </li>
            <li class="list" style="--clr: #0fc704;">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                    <span class="text">Messages</span>
                </a>
            </li>
            <li class="list" style="--clr: #2196f3;">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                    <span class="text">Photos</span>
                </a>
            </li>
            <li class="list" style="--clr: #b145e9;">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span class="text">Settings</span>
                </a>
            </li>
        </ul>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <script>

        const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');

        menuToggle.onclick = function () {
            navigation.classList.toggle('open');
        };

        const list = document.querySelectorAll('.list');

        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('active')
            );
            this.classList.add('active');
        }

        list.forEach((item) =>
            item.addEventListener('click', activeLink)
        );

    </script>
      
    <style>
      @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #3d4152;
}

.navigation {
    position: fixed;
    inset: 20px 0 20px 20px;
    width: 75px;
    background: #fff;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation.open {
    width: 250px;
}

.navigation .menuToggle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
}

.navigation .menuToggle::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(-8px);
    transition: 0.5s;
}

.navigation.open .menuToggle::before {
    transform: translateY(0px) rotate(45deg);
}

.navigation .menuToggle::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(8px);
    transition: 0.5s;
    box-shadow: 0 -8px 0 #333;
}

.navigation.open .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
    box-shadow: none;
}

.navigation ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.navigation ul li {
    list-style: none;
    position: relative;
    width: 100%;
    height: 60px;
    padding: 0 10px;
    transition: 0.5s;
}

.navigation ul li.active {
    transform: translateX(30px);
}

.navigation.open ul li.active {
    transform: translateX(10px);
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    text-decoration: none;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 55px;
    height: 55px;
    line-height: 60px;
    transition: 0.5s;
    border-radius: 10px;
    font-size: 1.75em;
    color: #222;
}

.navigation ul li.active a .icon {
    background: var(--clr);
    color: #fff;
}

.navigation ul li a .icon::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    filter: blur(8px);
    opacity: 0;
    transition: 0.5s;
}

.navigation ul li.active a .icon::before {
    opacity: 0.5;
}

.navigation ul li a .text {
    position: relative;
    padding: 0 15px;
    height: 60px;
    display: flex;
    align-items: center;
    color: #333;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}

.navigation.open ul li a .text {
    opacity: 1;
    visibility: visible;
}

.navigation ul li.active a .text {
    color: var(--clr);
}
    </style>

</body>

</html>
