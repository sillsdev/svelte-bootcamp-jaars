<script>
    import HistoryCard from '$lib/components/HistoryCard.svelte';
    let history = [
        {book:"World English Bible",
            reference:"Genesis 1",
            date:"Today | 14:49",},
        {book:"World English Bible",
            reference:"Genesis 1:1",
            date:"Today | 14:48",},
        {book:"World English Bible",
            reference:"John 1",
            date:"Today | 11:09",},
        {book:"World English Bible",
            reference:"John 1:7",
            date:"Today | 10:03",},
        {book:"World English Bible",
            reference:"John 1",
            date:"Today | 09:48",},
        {book:"World English Bible",
            reference:"John 1:5",
            date:"Today | 09:48",},
        {book:"World English Bible",
            reference:"John 1:1",
            date:"Today | 09:46",},
        {book:"World English Bible",
            reference:"John 1",
            date:"Today | 09:45",},
        {book:"World English Bible",
            reference:"John 1:3",
            date:"Today | 09:43",},
        {book:"World English Bible",
            reference:"John 1",
            date:"Today | 09:43",},
        {book:"World English Bible",
            reference:"John 1:3",
            date:"Today | 09:42",},
        {book:"World English Bible",
            reference:"John 1",
            date:"Yesterday | 15:36",},
        {book:"World English Bible",
            reference:"John 1:3",
            date:"Yesterday | 15:30",},
        {book:"World English Bible",
            reference:"John 1",
            date:"22 May 2022 | 13:48",},
        {book:"World Messianic Bible",
            reference:"Yochanan 1",
            date:"22 May 2022 | 13:42",},
        {book:"World English Bible",
            reference:"John 1",
            date:"22 May 2022 | 13:39",},];
</script>

<h1>History</h1>

<body class="history">
    {#each history as h}
        <HistoryCard {...h} />
    {/each}

<!--Original HTML-->
<!--<div id="15" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkGEN">
            Genesis 1
        </div>
        <div class="history-item-date history-align-right">
            Today | 14:49
        </div>
    </div>

    <div id="14" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkGEN">
            Genesis 1:1
        </div>
        <div class="history-item-date history-align-right">
            Today | 14:48
        </div>
    </div>

    <div id="13" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            Today | 11:09
        </div>
    </div>

    <div id="12" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:7
        </div>
        <div class="history-item-date history-align-right">
            Today | 10:03
        </div>
    </div>

    <div id="11" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:48
        </div>
    </div>

    <div id="10" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:5
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:48
        </div>
    </div>

    <div id="9" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:1
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:46
        </div>
    </div>

    <div id="8" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:45
        </div>
    </div>

    <div id="7" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:3
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:43
        </div>
    </div>

    <div id="6" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:43
        </div>
    </div>

    <div id="5" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:3
        </div>
        <div class="history-item-date history-align-right">
            Today | 09:42
        </div>
    </div>

    <div id="4" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            Yesterday | 15:36
        </div>
    </div>

    <div id="3" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1:3
        </div>
        <div class="history-item-date history-align-right">
            Yesterday | 15:30
        </div>
    </div>

    <div id="2" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            22 May 2022 | 13:48
        </div>
    </div>

    <div id="1" class="history-item-block">
        <div class="history-item-book-collection">World Messianic Bible</div>
        <div class="history-item-reference history-item-reference-bcC02 history-item-reference-bcC02-bkJHN">
        Yochanan 1
        </div>
        <div class="history-item-date history-align-right">
            22 May 2022 | 13:42
        </div>
    </div>

    <div id="0" class="history-item-block">
        <div class="history-item-book-collection">World English Bible</div>
        <div class="history-item-reference history-item-reference-bcC01 history-item-reference-bcC01-bkJHN">
            John 1
        </div>
        <div class="history-item-date history-align-right">
            22 May 2022 | 13:39
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
            if ((els[i].className.indexOf('history-item-block') >= 0) || (els[i].className.indexOf('history-item-referemce') >= 0) || (els[i].className.indexOf('history-item-date') >= 0)) {
                els[i].addEventListener('click', onClickItem, false);
            }
        }
    
    </script>-->  
</body> 