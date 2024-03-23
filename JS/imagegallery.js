var fullImgBox= document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var text=document.getElementById("text");

function handleImageClick(pic,val){
    fullImgBox.style.display = "flex";
    fullImg.src = pic; 
    
    if (val == "a") {
        text.innerHTML =" World War II was a global conflict that lasted from 1939 to 1945. It involved the majority of the world's nations, including all of the great powers, organized into two opposing military alliances: the Allies (led by the United States, the United Kingdom, and the Soviet Union) and the Axis (led by Germany, Japan, and Italy). The war was primarily fought in Europe, Africa, and Asia, with significant battles occurring in the Pacific and the Atlantic oceans. The war saw the use of advanced military technology, including tanks, aircraft, and submarines. It also saw atrocities committed against civilians, including the Holocaust, in which millions of Jews and others were systematically murdered by Nazi Germany. The war ended with the unconditional surrender of the Axis powers in 1945, leading to significant changes in the political and social landscape of the world, including the emergence of the United States and the Soviet Union as superpowers."
    }
    else if (val == "b") {
        text.innerHTML = "Artificial intelligence, often abbreviated as AI, refers to the development of intelligent machines that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation. AI is a rapidly evolving field that has been transforming various industries, including healthcare, finance, transportation, and entertainment. It is achieved through the use of algorithms and statistical models that enable machines to learn from data and improve their performance over time. The ultimate goal of AI is to create machines that can operate autonomously and make decisions without human intervention."
    }
    else if (val == "c") {
        text.innerHTML = "The Anuradhapura Kingdom was an ancient kingdom that existed in Sri Lanka from 377 BC to 1017 AD. It was named after its capital city, Anuradhapura, which was one of the most important cities in South Asia during its time. The kingdom was founded by King Pandukabhaya and saw the development of advanced irrigation systems, impressive architectural feats such as the construction of large stupas and palaces, and a flourishing Buddhist culture. The kingdom also had a complex social and political system with a monarch at its head and a hierarchy of officials and priests. The Anuradhapura Kingdom declined in the 10th century AD due to repeated invasions by South Indian powers and internal struggles, leading to the rise of the Polonnaruwa Kingdom. However, Anuradhapura remains an important cultural and religious site in Sri Lanka, with many of its ruins and monuments still preserved and revered."
    }
    else if (val == "d") {
        text.innerHTML = "The Bermuda Triangle, also known as the Devil's Triangle, is a region in the western part of the North Atlantic Ocean where ships and aircraft have mysteriously disappeared. The area is roughly bounded by Miami, Bermuda, and Puerto Rico. Over the years, numerous unexplained incidents have been reported in the Triangle, including disappearances of ships and planes without any distress signals or debris found. Some theories suggest that the disappearances are caused by human error, piracy, natural disasters, or even extraterrestrial activity. However, no conclusive evidence has been found to support any of these theories, and the Bermuda Triangle remains a mysterious phenomenon that continues to captivate the public's imagination."
    }
    else if (val == "e") {
        text.innerHTML = "The blue whale is the largest animal on Earth, growing up to 100 feet (30 meters) in length and weighing as much as 200 tons. They are found in all of the world's oceans and feed mainly on krill, consuming up to 4 tons of these small crustaceans every day. Blue whales are known for their distinctive blue-grey color and the mottled appearance of their skin, which is often covered in patches of white spots or scars. Despite their size, blue whales are graceful swimmers and can reach speeds of up to 30 miles (48 kilometers) per hour. These magnificent creatures were heavily hunted in the 20th century, and their populations were significantly depleted. However, their numbers have since rebounded thanks to conservation efforts, and they remain a symbol of the majesty of the natural world."
    }
    else if (val == "f") {
        text.innerHTML = "The Mariana Trench is the deepest part of the world's oceans and is located in the western Pacific Ocean, east of the Mariana Islands. It has a maximum depth of over 36,000 feet (11,000 meters) and is the site of numerous scientific expeditions to study its unique and extreme environment. The trench is home to a variety of unusual species that have adapted to the extreme pressure, cold, and darkness of the deep ocean. The Challenger Deep, which is the deepest point in the trench, was first explored by humans in 1960 by the bathyscaphe Trieste, piloted by Jacques Piccard and Don Walsh. Despite its inhospitable conditions, the Mariana Trench is a fascinating area of study for scientists and remains a symbol of the mysteries that lie beneath the surface of the ocean."
    }
    else if (val == "g") {
        text.innerHTML = "Mars is the fourth planet from the sun in our solar system and is commonly referred to as the 'Red Planet' due to its rusty, reddish appearance. It is a rocky, terrestrial planet with a thin atmosphere, and its surface is marked by vast canyons, towering volcanoes, and dry riverbeds. Mars has a day length similar to Earth's, and its year is almost twice as long. Mars is of particular interest to scientists due to the possibility of finding evidence of past or present microbial life on the planet. Several missions have been sent to Mars, including the recent Perseverance rover, to search for signs of life and to learn more about the planet's geology and climate. In the future, humans may even attempt to colonize Mars, making it the first planet beyond Earth to be inhabited by humans."
    }
    else if (val == "h") {
        text.innerHTML = "Sigiriya is an ancient rock fortress and palace complex located in the central Matale District of Sri Lanka. It was built by King Kashyapa in the 5th century AD and is one of the country's most popular tourist destinations. The fortress stands at a height of 660 feet (200 meters) and is surrounded by beautiful gardens, moats, and ramparts. The fortress also features a series of frescoes, or ancient paintings, that depict women in various poses and are considered to be some of the best-preserved examples of ancient Sri Lankan art. Sigiriya is a UNESCO World Heritage Site and is recognized for its historical, archaeological, and cultural significance. Visitors can climb to the top of the fortress and take in the stunning views of the surrounding countryside."
    }
    else if (val == "i") {
        text.innerHTML = "DNA, or deoxyribonucleic acid, is a molecule that contains the genetic instructions for the development and function of all living organisms. It is composed of four types of nucleotides: adenine, guanine, cytosine, and thymine, which are arranged in a specific sequence to form the genetic code. The structure of DNA is a double helix, which consists of two complementary strands that are held together by hydrogen bonds between the nucleotides. DNA is found in the nucleus of cells in all living organisms and is responsible for the transmission of genetic information from one generation to the next. Advances in DNA technology have revolutionized fields such as medicine, forensics, and evolutionary biology, enabling scientists to understand the genetic basis of diseases and to identify individuals with a high degree of accuracy."
    }
    else if (val == "j") {
        text.innerHTML = "Apollo 11 was the first spaceflight that landed humans on the Moon. The mission was launched on July 16, 1969, using a Saturn V rocket from the Kennedy Space Center in Florida. The Saturn V rocket was one of the most powerful rockets ever built, standing at 363 feet (110 meters) tall and weighing over 6 million pounds (2.7 million kg). It consisted of three stages, each with its own engines, that worked together to propel the Apollo spacecraft and its crew towards the Moon. The rocket successfully launched the Apollo 11 spacecraft into Earth's orbit and then sent it on its way to the Moon. After landing on the Moon's surface, the crew spent about 21.5 hours conducting scientific experiments and collecting lunar samples before returning to Earth. The Apollo 11 mission remains a historic achievement in human space exploration and a testament to the power and capability of the Saturn V rocket."
    }
   
}

