    // selecting all monster images

    let monster = document.querySelectorAll(".monster");

    // selecting score field

    let scoreContainer = document.querySelector(".score");

    // selecting timer field

    let timerContainer = document.querySelector(".timer");

    let counter = timerContainer.textContent;

    let monsters = document.querySelector(".monsters")

    

    // converting node list into an array

    let monsterArr = Array.prototype.slice.call(monster);

    let random;

    let hitPosition;

    let score = 0;

    // creating variable to count number of monsters appears

    let count = 0;



    function renderGame() {

        // removing monster-active class from all the monsters

        monsterArr.forEach(curr => {
            curr.classList.remove("monster-active");
        });

        // creating random number to show the monster

        random = Math.floor(Math.random()*monsterArr.length);

        monsterArr[random].classList.add("monster-active");

        const soundMonster = document.querySelector('.sound-monster');
            soundMonster.play();
        
        hitPosition = monsterArr[random].id;

        count++;

        monsters.textContent = count;

    }

    

    // checking scores of game

    function renderScore() {

        // selecting all the monsters

        monsterArr.forEach(curr => {
            curr.addEventListener("click", function() {
                const soundGun = document.querySelector('.sound-gun');
                    soundGun.play();
                if (hitPosition == curr.id) {
                    score++;

                    scoreContainer.textContent = score;
                }
            })
        })

    }

    renderScore();


    // rendering timer

    let interval;

    function renderTimer() {
        if (counter > 0) {
            counter--;

            timerContainer.textContent = counter;
        } else {
            clearInterval(interval);

            monsterArr[random].classList.remove("monster-active");
        }

    }

    // creating function to update

    function update() {
        renderGame();
        renderTimer();
    }

    // adding controls

    document.querySelector(".play").addEventListener("click", function() {     
        if (!interval) {
            interval = setInterval(update, 1000);
            const soundNight = document.querySelector('.sound-night');
            soundNight.play();
        }

    });

    document.querySelector(".reset").addEventListener("click", function() {
        location.reload();
    });