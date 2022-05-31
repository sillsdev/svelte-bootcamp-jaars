<script>
    import ScriptureView from "$lib/components/ScriptureView.svelte";
    let text = {
        title:"The Good News According to John",
        book:"John",
        chapter:"1",
        bookmark:"",
        paragraphs:[
            {
                1:{"1a":"In the beginning was the Word, and the Word was with God, and the Word was God."},
                2:{"2a":"The same was in the beginning with God."},
                3:{"3a":"All things were made through him. Without him, nothing was made that has been made."},
                4:{"4a":"In him was life, and the life was the light of men."},
                5:{"5a":"The light shines in the darkness, and the darkness hasn’t overcome it."},
            },
            {
                6:{"6a":"There came a man sent from God, whose name was John."},
                7:{"7a":"The same came as a witness, that he might testify about the light, that all might believe through him."},
                8:{"8a":"He was not the light, but was sent that he might testify about the light."}, 
                9:{"9a":"The true light that enlightens everyone was coming into the world."},
            },
            {
                10:{"10a":"He was in the world, and the world was made through him, and the world didn’t recognize him."},
                11:{"11a":"He came to his own, and those who were his own didn’t receive him."},
                12:{"12a":"But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:"},
                13:{"13a":"who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God."},
            },
        ],
    };
</script>

<ScriptureView {text}/>