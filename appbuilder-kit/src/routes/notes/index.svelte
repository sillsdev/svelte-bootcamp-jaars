<h1>Notes</h1>

<body class="annotations">
    <div id="0" class="annotation-item-block">
        <div class="annotation-item-icon annotation-float-left">
            <span><img src="ic_note_24_black.png" alt="text bubble"></span>
        </div>
        <div class="annotation-item-menu annotation-float-right">
            <span onclick="onShowDropdownMenu('0')" class="dropbtn"><img class="dropbtn-image" src="ic_dots_vertical_24_black.png" alt="vertical dots"></span>
            <div id="menu-0" class="dropdown-content">
                <a href="I-0">View</a>
                <a href="E-0">Edit</a>
                <a href="S-0">Share</a>
                <a href="D-0">Delete</a>
            </div>
        </div>
        <div class="annotation-item-content-block">
            <div class="annotation-item-reference annotation-item-reference-bcC01 annotation-item-reference-bcC01-bkJHN">
                John 1:9
            </div>
            <div class="annotation-item-text annotation-item-text-bcC01 annotation-item-text-bcC01-bkJHN">
                He is the light
            </div>
        </div>
        <div class="annotation-item-date annotation-align-right">
            23 May 2022
        </div>
    </div>
    <div id="1" class="annotation-item-block">
        <div class="annotation-item-icon annotation-float-left">
            <span><img src="ic_note_24_black.png" alt="text bubble"></span>
        </div>
        <div class="annotation-item-menu annotation-float-right">
            <span onclick="onShowDropdownMenu('1')" class="dropbtn"><img class="dropbtn-image" src="ic_dots_vertical_24_black.png" alt="vertical dots"></span>
            <div id="menu-1" class="dropdown-content">
                <a href="I-1">View</a>
                <a href="E-1">Edit</a>
                <a href="S-1">Share</a>
                <a href="D-1">Delete</a>
            </div>
        </div>
        <div class="annotation-item-content-block">
            <div class="annotation-item-reference annotation-item-reference-bcC01 annotation-item-reference-bcC01-bkJHN">
                John 1:1
            </div>
            <div class="annotation-item-text annotation-item-text-bcC01 annotation-item-text-bcC01-bkJHN">
                Similar to Genesis 1:1
            </div>
        </div>
        <div class="annotation-item-date annotation-align-right">
            23 May 2022
        </div>
    </div>
    <script>
        function onClickItem(e) {
            var target = e.target;
            while (target.id == '') { target = target.parentNode; }
            window.location.href = 'I-' + target.id;
        }
        
        els = document.getElementsByTagName('div');
        
        for (var i = 0; i < els.length; i++) {
            if ((els[i].className.indexOf('annotation-item-text') >= 0) || (els[i].className.indexOf('annotation-item-title') >= 0) || (els[i].className.indexOf('annotation-item-reference') >= 0)) {
                els[i].addEventListener('click', onClickItem, false);
            }
        }
        
        function onShowDropdownMenu(id) {
            var el = document.getElementById("menu-" + id);
            var isShowing = el.className.indexOf('show') >= 0
        
            closeDropdownMenus();
        
            if (!isShowing) {
                el.className = 'dropdown-content show';
            };
        }
        
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn-image')) {
                closeDropdownMenus();
        }
        }
        
        function closeDropdownMenus() {
            var dropdowns = document.getElementsByClassName("dropdown-content");
        
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.className.indexOf('show') > 0) {
                    openDropdown.className = 'dropdown-content';
                }
            }
        }
        
        function hideAnnotation(id) {
            document.getElementById(id).className = document.getElementById(id).className + ' hidden';
        }
    </script>
</body>