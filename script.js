window.onload = () => {
    let quot_div = document.getElementById("text")
    let author_div = document.getElementById("auth")
    let tweet_btn= document.getElementById("tweet")
    let quot_btn = document.getElementById("quote-btn")
    let btns = document.querySelectorAll(".btn")

    let parentElement = document.getElementById("text");
    if (parentElement === null) {
      console.error("Parent element not found");
      return; // Exit the function or handle the error
    }


    const get_content = ()=>{
    fetch("https://api.quotable.io/random")
        .then(Response => Response.json())
        .then(response => {
            quot_div.innerText = (response.content)
            author_div.innerText =(response.author)
    })}


    const to_tweet = ()=>{
        window.open("https://twitter.com/intent/tweet?text=" + quot_div.innerText)
    }

    tweet_btn.onclick=()=>{
        to_tweet()

    }

    const random_color =()=>{
        const letter = "0123456789ABCDEF";
        let color = "#"
        for (let i = 0;i<6 ;i++){
                color+=letter[Math.floor(Math.random()*16)]
            }
            return color;

        }


        quot_btn.addEventListener("click",()=>{
            get_content()
            let rancolor = random_color();
            btns.forEach((buttn)=>{
                buttn.style.backgroundColor = rancolor;

            })

            document.body.style.backgroundColor =rancolor;
            quot_div.style.color =rancolor;
            quot_div.style.fontWeight="bold"
            author_div.style.color = rancolor;
            author_div.style.fontWeight = "bold"



    })}


