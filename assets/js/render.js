var headerContent = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg ">
        <a class="navbar-brand" href="https://vnux.pages.dev">
            <img src="/assets/img/VNux-logo.svg" width="auto" height="30" class="d-inline-block align-top" alt="">
            VNux
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="https://vnux.pages.dev"><i class="fa-solid fa-house"></i> Trang chủ</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-download"></i> Tải về</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-money-bill-wave"></i> Ủng hộ</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://gitlab.com/VNux"><i class="fa-solid fa-code"></i> Mã nguồn</a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"> <a class="nav-link" href="https://www.facebook.com/kode.vnux"><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li class="nav-item"> <a class="nav-link" href="https://gitlab.com/VNux"><i class="fa-brands fa-gitlab"></i></a>
                </li>
            </ul>
        </div>
    </nav>

        `;

var footerContent = `
    
<footer class="footer bg-dark shadow-lg">
<div >
    <p>Đây là thanh dươi, chưa có gì hết :V</p>
</div>
</footer>
`;


document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;
