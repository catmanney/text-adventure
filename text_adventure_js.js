function scrollToBottom(){
    document.getElementById( 'game_b' ).scrollIntoView();
}

var game_won=false;

var backpack = {
    name: "backpack",
    description: "A simple backpack for carrying items.",
    can_pickup: true,
    taken: false,
}

var faucet = {
    name: "faucet",
    description: "A faucet.",
    can_pickup: false,
    fixed: false,
}

var wrench = {
    name: "wrench",
    description: "A wrench for fixing stuff.",
    can_pickup: true,
}

var matchbox = {
    name: "matchbox",
    description: "A small box with some matches inside.",
    can_pickup: true,
}

var paper = {
    name: "paper",
    description: " A sheet of paper with quote: 'All the world's a stage, and all the men and women merely players.'",
    can_pickup: true,
    folded: false,
}

var bad_art = {
    name: "bad-art",
    description: "A bad piece of artwork. They say even the fire is too good a place for work like this...",
    can_pickup: true,
}

var password_list = {
    name: "password-list",
    description: "A list of passwords. Not clear why this was so easy to find.",
    can_pickup: true,
}

var piano = {
    name: "piano",
    description: "A grand piano.",
    can_pickup: false,
    clean: false,
    open: false,
}

var fireplace = {
    name: "fireplace",
    description: "A fireplace.",
    can_pickup: false,
    contains_kindle: false,
    contains_fire: false,
}

var teapot = {
    name: "teapot",
    description: "An antique teapot.",
    can_pickup: true,
    contains_leaves: false,
    contains_water: false,
    contains_tea: false,
    water_boiled: false,
    placed: false,
}

var tea_leaves = {
    name: "tea-leaves",
    description: "Leaves from the plant Camellia sinesis, also know as 'tea.'",
    can_pickup: true,
}

var hairbrush = {
    name: "hairbrush",
    description: "Large hairbrush with thick bristles.",
    can_pickup: true,
}

var tech_manual = {
    name: "tech-manual",
    description: "Book for solving tech problems.",
    can_pickup: true,
}

var sheet_music = {
    name: "sheet-music",
    description: "Some sheet-music to be performed on an instrument.",
    can_pickup: true,
}

var origami_book = {
    name: "origami-book",
    description: "This book for folding paper may help your ideas take flight.",
    can_pickup: true,
}

var computer = {
    name: "computer",
    description: "A simple desktop computer.",
    can_pickup: false,
    logged_in: false,//
    functioning: false,
}

var drama_kid = {
    name: "kid",
    description: "A child, wearing a theatrical mask, recites Shakespeare on the stage below. I know the quote they are trying to say...",
    can_pickup: false,
    helped: false,
    theft: false,
}

var altar = {
    name: "altar",
    description: "A small ornate table.",
    can_pickup: false,
}

var apple = {
    name: "apple",
    description: "Crisp, uneaten apple.",
    can_pickup: true,
    placed: false,
}

var door_key = {
    name: "key",
    description: "Shiny key. Where does it lead?",
    can_pickup: true
}

var candle = {
    name: "candle",
    description: "A clean candle with a simple design.",
    can_pickup: true,
    placed: false,
    lit: false,
}

var hall_door = {
    name: "hall-door",
    description: "Was previosly hidden behind the statue in the hallway.",
    can_pickup: false,
    unlocked: false,
}

var statue = {
    name: "statue",
    description: "A silver-colored statue sits against this wall. Despite the antiquity, it is clear that it has recently been moved.",
    can_pickup: false,
    asleep: false,
}

let inventory = [];

var hallway_1A = {
    name: "Hallway 1A",
    description: "A simple school hallway.",
    items: [],
    doors: {}
}

var hallway_2A = {
    name: "Hallway 2A",
    description: "A simple school hallway.",
    items: [statue],
    doors:{}
}

