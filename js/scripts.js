function chamaCaixaA(){
    alert("🤘 Yeah! Rock'n Roll!");
}

function changeToQuatro(){
    changeToDiscQuatro()
    changeToDescriptionQuatro()
    changeToTituloQuatro()
    changeToGigQuatro()
    changeToTrailerQuatro()
}

function changeToDiscQuatro(){
    document.getElementById("loading-image").src="./img/heroQuatro_disc.png";
}

function changeToDescriptionQuatro(){
    document.getElementById("descript-jogo").innerHTML = "You'll be in rock-and-roll paradise with Guitar Hero World Tour. The game has advanced modes, options and tools for your rocking pleasure. Enjoy a vast amount of master recordings from some of the biggest acts of all time, including Van Halen, Linkin Park, the Eagles, Sublime and more. The game will also offer significantly more localized downloadable music than ever before. Guitar Hero World Tour gives you creative license to fully customize everything from characters' appearances and instruments to the band's logo and album covers. The innovative Music Studio lets you compose, record, edit and share music. The hard-hitting Battle of the Bands mode lets up to eight players get in on the mayhem. Jam like a pro and show off your talents like a true superstar.";
}

function changeToTituloQuatro(){
    document.getElementById("nome-jogo").innerHTML = "Guitar Hero World Tour";
}

function changeToGigQuatro(){
    document.getElementById("desliza-texto").innerHTML = "Gig location and songs<br><br> @House of Blues (Los Angeles)<br> No Sleep Till Brooklyn - Beastie Boys<br> About a Girl (Unplugged) - Nirvana<br> What I've Done - Linkin Park<br><br>@Phi Psi Kappa (USA)<br> Up Around the Bend - Creedence Clearwater Revival<br>Some Might Say - Oasis<br> Eye of the Tiger - Survivor<br><br>@Pang Tang Bay (Hong Kong)<br>The One I Love - R.E.M.<br>The Joker - Steve Miller Band<br>Band on the Run - Wings<br><br>@Bone Church (Poland)<br>Beautiful Disaster - 311<br>Feel the Pain - Dinosaur Jr.<br>Today - The Smashing Pumpkins<br>You're Gonna Say Yeah! - HushPuppies";
}

function changeToTrailerQuatro(){
    document.getElementById("chama-trailer").location.href = "https://www.youtube.com/watch?v=Li8aFgSejdU";
}

function changeToTres(){
    changeToDiscTres()
    changeToDescriptionTres()
    changeToTituloTres()
    changeToGigTres()
    changeToTrailerTres()
}

function changeToDiscTres(){
    document.getElementById("loading-image").src="./img/heroTres_disc.png";
}

function changeToDescriptionTres(){
    document.getElementById("descript-jogo").innerHTML = "Guitar Hero III: Legends of Rock drops you into the spotlight of the largest and most legendary rock concert ever. The star-studded soundtrack includes master tracks by such legendary artists as Guns N' Roses, The Rolling Stones, Beastie Boys, Muse and Pearl Jam, with added songs as made legendary by Kiss, Alice Cooper and Heart. Now drop that air guitar, tune your exclusive new Les Paul Guitar Controller and shred the night away with Guitar Hero III: Legends of Rock.";
}

function changeToTituloTres(){
    document.getElementById("nome-jogo").innerHTML = "Guitar Hero III: Legends of Rock";
}

function changeToGigTres(){
    document.getElementById("desliza-texto").innerHTML = "Gig location and songs<br><br>@Backyard Bash<br>Slow Ride - Foghat<br>Talk Dirty to Me - Poison<br>Hit Me With Your Best Shot - Pat Benatar<br>Story of My Life - Social Distortion<br>Rock and Roll All Nite - Kiss<br><br>@Mitch's Moose Lounge<br>Mississippi Queen - Mountain<br>School's Out - Alice Cooper<br>Sunshine of Your Love - Cream<br>Guitar Battle vs. Tom Morello - Tom Morello<br>Bulls on Parade - Rage Against the Machine<br><br>@Video Shoot<br>When You Were Young - The Killers<br>Miss Murder - AFI<br>The Seeker - The Who<br>Lay Down - Priestess<br>Paint It Black - The Rolling Stones<br><br>";
}

function changeToTrailerTres(){
    document.getElementById("chama-trailer").location.href = "https://www.youtube.com/watch?v=aCtwnGyEGOU";
}

const imagemGH3 = document.getElementById ('heroTres');
imagemGH3.addEventListener('click', changeToTres);

const imagemGH4 = document.getElementById ('heroQuatro');
imagemGH4.addEventListener('click', changeToQuatro);