function closeFullImg(){
    fullImgBox.style.display = "none";
    text.innerHTML="";
    
}




document.getElementById("style1").onclick=function(){
    document.getElementById("body").style.backgroundColor="white";
}
document.getElementById("style2").onclick=function(){
    document.getElementById("body").style.backgroundColor="#F2D5AB";
}
document.getElementById("style3").onclick=function(){
    document.getElementById("body").style.backgroundColor="#D6B6F3";
}
document.getElementById("style4").onclick=function(){
    document.getElementById("body").style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";

}


document.getElementById("size1").onclick=function(){
    document.getElementById("text").style.fontSize="100%";
    document.getElementById("text_1").style.fontSize="100%";
    document.getElementById("text_2").style.fontSize="100%";
    document.getElementById("text_3").style.fontSize="100%";
    document.getElementById("text_4").style.fontSize="100%";
    document.getElementById("text_5").style.fontSize="100%";
    document.getElementById("text_6").style.fontSize="100%";
    document.getElementById("text_7").style.fontSize="100%";
    document.getElementById("text_8").style.fontSize="100%";
    document.getElementById("text_9").style.fontSize="100%";
    document.getElementById("text_10").style.fontSize="100%";

}
document.getElementById("size2").onclick=function(){
    document.getElementById("text").style.fontSize="130%";
    document.getElementById("text_1").style.fontSize="130%";
    document.getElementById("text_2").style.fontSize="130%";
    document.getElementById("text_3").style.fontSize="130%";
    document.getElementById("text_4").style.fontSize="130%";
    document.getElementById("text_5").style.fontSize="130%";
    document.getElementById("text_6").style.fontSize="130%";
    document.getElementById("text_7").style.fontSize="130%";
    document.getElementById("text_8").style.fontSize="130%";
    document.getElementById("text_9").style.fontSize="130%";
    document.getElementById("text_10").style.fontSize="130%";

}
document.getElementById("size3").onclick=function(){
    document.getElementById("text").style.fontSize="160%";
    document.getElementById("text_1").style.fontSize="160%";
    document.getElementById("text_2").style.fontSize="160%";
    document.getElementById("text_3").style.fontSize="160%";
    document.getElementById("text_4").style.fontSize="160%";
    document.getElementById("text_5").style.fontSize="160%";
    document.getElementById("text_6").style.fontSize="160%";
    document.getElementById("text_7").style.fontSize="160%";
    document.getElementById("text_8").style.fontSize="160%";
    document.getElementById("text_9").style.fontSize="160%";
    document.getElementById("text_10").style.fontSize="160%";

}


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}