var hallway_3A = {
    name: "Hallway 3A",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_4A = {
    name: "Hallway 4A",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_5A = {
    name: "Hallway 5A",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_6A = {
    name: "Hallway 6A",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_1B = {
    name: "Hallway 1B",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_2B = {
    name: "Hallway 2B",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var hallway_3B = {
    name: "Hallway 3B",
    description: "A simple school hallway.",
    items: [],
    doors:{}
}

var staircase_1 = {
    name: "Staircase 1",
    description: "An a spiral staircase illuminated by a stained glass window. The colors depict Isaac Newton with a book in one hand, and an apple in the other. Floor 1.",
    items: [door_key],
    doors:{}
}

var staircase_2 = {
    name: "Staircase 2",
    description: "An spiral staircase illuminated by a stained glass window. I could swear that picture was different a second ago... Floor 2.",
    items: [],
    doors:{}
}

var staircase_0 = {
    name: "Staircase 0",
    description: "A simple wooden staircase. Basement Level.",
    items: [],
    doors:{}
}

var infirmary = {
    name: "Infirmary",
    description: "Infirmary. Despite being a blast from the past, the medical diagrams are up to date and modern.",
    items: [backpack],
    doors: {}
}

var computer_lab = {
    name: "Computer Lab",
    description: "This is a simple classroom with a computer added.",
    items: [computer],
    doors:{}
}

var classroom = {
    name: "Classroom",
    description: "This classroom has some simple desks and a map. It's clear that people have been having 'fun' here.",
    items: [fireplace],
    doors:{}
}

var library_1 = {
    name: "Library Floor One",
    description: "A tall, well-stocked Library with a balcony up above. This is the first floor.",
    items: [tech_manual],
    doors:{}
}

var library_2 = {
    name: "Library Floor Two",
    description: "A tall, well-stocked Library. This is the balcony.",
    items: [origami_book],
    doors:{}
}

var theater_1 = {
    name: "Theater Floor One",
    description: "Ground floor of a large Theater. I can't see the stage well from back here though...",
    items: [paper],
    doors:{}
}

var theater_2 = {
    name: "Theater Floor Two",
    description: "A balcony seat with a clear view of the stage.",
    items: [drama_kid],
    doors:{}
}

var ballroom_1 = {
    name: "Ballroom Floor One",
    description: "A large ballroom converted to a gym. Pun intended. First floor",
    items: [sheet_music],
    doors:{}
}

var ballroom_2 = {
    name: "Ballroom Floor Two",
    description: "A large ballroom converted to a gym. Pun intended. This is the balcony.",
    items: [matchbox],
    doors:{}
}

var music_hall = {
    name: "Music Hall",
    description: "This music hall contains a nice balance of classical and modern instruments.",
    items: [piano],
    doors:{}
}

var restroom = {
    name: "Restroom",
    description: "Other than nasty smell, not much to say about this bathroom. Don't drink the water.",
    items: [hairbrush],
    doors:{}
}

var main_entrance = {
    name: "Main Entrance",
    description: "A jazzy looking waiting room with some nice lounge decoration.",
    items: [password_list],
    doors:{}
}

var science_lab = {
    name: "Science Lab",
    description: "A little science lab with some tools. Some has been kept up to date, but much has been left to time.",
    items: [faucet],
    doors:{}
}

var tea_room = {
    name: "Tea Room",
    description: "This tea room must be well-loved, since the modern 'tea bar' has been carefully curated to match the antique tone of the previous owners.",
    items: [tea_leaves,teapot],
    doors:{}
}

var art_room = {
    name: "Art Room",
    description: "A spacious room, walls gilded with skilled brushwork, contrasted with some thought-provoking graffiti.",
    items: [bad_art],
    doors:{}
}

var storage_closet = {
    name: "Storage Closet",
    description: "Little storage closet stocked with janitorial supplies. Why is it so cold here?",
    items: [wrench],
    doors:{}
}

var courtyard = {
    name: "Courtyard",
    description: "A lovely little getaway with a large variety of botanical species. Sun is setting.",
    items: [altar],
    doors: {}
}

hallway_1A.doors = {
    north: infirmary,
    east: science_lab,
    south: hallway_6A,
    west: hallway_2A,
    can_go: ["north", "east", "south", "west"]
}

hallway_2A.doors = {
    north: computer_lab,
    east: hallway_1A,
    west: hallway_3A,
    can_go: ["north", "east", "west"]
}

hallway_3A.doors = {
    north: classroom,
    east: hallway_2A,
    south: hallway_4A,
    west: library_1,
    can_go: ["north", "east", "south", "west"]
}

hallway_4A.doors = {
    north: hallway_3A,
    east: hallway_5A,
    south: ballroom_1,
    west: theater_1,
    can_go: ["north", "east" ,"south", "west"]
}

hallway_5A.doors = {
    north: staircase_1,
    east: hallway_6A,
    south: music_hall,
    west: hallway_4A,
    can_go: ["north", "east", "south", "west"]
}

hallway_6A.doors = {
    north: hallway_1A,
    east: main_entrance,
    south: restroom,
    west: hallway_5A,
    can_go: ["north", "east", "south", "west"]
}

hallway_1B.doors = {
    north: tea_room,
    south: hallway_2B,
    west: library_2,
    can_go: ["north", "south", "west"]
}

hallway_2B.doors = {
    north: hallway_1B,
    east: hallway_3B,
    south: ballroom_2,
    west: theater_2,
    can_go: ["north", "east", "south", "west"]
}

hallway_3B.doors = {
    north: staircase_2,
    south: art_room,
    west: hallway_2B,
    can_go: ["north", "south", "west"]
}

staircase_1.doors = {
    south: hallway_5A,
    up: staircase_2,
    down: staircase_0,
    can_go: ["south", "up", "down"]
}

staircase_2.doors = {
    south: hallway_3B,
    down: staircase_1,
    can_go: ["south", "down"]
}

staircase_0.doors = {
    east: storage_closet,
    up: staircase_1,
    can_go: ["east", "up"]
}

infirmary.doors = {
    south: hallway_1A,
    can_go: ["south"]
}

computer_lab.doors = {
    south: hallway_2A,
    can_go: ["south"]
}

classroom.doors = {
    south: hallway_3A,
    can_go: ["south"]
}

library_1.doors = {
    east: hallway_3A,
    can_go: ["east"]
}

theater_1.doors = {
    east: hallway_4A,
    can_go: ["east"]
}

ballroom_1.doors = {
    north: hallway_4A,
    can_go: ["north"]
}

music_hall.doors = {
    north: hallway_5A,
    can_go: ["north"]
}

restroom.doors = {
    north: hallway_6A,
    can_go: ["north"]
}

main_entrance.doors = {
    west: hallway_6A,
    can_go: ["west"]
}

science_lab.doors = {
    west: hallway_1A,
    can_go: ["west"]
}

tea_room.doors = {
    south: hallway_1B,
    can_go: ["south"]
}

library_2.doors = {
    east: hallway_1B,
    can_go: ["east"]
}

theater_2.doors = {
    east: hallway_2B,
    can_go: ["east"]
}

ballroom_2.doors = {
    north: hallway_2B,
    can_go: ["north"]
}

art_room.doors = {
    north: hallway_3B,
    can_go: ["north"]
}

storage_closet.doors = {
    west: staircase_0,
    can_go: ["west"]
}

courtyard.doors = {
    can_go: [],
}

let room = infirmary;
console.log(room.name);
document.getElementById("game").innerHTML += '<p>' + room.name;
console.log(room.description);
document.getElementById("game").innerHTML += '<p>' + room.description

console.log("Directions Available: ")
document.getElementById("game").innerHTML += "Directions Available: "
for (r in room.doors.can_go){
    console.log(room.doors.can_go[r]+" ");
    document.getElementById("game").innerHTML += room.doors.can_go[r]+" ";
}

var paths = ["north","east","south","west","up","down"];

function use_items(){
    user_input = document.getElementById("itest").value
    lower_case = user_input.toLowerCase();
    our_string = lower_case.split(' ');
    item_one = our_string[0];
    item_two = our_string[1];
    item_three = our_string[2];
    item_four = our_string[3];
    console.log("You entered: "+user_input);
    document.getElementById("game").innerHTML += '<p>' + "You entered: "+user_input;

    if(paths.includes(item_one)){
        if(room.doors.can_go.includes(item_one)){
            if(inventory.includes(backpack)){
                switch(item_one){
                case "north":
                    room = room.doors.north
                    break;
                case "south":
                    room = room.doors.south
                    break;
               case "west":
                    room = room.doors.west
                    break;
               case "east":
                    room = room.doors.east
                    break;
                case "up":
                    room = room.doors.up
                    break;
                case "down":
                    room = room.doors.down
                    break;
                default:
                    console.log("direction error. don't think this message will display")
                    document.getElementById("game").innerHTML += '<p>' +"direction error. don't think this message will display"
            }}else{
                console.log("There might be something in the Infirmary that I need...")
                document.getElementById("game").innerHTML += "There might be something in the Infirmary that I need..."
            }
        }else{
            console.log("Direction command is valid, this room simply doesn't support it.")
            document.getElementById("game").innerHTML += '<p>' +"Direction command is valid, this room simply doesn't support it."
        }
        console.log(room.name);
        document.getElementById("game").innerHTML += '<p>' + room.name
        console.log(room.description);
        document.getElementById("game").innerHTML += '<p>' + room.description

        console.log("Directions Available: ")
        document.getElementById("game").innerHTML += "Directions Available: "
        for (r in room.doors.can_go){
            console.log(room.doors.can_go[r]+" ");
            document.getElementById("game").innerHTML += room.doors.can_go[r]+" ";
        }
    }else if(item_one=="use" && item_three=="on"){
        switch(item_two){
            case "backpack":
                if(inventory.includes(backpack)){
                    console.log("We actually don't use the backpack in this game. It simply stores our items.")
                    document.getElementById("game").innerHTML += "We actually don't use the backpack in this game. It simply stores our items."
                }else{
                    console.log("backpack not in inventory.")
                    document.getElementById("game").innerHTML += "backpack not in inventory."
                }
            break;
            ////   MAKING SOME TEA        
            case "wrench":
                if(inventory.includes(wrench)){
                if (item_four=="faucet"){
                    if(room==science_lab){
                        if(faucet.fixed){
                            console.log("you've already fixed the faucet.")
                            document.getElementById("game").innerHTML += "you've already fixed the faucet."
                        }else{
                            console.log("faucet fixed!")//
                            document.getElementById("game").innerHTML += '<p>' +"faucet fixed!"
                            faucet.fixed = true;
                            faucet.description = "A faucet. Has been fixed with help of wrench"
                        }
                    }else{
                        console.log("There is no faucet in this room.")//
                        document.getElementById("game").innerHTML += '<p>' +"There is no faucet in this room."
                    }
                }else{
                    console.log("Wrench cannot be used with that item.")//
                    document.getElementById("game").innerHTML += '<p>' +"Wrench cannot be used with that item."
                }
            }else{
                console.log("Our backpack does not contain a wrench.")
                document.getElementById('game').innerHTML += '<p>' + "Our backpack does not contain a wrench."
            }
                break;
            case "tea-leaves":
                if(inventory.includes(tea_leaves)){
                    if (item_four=="teapot"){
                        if(inventory.includes(teapot)){
                        if(teapot.water_boiled){

                            if(teapot.contains_tea){
                                console.log("You've already brewed the tea.")
                                document.getElementById("game").innerHTML += "You've already brewed the tea."
                            }else{
                                teapot.contains_tea = true;
                                console.log("We've got some tea! (That was quick...). The warmth of the pot makes even the coldest of places seem inviting.")//
                                document.getElementById("game").innerHTML += '<p>' +"We've got some tea! (That was quick...). The warmth of the pot makes even the coldest of places seem inviting."
                                teapot.description += " contains brewed tea."
                            
                                storage_closet.doors.up = courtyard;
                                storage_closet.doors.can_go.push("up")
                                courtyard.doors.down = storage_closet;
                                courtyard.doors.can_go.push("down")
                                storage_closet.description += " A little ladder has dropped down from the ceiling. What lies upstairs?"

                                console.log("tea-leaves added to teapot.")
                                document.getElementById("game").innerHTML += '<p>' +"tea-leaves added to teapot."
                                teapot.contains_leaves = true;
                                teapot.description += " Contains tea-leaves."

                                for(i=0;i<inventory.length;i++){
                                    if(inventory[i].name=="tea-leaves"){
                                        inventory.splice(i,1);
                                    }
                                }
                            }

                        }else{
                            console.log("I'd rather have some boiled water first.")
                            document.getElementById("game").innerHTML += "I'd rather have some boiled water first."
                        }

                        }else{
                            console.log("No teapot in inventory.")
                            document.getElementById("game").innerHTML += '<p>' +"No teapot in inventory."}
                    }else{
                        console.log("tea-leaves can't be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"tea-leaves can't be used that way."
                    }
                }else{
                    console.log("We do not have tea-leaves.")
                    document.getElementById("game").innerHTML += '<p>' +"We do not have tea-leaves."
                }
                break;
            case "teapot":
                if(inventory.includes(teapot)){
                    if (item_four=="faucet"){
                        if(room==science_lab){
                            if(faucet.fixed==true){
                                if(teapot.contains_water){
                                    console.log("You've already filled the teapot with water.")
                                    document.getElementById("game").innerHTML += "You've already filled the teapot with water."
                                }else{
                                    console.log("teapot is filled with water!")//
                                    document.getElementById("game").innerHTML += '<p>' +"teapot is filled with water!"
                                    teapot.contains_water = true;
                                    teapot.description += " contains water"
                                }
                            }else{
                                console.log("faucet is broken.")//
                                document.getElementById("game").innerHTML += '<p>' +"faucet is broken."
                            }
                        }else{
                            console.log("This room does not have a faucet.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room does not have a faucet."
                        }
                    }else if(item_four=="fireplace"){
                        if(room==classroom){
                            if(teapot.contains_water){
                                if(fireplace.contains_fire){
                                    if(teapot.water_boiled){
                                        console.log("you've already boiled the water")
                                        document.getElementById("game").innerHTML += "you've already boiled the water."
                                    }else{
                                        teapot.water_boiled = true;
                                        console.log("We have boiled water!")
                                        document.getElementById("game").innerHTML += "We have boiled water!"
                                        teapot.description += " Contains boiled water."
                                    }
                                }else{
                                    console.log("Our fireplace needs some fire.")
                                    document.getElementById("game").innerHTML += '<p>' +"Our fireplace needs some fire."
                                }

                            }else{
                                console.log("It would be much better if I had some water to boil...")//
                                document.getElementById("game").innerHTML += '<p>' +"It would be much better if I had some water to boil..."
                            }
                        }else{
                            console.log("This room has no fireplace.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room has no fireplace."
                        }
                    }else if(item_four=="altar"){
                        if(room==courtyard){
                            if(teapot.contains_tea==true){
                                teapot.placed = true;
                                console.log("teapot containing tea placed on altar. Hope I did a good job.")
                                document.getElementById("game").innerHTML += "teapot containing tea placed on altar. Hope I did a good job."
                                altar.description += " Contains teapot."

                                for(i=0;i<inventory.length;i++){
                                    if(inventory[i].name=="teapot"){
                                        inventory.splice(i,1);
                                    }
                                }

                            }else{
                                console.log("I would rather not place a teapot with nothing to offer.")
                                document.getElementById("game").innerHTML += "I would rather not a teapot with nothing to offer."
                            }
                        }else{
                            console.log("No altar in this room.")
                            document.getElementById("game").innerHTML += "No altar in this room."
                        }
                    }else{
                        console.log("teapot cannot be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"teapot cannot be used that way."
                    }
                }else{
                    console.log("We do not have a teapot.")
                    document.getElementById("game").innerHTML += '<p>' +"We do not have a teapot."
                }
                break;
            case "bad-art":
                if(inventory.includes(bad_art)){
                    if(item_four=="fireplace"){
                        if(room==classroom){
                            console.log("Our fireplace now has kindle!")//
                            document.getElementById("game").innerHTML += '<p>' +"Our fireplace now has kindle!"
                            fireplace.contains_kindle = true;
                            fireplace.description += " contains kindle."

                            for(i=0;i<inventory.length;i++){
                                if(inventory[i].name=="bad-art"){
                                    inventory.splice(i,1);
                                }
                            }

                        }else{
                            console.log("This room has no fireplace.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room has no fireplace."
                        }
                    }else{
                        console.log("bad-art cannot be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"bad-art cannot be used that way."
                    }
                }else{
                    console.log("Our inventory does not contain bad-art.")
                    document.getElementById("game").innerHTML += '<p>' +"Our inventory does not contain bad-art."
                }
                break;
            case "matchbox":
                if(inventory.includes(matchbox)){
                    if (item_four=="fireplace"){
                        if(room==classroom){
                            if(fireplace.contains_kindle){
                                if(fireplace.contains_fire){
                                    console.log("You've already lit the fire.")
                                    document.getElementById("game").innerHTML += "You've already lit the fire."
                                }else{
                                    console.log("A fire has started! In the fireplace I mean.")//
                                    document.getElementById("game").innerHTML += '<p>' +"A fire has started! In the fireplace I mean."
                                    fireplace.contains_fire = true;
                                    fireplace.description += " Contains fire."
                            }
                            }else{
                                console.log("Our fireplace needs some kindle.")//
                                document.getElementById("game").innerHTML += '<p>' +"Our fireplace needs some kindle."
                            }
                        }else{
                            console.log("This room contains no fireplace.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room contains no fireplace."
                        }
                    }else if (item_four=="bad-art"){
                        if(inventory.includes(bad_art)){
                            console.log("this seems a bit unsafe. is there anywhere else we can light a fire?")//
                            document.getElementById("game").innerHTML += '<p>' +"this seems a bit unsafe. is there anywhere else we can light a fire?"
                        }else{
                            console.log("the contents of my bag do not include bad-art")
                            document.getElementById("game").innerHTML += '<p>' +"the contents of my bag do not include bad-art"
                        }
                    }else if (item_four=="candle"){
                        if(room==courtyard){
                            if(candle.placed==true){   
                                if(candle.lit){
                                    console.log("You've already lit the candle")
                                    document.getElementById("game").innerHTML += "You've already lit the candle."
                                }else{
                                    candle.lit = true;
                                    console.log("Our candle is lit! Anything else to do?")
                                    document.getElementById("game").innerHTML += "Our candle is lit! Anything else to do?"
                                    candle.description += " Has a cute little flame."
                            }
                            }else{
                                console.log("Hmm... No candle in this room")
                                document.getElementById("game").innerHTML += "Hmm... No candle in this room"
                            }
                        }else{
                            console.log("This room has no candles (to light).")
                            document.getElementById("game").innerHTML += "This room has no candles (to light)."
                        }
                    }else{
                        console.log("Matchbox cannot be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"Matchbox cannot be used that way."
                    }
                }else{
                    console.log("We don't have a matchbox.")
                    document.getElementById("game").innerHTML += '<p>' +"We don't have a matchbox."
                }
                break;
            /////// WORKING WITH TECH
            case "tech-manual":
                if(inventory.includes(tech_manual)){
                    if (item_four=="computer"){
                        if(room==computer_lab){
                            if(computer.functioning){
                                console.log("You've already fixed the computer.")
                                document.getElementById("game").innerHTML += "You've already fixed the computer."
                            }else{
                                console.log("computer fixed!")//
                                document.getElementById("game").innerHTML += '<p>' +"computer fixed!"
                                computer.functioning = true;
                                computer.description += " is running."
                            }
                        }else{
                            console.log("This room has no computer.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room has no computer."
                        }
                    }else{
                        console.log("tech-manual cannot be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"tech-manual cannot be used that way."
                    }
                }else{
                    console.log("tech-manual not in backpack.")
                    document.getElementById("game").innerHTML += '<p>' +"tech-manual not in backpack."
                }
                break;
            case "password-list":
                if(inventory.includes(password_list)){
                    if(item_four=="computer"){
                        if(room==computer_lab){
                            if(computer.functioning){
                                if(computer.logged_in){
                                    console.log("We've already entered the passwords.")
                                    document.getElementById("game").innerHTML += "We've already entered the passwords."
                                }else{
                                    console.log("We have logged in to computer! The computer seems to be saying that the piano is open?")//
                                    document.getElementById("game").innerHTML += '<p>' +"We have logged in to computer! The computer seems to be saying that the piano is open?"
                                    computer.description += " logged in!"
                                    computer.logged_in = true;
                                    piano.open = true;
                                    piano.description += " Top is open."
                                }
                            }else{
                                console.log("Computer is broken.")//
                                document.getElementById("game").innerHTML += '<p>' +"Computer is broken."
                            }
                        }else{
                            console.log("No computer in this room.")//
                            document.getElementById("game").innerHTML += '<p>' +"No computer in this room."
                        }
                    }else{
                        console.log("password-list cannot be used in that way.")//    
                        document.getElementById("game").innerHTML += '<p>' +"password-list cannot be used in that way."
                    }
                }else{
                    console.log("We do not have a password-list.")
                    document.getElementById("game").innerHTML += '<p>' +"We do not have a password list."
                }
                break;
            case "hairbrush":
                if(inventory.includes(hairbrush)){
                    if(item_four=="piano"){
                        if(room==music_hall){
                            if(piano.open){
                                if(piano.clean){
                                    console.log("You've already cleaned the piano.")
                                    document.getElementById("game").innerHTML += "You've already cleaned the piano."
                                }else{
                                    console.log("piano is clean!")//
                                    document.getElementById("game").innerHTML += '<p>' +"piano is clean!"
                                    piano.clean = true
                                    piano.description += " Dental checkup complete."
                                }
                            }else{
                                console.log("piano is locked shut.")//
                                document.getElementById("game").innerHTML += '<p>' +"piano is locked shut."
                        }
                    }else{
                        console.log("This room has no piano.")//
                        document.getElementById("game").innerHTML += '<p>' +"This room has no piano."
                    }
                }else{
                    console.log("hairbrush cannot be used in this way.")//
                    document.getElementById("game").innerHTML += '<p>' +"hairbrush cannot be used in this way."
                }
            }else{
                console.log("We have no hairbrush.")
                document.getElementById("game").innerHTML += '<p>' +"We have no hairbrush."
            }
            break;
            case "sheet-music":
                if(inventory.includes(sheet_music)){
                    if(item_four=="piano"){
                        if(room==music_hall){
                            if(piano.clean){
                                console.log("piano is playing music! The lullaby is so soothing that it could even put a statue to sleep. You can take a candle.")//
                                document.getElementById("game").innerHTML += '<p>' +"piano is playing music! The lullaby is so soothing that it could even put a statue to sleep. You can take a candle."
                                piano.description += " Playing a lullaby."
                                statue.asleep = true;
                                statue.description += " Has decided to take a nap on the floor. Was something hiding behind?"
                                hallway_2A.items.push(hall_door);
                                music_hall.items.push(candle)

                                for(i=0;i<inventory.length;i++){
                                    if(inventory[i].name=="sheet-music"){
                                        inventory.splice(i,1);
                                    }
                                }

                            }else{
                                console.log("This piano looks dusty. I'd rather clean it first.")//
                                document.getElementById("game").innerHTML += '<p>' +"This piano looks dusty. I'd rather clean it first."
                            }
                        }else{
                            console.log("There is no piano in this room.")//
                            document.getElementById("game").innerHTML += '<p>' +"There is no piano in this room."
                        }
                    }else{
                        console.log("sheet-music cannot be used that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"sheet-music cannot be used that way."
                    }
                }else{
                    console.log("Our inventory does not contain sheet-music.")
                    document.getElementById("game").innerHTML += '<p>' +"Our inventory does not contain sheet-music."
                }
                break;
            /// HELPING A FRIEND
            case "origami-book":
                if(inventory.includes(origami_book)){
                    if(item_four=="paper"){
                        if(inventory.includes(paper)){
                            if(paper.folded){
                                console.log("You've already folded the paper.")
                                document.getElementById("game").innerHTML += "You've already folded the paper."
                            }else{
                                console.log("We've got a paper airplane now!")//
                                document.getElementById("game").innerHTML += '<p>' +"We've got a paper airplane now!"
                                paper.folded = true;
                                paper.description += " folded into a paper airplane."
                            }
                        }else{
                            console.log("We don't have any paper.");
                            document.getElementById("game").innerHTML += '<p>' +"We don't have any paper."
                        }
                    }else{
                        console.log("origami-book cannot be used in that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"origami-book cannot be used in that way."
                    }
                }else{
                    console.log("Inventory does not contain origami-book.")
                    document.getElementById("game").innerHTML += '<p>' +"Inventory does not contain origami-book."
                }
            break;
            case "paper":
                if(inventory.includes(paper)){
                    if(item_four=="kid"){
                        if(room==theater_2){
                            if(paper.folded){
                                console.log("Kid: 'Thanks mate! Here, have an apple! Oh, bit of advice. That glass window in the second floor of the stairwell has a mind of its own.'")//
                                document.getElementById("game").innerHTML += '<p>' +"Kid: 'Thanks mate! Here, have an apple! Oh, bit of advice. That glass window in the second floor of the stairwell has a mind of its own."
                                drama_kid.helped = true;
                                drama_kid.description += " Is now on their way to a career in acting, or just having some fun."
                                room.items.push(apple);

                                for(i=0;i<inventory.length;i++){
                                    if(inventory[i].name=="paper"){
                                        inventory.splice(i,1);
                                    }
                                }

                                staircase_2.doors.east = courtyard;
                                staircase_2.doors.can_go.push("east")
                                courtyard.doors.west = staircase_2;
                                courtyard.doors.can_go.push("west")
                                staircase_2.description += " The window is open, revealing an eastward entrance to the courtyard."
                            }else{
                                console.log("I don't want to simply crumple this paper and throw it...")//
                                document.getElementById("game").innerHTML += '<p>' +"I don't want to simply crumple this paper and throw it..."
                            }
                        }else{
                            console.log("This room has no kid.")//
                            document.getElementById("game").innerHTML += '<p>' +"This room has no kid."
                        }
                    }else{
                        console.log("paper cannot be used in that way.")//
                        document.getElementById("game").innerHTML += '<p>' +"paper cannot be used in that way."
                    }
                }else{
                    console.log("We have no paper.")
                    document.getElementById("game").innerHTML += '<p>' +"We have no paper."
                }
            break;
            case "key":
                if(inventory.includes(door_key)){
                    if(item_four=="hall-door"){
                        if(room==hallway_2A){
                            if(statue.asleep==true){
                                console.log("Door has been unlocked!")
                                document.getElementById("game").innerHTML += "Door has been unlocked!"
                                
                                hallway_2A.doors.south = courtyard;
                                hallway_2A.doors.can_go.push("south")
                                courtyard.doors.north = hallway_2A;
                                courtyard.doors.can_go.push("north")
                                hallway_2A.description += " an unlocked door leads to the south!"
                                hall_door.description += " Door is unlocked and leads to south."

                                for(i=0;i<inventory.length;i++){
                                    if(inventory[i].name=="key"){
                                        inventory.splice(i,1);
                                    }
                                }

                            }else{
                                console.log("Hmm... No hall-door in this room.")
                                document.getElementById("game").innerHTML += "Hmm... No hall-door in this room."
                            }
                        }else{
                            console("This room has no hall-door.")
                            document.getElementById("game").innerHTML += "This room has no hall-door."
                        }
                    }else{
                        console.log("key cannot be used in that way.")
                        document.getElementById("game").innerHTML += "key cannot be used in that way."
                    }
                }else{
                    console.log("We don't have a key in inventory.")
                    document.getElementById("game").innerHTML += "We don't have a key in inventory."
                }
            break;
            case "apple":
                if(inventory.includes(apple)){
                    if(item_four=="altar"){
                        if(room==courtyard){
                            apple.placed=true;
                            console.log("apple placed on altar. Hopefully our deity likes snacks.")
                            document.getElementById("game").innerHTML += "apple placed on altar. Hopefully our deity likes snacks."
                            altar.description += " Contains apple."

                            for(i=0;i<inventory.length;i++){
                                if(inventory[i].name=="apple"){
                                    inventory.splice(i,1);
                                }
                            }

                        }else{
                            console.log("No altar in this room.")
                            document.getElementById("No altar in this room.")
                        }
                    }else{
                        console.log("This room has no altar.")
                        document.getElementById("game").innerHTML += "This room has no altar."
                    }
                }else{
                    console.log("We don't have an apple.")
                    document.getElementById("game").innerHTML += "We don't have an apple."
                }
            break;
            case "candle":
                if(inventory.includes(candle)){
                    if(item_four=="altar"){
                        if(room==courtyard){
                            candle.placed=true;
                            console.log("candle placed on altar.")
                            document.getElementById("game").innerHTML += "candle placed on altar."
                            altar.description += " Contains candle."

                            for(i=0;i<inventory.length;i++){
                                if(inventory[i].name=="candle"){
                                    inventory.splice(i,1);
                                    room.items.push(candle)
                                }
                            }

                        }else{
                            console.log("No altar in this room.")
                            document.getElementById("No altar in this room.")
                        }
                    }else{
                        console.log("This room has no altar.")
                        document.getElementById("game").innerHTML += "This room has no altar."
                    }
                }
                break;
            default:
                console.log("syntax looks good. something off about that first item though.")
                document.getElementById("game").innerHTML += '<p>' + "syntax looks good. something off that first item though."
            }
        
    }else if(our_string.includes("use") || our_string.includes("on")){
        console.log("looks like your 'use object' syntax is a little off.")
        document.getElementById("game").innerHTML += '<p>'+"looks like your 'use object' syntax is a little off."
    }else{
    switch (item_one){
        case "inventory":
            if(inventory.length!=0){
            console.log("Items in Inventory: ");
            document.getElementById("game").innerHTML += '<p>' +"Items in Inventory: "
            for (v=0;v<inventory.length;v++){
                console.log(inventory[v].name+ ": "+inventory[v].description)
                document.getElementById("game").innerHTML += '<p>' + inventory[v].name+": "+inventory[v].description
            }
            }else{
                console.log("Inventory is empty. Lets add some items!")
                document.getElementById("game").innerHTML += "Inventory is empty. Lets add some items!";
            }
            break;
        case "examine":
            if(room.items.length==0){
                console.log("this room has no items.")
                document.getElementById("game").innerHTML += '<p>' +"this room has no items."
            }else{
                console.log(room.name +" contains the following items: ");
                document.getElementById("game").innerHTML += '<p>' +room.name+" contains the following items: "
                for (r=0;r<room.items.length;r++){
                    console.log(room.items[r].name+ ": "+room.items[r].description)
                    document.getElementById("game").innerHTML += '<p>' +room.items[r].name+": "+room.items[r].description
                }
            }
            break;
        case "take":
            var i_index;
            var is_here = false;
            for(i=0;i<room.items.length;i++){
                if(room.items[i].name==item_two){
                    i_index = i;
                    is_here = true;
                }
            }

            if(is_here){
                if(room.items[i_index].can_pickup==true){
                    console.log(room.items[i_index].name+" added to inventory.")
                    document.getElementById("game").innerHTML += '<p>' + room.items[i_index].name+" added to inventory.";
                    inventory.push(room.items[i_index]);
                    room.items.splice(i_index,1);
                }else{
                    if(item_two=="kid"){
                        if(drama_kid.theft){
                            location.reload();
                        }else{
                            console.log("Kidnapping is prohibited. Should you continue with this course of action, I shall have choice but to terminate you.")
                            document.getElementById("game").innerHTML += "Kidnapping is prohibited. Should you continue with this course of action, I shall have no choice but to terminate you."
                            drama_kid.theft = true;
                        }
                    }else{
                        console.log("The item "+item_two+" cannot be removed.")
                        document.getElementById("game").innerHTML += '<p>' +"The item "+item_two+" cannot be removed.";   
                    }
                }

                is_here = false;
            }else{
                console.log("Item "+item_two+" not in room.")
                document.getElementById("game").innerHTML += '<p>' +"Item "+item_two+" not in room."
            }
            break;
        default:
            console.log("default error. what went wrong here?");
            document.getElementById("game").innerHTML += '<p>' +"default error. what went wrong here?"
    }}
    if(apple.placed && teapot.placed && candle.lit){
        if(game_won=="yes"){
            console.log("Just a reminder that you've won the game.")
            document.getElementById("game").innerHTML += '<p>'+"Just a reminder that you've won the game."
        }else{
            console.log("win sequence (long text)")
            document.getElementById("game").innerHTML +='<p>'+"Something about the way these objects are placed has provoked a memory."+

            '<p>'+"I used to go to this school. That was me in the theater struggling to recite the lines. But since I was wearing a theatrical mask, I never got to see the face."+

            '<p>'+"The reason those tea leaves were left there is because I tried to brew the tea awhile ago, but got distracted and left the supplies out."+

            '<p>'+"And the busted computer? I was working on it for a homework assignment, but got bored and fell asleep."+

            '<p>'+"I'm simply going to eat these snacks."+

            '<p>'+"I wonder how they will taste after these long years..."+

            '<p>'+"THE END"
            game_won = "yes";
        }
    
    }
    scrollToBottom();
    document.getElementById("itest").value = ""
}