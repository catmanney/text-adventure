var matchbox = {
    name: "matchbox",
    description: "A small box with some matches inside",
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
    description: "Some sheet-music to be performed on an intrument.",
    can_pickup: true,
  }
  var computer = {
    name: "computer",
    description: "A simple desktop computer.",
    can_pickup: false,
  }
  var altar = {
    name: "altar",
    description: "A small ornate table.",
    can_pickup: false,
  }
  var door_key = {
    name: "key",
    description: "Shiny key. Where does it lead?",
    can_pickup: true,
  }
  var candle = {
    name: "candle",
    description: "A clean candle with a simple design.",
    can_pickup: true,
  }
  var hall_door= {
    name: "hall-door",
    description: "Was previously hidden behind the statue in the hallway.",
    can_pickup: false,
  }
  var statue = {
    name: "statue",
    description: "A silver-colored statue sits against this wall. Despite the antiquity, it is clear that it has recently been moved.",
    can_pickup: false,
  }
  //
  var hallway_1A = {
    name: "Hallway 1A",
    description: "A simple school hallway.",
    items: [],
    doors: {},
  }
  var hallway_2A= {
    name: "Hallway 2A",
    description: "A simple school hallway.",
    items: [statue],
    doors: {},
  }
  var hallway_3A = {
    name: "Hallway 3A",
    description: "A simple school hallway.",
    items: [],
    doors: {},
  }
  var hallway_4A = {
    name: "Hallway 4A",
    description: "A simple school hallway.",
    items: [],
    doors: {},
  }
  var hallway_5A = {
    name: "Hallway 5A",
    description: "A simple school hallway.",
    items: [],
    doors: {},
  }
  var hallway_6A = {
    name: "Hallway 6A",
    description: "A simple school hallway.",
    items: [],
    doors: {},
  }
  var staircase_1 = {
    name: "Staircase 1",
    description: "A spiral staircase illuminated by a stained glass window. The colors depict Isacc Newton with a book in one hand, and an apple in the other. Floor 1.",
    items: [door_key],
    doors: {},
  }
  var infirmary = {
    name: "Infirmary",
    description: "Infirmary. Despite being a blast from the past, the medical diagrams are up to date and modern.",
    items: [],
    doors: {},
  }
  var computer_lab = {
    name: "Computer Lab",
    description: "This is a simple classroom with a computer added.",
    items: [computer],
    doors: {},
  }
  var classroom = {
    name: "Classroom",
    description: "This classroom has some simple desks and a map. It's clear that people have been having 'fun' here.",
    items: [],
    doors: {},
  }
  var library_1 = {
    name: "Library Floor One",
    description: "A tall, well-stocked library with a balcony up above. This is the first floor.",
    items: [tech_manual],
    doors: {},
  }
  var theater_1 = {
    name: "Theater Floor One",
    description: "Ground floor of a large theater. Ican't see the stage well from back here though...",
    items: [matchbox],
    doors: {},
  }
  var ballroom_1 = {
    name: "Ballroom Floor One",
    description: "A large ballroom converted to a gym. First floor.",
    items: [sheet_music],
    doors: {},
  }
  var music_hall = {
    name: "Music Hall",
    description: "This music hall contains a nice balance of classical and modern intruments.",
    items: [piano],
    doors: {},
  }
  var restroom = {
    name: "Restroom",
    description: "Other than the nasty smell, not much to say about this bathroom. Don't drink the water.",
    items: [hairbrush],
    doors: {},
  }
  var main_entrance = {
    name: "Main Entrance",
    description: "A jazzy looking waiting room with some nice lounge decoration.",
    items: [password_list],
    doors: {},
  }
  var science_lab = {
    name: "Science Lab",
    description: "A little science lab with some tools. Some has been kept up to date, but much has been left to time.",
    items: [],
    doors: {},
  }
  var courtyard = {
    name: "Courtyard",
    description: "A lovely little getaway with a large variety of botanical species. Sun is setting.",
    items: [altar],
    doors: {},
  }
  //
  hallway_1A.doors = {
    north: infirmary,
    east: science_lab,
    south: hallway_6A,
    west: hallway_2A,
    can_go: ["north","east","south","west"],
  }
  hallway_2A.doors = {
    north: computer_lab,
    east: hallway_1A,
    west: hallway_3A,
    can_go: ["north","east","west"],
  }
  hallway_3A.doors = {
    north: classroom,
    east: hallway_2A,
    south: hallway_4A,
    west: library_1,
    can_go: ["north","east","south","west"],
  }
  hallway_4A.doors = {
    north: hallway_3A,
    east: hallway_5A,
    south: ballroom_1,
    west: theater_1,
    can_go: ["north","east","south","west"],
  }
  hallway_5A.doors = {
    north: staircase_1,
    east: hallway_6A,
    south: music_hall,
    west: hallway_4A,
    can_go: ["north","east","south","west"],
  }
  hallway_6A.doors = {
    north: hallway_1A,
    east: main_entrance,
    south: restroom,
    west: hallway_5A,
    can_go: ["north","east","south","west"],
  }
  staircase_1.doors = {
    south: hallway_5A,
    can_go: ["south"],
  }
  infirmary.doors = {
    south: hallway_1A,
    can_go: ["south"],
  }
  computer_lab.doors = {
    south: hallway_2A,
    can_go: ["south"],
  }
  classroom.doors = {
    south: hallway_3A,
    can_go: ["south"],
  }
  library_1.doors = {
    east: hallway_3A,
    can_go: ["east"],
  }
  theater_1.doors = {
    east: hallway_4A,
    can_go: ["east"],
  }
  ballroom_1.doors = {
    north: hallway_4A,
    can_go: ["north"],
  }
  music_hall.doors = {
    north: hallway_5A,
    can_go: ["north"],
  }
  restroom.doors = {
    north: hallway_6A,
    can_go: ["north"],
  }
  main_entrance.doors = {
    west: hallway_6A,
    can_go: ["west"],
  }
  science_lab.doors = {
    west: hallway_1A,
    can_go: ["west"],
  }
  courtyard.doors = {
    can_go: []
  }
  
  function scrollToBottom(){
    document.getElementById('game_b').scrollIntoView();
  }
  let inventory = [/*tech_manual,password_list,hairbrush,sheet_music,door_key,candle,matchbox*/];
  //using comments for the inventory array contents during debugging saves so much time! 
  
  let room = infirmary;//courtyard;//
  var game_html = document.getElementById("game");
  function show_info(){
    game_html.innerHTML += '<p>' +room.name;
    game_html.innerHTML += '<p>' +room.description;
    game_html.innerHTML += "Directions Available: ";
    for (r in room.doors.can_go){
      game_html.innerHTML += room.doors.can_go[r]+" ";
    }
  }
  show_info();
  var paths = ["north","east","south","west"];
  var game_won = false;
  function use_items(){
    user_input = document.getElementById("itest").value;
    lower_case = user_input.toLowerCase();
    our_string = lower_case.split(" ");
    item_one = our_string[0];
    item_two = our_string[1];
    item_three = our_string[2];
    item_four = our_string[3];
    game_html.innerHTML += '<p>'+'---------------';
    game_html.innerHTML += '<p>'+"You entered: "+user_input;
    //
    if(paths.includes(item_one)){
      if(room.doors.can_go.includes(item_one)){
        switch(item_one){
          case "north":
            room = room.doors.north;
            break;
          case "east":
            room = room.doors.east;
            break;
          case "south":
            room = room.doors.south;
            break;
          case "west":
            room = room.doors.west;
            break;
          default:
          game_html.innerHTML += '<p>'+"Direction error. I don't think this will display.";
        }
      }else{
        game_html.innerHTML += '<p>'+"Direction command is valid, this room simply doesn't support it.";
      }
    show_info();
    }else if(item_one=="use"&&item_three=="on"){
      switch(item_two){
        case "tech-manual":
          if(inventory.includes(tech_manual)){
            if(item_four=="computer"){
              if(room==computer_lab){
                if(computer.functioning){
                  game_html.innerHTML += '<p>'+"You've already fixed the computer.";
                }else{
                  computer.functioning = true;
                  game_html.innerHTML += '<p>'+'computer is fixed!';
                  computer.description += ' is functioning.';
                }
  
              }else{
                game_html.innerHTML += '<p>'+'this room has no computer.';
              }
  
            }else{
              game_html.innerHTML += '<p>'+'tech-manual cannot be used in this way.';
            }
          }else{
            game_html.innerHTML += '<p>'+'inventory has no tech-manual.';
          }
          break;
        
        case "password-list":
          if(inventory.includes(password_list)){
            if(item_four=="computer"){
              if(room==computer_lab){
                if(computer.functioning){
                  if(computer.logged_in){
                    game_html.innerHTML += '<p>'+"we've already logged into the computer.";
                  }else{
                    computer.logged_in = true;
                    game_html.innerHTML += '<p>'+'we have logged into the computer! A message displays saying that the piano is open?';
                    computer.description += " logged in!";
                    piano.description += " top is open, revealing piano keys inside.";
                  }
                }else{
                  game_html.innerHTML += '<p>'+'computer is broken.';
                }
  
              }else{
                game_html.innerHTML += '<p>'+'this room has no computer.';
              }
  
            }else{
              game_html.innerHTML += '<p>'+'password-list cannot be used in this way.';
            }
  
          }else{
            game_html.innerHTML += '<p>'+'inventory has no password-list.';
          }
          break;
        case "hairbrush":
          if(inventory.includes(hairbrush)){
            if(item_four=="piano"){
              if(room==music_hall){
                if(computer.logged_in){
                  if(piano.clean){
                    game_html.innerHTML += '<p>'+"you've already cleaned the piano.";
                  }else{
                    piano.clean = true;
                    game_html.innerHTML += '<p>'+ 'piano is clean!';
                    piano.description += ' dental checkup is complete.';
                  }
                }else{
                  game_html.innerHTML += '<p>'+'piano is locked shut.';
                }
              }else{
                game_html.innerHTML += '<p>'+'this room has no piano.';
              }
  
            }else{
              game_html.innerHTML += '<p>'+'hairbrush cannot be used in this way.';
            }
          }else{
            game_html.innerHTML += '<p>'+'inventory has no hairbrush.';
          }
          break;
        case "sheet-music":
          if(inventory.includes(sheet_music)){
            if(item_four=="piano"){
              if(room==music_hall){
                if(piano.clean){
                  statue.asleep = true;
                  for(i=0;i<inventory.length;i++){
                    if(inventory[i].name=="sheet-music"){
                      inventory.splice(i,1);
                    }
                  }
                  music_hall.items.push(candle);
                  hallway_2A.items.push(hall_door);
                  game_html.innerHTML += '<p>'+"piano is playing music! The lullaby is so soothing that it could even put a statue to sleep."+'<p>'+" A candle appears, ready to be taken.";
                  piano.description += ' playing a lullaby.';
                  statue.description += ' has decided to take a nap on the floor. was this statue hiding something?';
                }else{
                  game_html.innerHTML += '<p>'+"This piano looks rather dusty. I'd rather clean it first.";
                }
              }else{
                game_html.innerHTML += '<p>'+'this room has no piano.';
              }
  
            }else{
              game_html.innerHTML += '<p>'+'sheet-music cannot be used in this way.';
            }
  
          }else{
            game_html.innerHTML += '<p>'+'inventory has no sheet-music.';
          }
          break;
        case "key":
          if(inventory.includes(door_key)){
            if(item_four=="hall-door"){
              if(room==hallway_2A){
                if(statue.asleep){
                  for(i=0;i<inventory.length;i++){
                    if(inventory[i].name=="key"){
                      inventory.splice(i,1);
                    }
                  }
                  hallway_2A.doors.south = courtyard;
                  hallway_2A.doors.can_go.push("south");
                  courtyard.doors.north = hallway_2A;
                  courtyard.doors.can_go.push("north");
                  game_html.innerHTML +='<p>'+'door has been unlocjed, and leads to the south!';
                  hallway_2A.description += ' an unlocked door leads to the south.';
                  hall_door.description += ' door is unlocked and leads to the south.';
                }else{
                  game_html.innerHTML += '<p>'+'this room has no hall-door.';//
                }
              }else{
                game_html.innerHTML += '<p>'+'this room has no hall-door.';//
              }
  
            }else{
              game_html.innerHTML += '<p>'+'key cannot be used in this way.';
            }
  
          }else{
            game_html.innerHTML += '<p>'+'inventory has no key.';
          }
          break;
        case "candle":
          if(inventory.includes(candle)){
            if(item_four=="altar"){
              if(room==courtyard){
                candle.placed = true;
                for(i=0;i<inventory.length;i++){
                  if(inventory[i].name=="candle"){
                    inventory.splice(i,1);
                    room.items.push(candle);
                  }
                }
                game_html.innerHTML += 'candle placed on altar.';
                altar.description += " contains candle.";
              }else{
                game_html.innerHTML += '<p>'+'this room has no altar.';
              }
  
            }else{
              game_html.innerHTML += '<p>'+'candle cannot be used in this way.';
            }
  
          }else{
            game_html.innerHTML += '<p>'+'inventory has no candle.';
          }
          break;
        case "matchbox":
          if(inventory.includes(matchbox)){
            if(item_four=="candle"){
              if(room==courtyard){
                if(candle.placed){
                  if(candle.lit){
                    game_html.innerHTML += '<p>'+"You've already lit the candle.";
                  }else{
                    candle.lit = true;
                    game_html.innerHTML += '<p>'+'our candle is lit!';
                    candle.description += ' has a cute little flame.';
                  }
                }else{
                  game_html.innerHTML += "<p>"+'this room has no candle.';//
                }
              }else{
                game_html.innerHTML += '<p>'+'this room has no candle.';//
              }
  
            }else{
              game_html.innerHTML += '<p>'+'matchbox cannot be used in this way.';
            }
  
          }else{
            game_html.innerHTML += '<p>'+'inventory has no matchbox.';
          }
          break;
  
        default:
          game_html.innerHTML += '<p>'+"syntax looks good. something off about that first item though.";
  
      }
    }else if(our_string.includes("use")||our_string.includes("on")){
      game_html.innerHTML += "<p>"+'To use an item, type: use "item-one" on "item-two" (use cat-food on cat, use bottle on river, etc)';
    }else{
      switch(item_one){
        case "examine":
          if(room.items.length==0){
            game_html.innerHTML += '<p>'+'this room has no items.';
          }else{
            game_html.innerHTML += '<p>'+room.name+" contains the following items: ";
            for(r=0;r<room.items.length;r++){
              game_html.innerHTML += '<p>'+room.items[r].name+": "+room.items[r].description;
            }
          }
          break;
        case "inventory":
          if(inventory.length==0){
            game_html.innerHTML += '<p>'+"Inventory is empty. Lets add some items!";
          }else{
            game_html.innerHTML += '<p>'+"Items in Inventory: ";
            for(v=0;v<inventory.length;v++){
              game_html.innerHTML += '<p>'+inventory[v].name+": "+inventory[v].description;
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
              game_html.innerHTML += '<p>'+room.items[i_index].name+" added to inventory.";
              inventory.push(room.items[i_index]);
              room.items.splice(i_index,1);
            }else{
              game_html.innerHTML += '<p>'+"The item "+item_two+" cannot be removed.";
            }
          }else{
            game_html.innerHTML += '<p>'+"Item "+item_two+" not in room.";
          }
          break;
        default:
          game_html.innerHTML += '<p>'+"error error error!";
      }
      
    }
    if(candle.lit){
      if(game_won){
        game_html.innerHTML += '<p>'+"Just a reminder that you've won the game.";
      }else{
        game_won = true;
        game_html.innerHTML += '<p>'+'The light from the candle brings a comforting illumination to this baffling evening.'+'<p>'+"THE END";
      }
    }
    scrollToBottom();
    document.getElementById("itest").value = "";
  }
  window.onbeforeunload = function(event){
    event.returnValue = "Write something clever here...";
  }