const itemIDs = [
    {ID: "9470", name: "Old Sealed Box"},
    {ID: "9471", name: "Old Sealed Box"},
    {ID: "9472", name: "Old Sealed Box"},
    {ID: "9473", name: "Old Sealed Box"},
    {ID: "9474", name: "Old Sealed Box"},
    {ID: "9475", name: "Old Sealed Box"},
    {ID: "5296", name: "Blue Core of Seridunn"},
    {ID: "5297", name: "Green Core of Seridunn"},
    {ID: "5298", name: "Red Core of Seridunn"},
    {ID: "5114", name: "Enriching Powder"},
    {ID: "6065", name: "Cruel Marquis Bone Piece"},
    {ID: "5115", name: "Unrefined Steel"},
    {ID: "4520", name: "Recall Scroll"},
    {ID: "4521", name: "Waypoint Scroll"},
    {ID: "22200", name: "Plunderer Accessory DIY BOX"},
    {ID: "22201", name: "Warrior Strife DIY Box"},
    {ID: "22202", name: "Paladin Strife DIY Box"},
    {ID: "22203", name: "Rifleman Strife DIY Box"},
    {ID: "22204", name: "Dual Gunner Strife DIY Box"},
    {ID: "22205", name: "Warlock Strife DIY Box"},
    {ID: "22206", name: "Cleric Strife DIY Box"},
    {ID: "4540", name: "Pellurite F"},
    {ID: "4541", name: "Pellurite E"},
    {ID: "4542", name: "Pellurite D"},
    {ID: "4543", name: "Pellurite C"},
    {ID: "4544", name: "Pellurite B"},
    {ID: "4560", name: "Rubicine F"},
    {ID: "4561", name: "Rubicine E"},
    {ID: "4562", name: "Rubicine D"},
    {ID: "4563", name: "Rubicine C"},
    {ID: "4564", name: "Rubicine B"},
    {ID: "8167", name: "Rubicine Extract [E]"},
    {ID: "8168", name: "Rubicine Extract [D]"},
    {ID: "8169", name: "Rubicine Extract [C]"},
    {ID: "8170", name: "Rubicine Extract [B]"},
    {ID: "8171", name: "Rubicine Extract [A]"},
    {ID: "8176", name: "Enriched Rubicine Extract [E]"},
    {ID: "8177", name: "Enriched Rubicine Extract [D]"},
    {ID: "8178", name: "Enriched Rubicine Extract [C]"},
    {ID: "8179", name: "Enriched Rubicine Extract [B]"},
    {ID: "8180", name: "Enriched Rubicine Extract [A]"},
    {ID: "8149", name: "Pellurite Extract [E]"},
    {ID: "8150", name: "Pellurite Extract [D]"},
    {ID: "8151", name: "Pellurite Extract [C]"},
    {ID: "8152", name: "Pellurite Extract [B]"},
    {ID: "8153", name: "Pellurite Extract [A]"},
    {ID: "8158", name: "Enriched Pellurite Extract [E]"},
    {ID: "8159", name: "Enriched Pellurite Extract [D]"},
    {ID: "8160", name: "Enriched Pellurite Extract [C]"},
    {ID: "8161", name: "Enriched Pellurite Extract [B]"},
    {ID: "8162", name: "Enriched Pellurite Extract [A]"},
    {ID: "9744", name: "Critical resistance 6 [Armor]"},
    {ID: "2549", name: "Sword of the Destroyer", class: "Warrior", rank: "weapon"},
    {ID: "2514", name: "Fallen Goddess Archlyte Blade", class: "Paladin", rank: "weapon"},
    {ID: "2689", name: "Grey Hawk Rifle", class: "Rifle Man", rank: "weapon"},
    {ID: "2654", name: "Nube of Wind Seeker x2", class: "Dual Gunner", rank: "weapon"},
    {ID: "2759", name: "Staff of the Burning Void", class: "Warlock", rank: "weapon"},
    {ID: "2724", name: "Wand of the Oracle", class: "Cleric", rank: "weapon"},
    {ID: "2835", name: "Helmet of the Destroyer", class: "Warrior", rank: "Helmet"},
    {ID: "2865", name: "Armor of the Destroyer", class: "Warrior", rank: "Armor"},
    {ID: "2895", name: "Gauntlet of the Destroyer", class: "Warrior", rank: "Gloves"},
    {ID: "2925", name: "Boots of the Destroyer", class: "Warrior", rank: "Boots"},
    {ID: "2955", name: "Helmet of the Fallen Goddess", class: "Paladin", rank: "Helmet"},
    {ID: "2985", name: "Armor of the Fallen Goddess", class: "Paladin", rank: "Armor"},
    {ID: "3015", name: "Gauntlets of the Fallen Goddess", class: "Paladin", rank: "Gloves"},
    {ID: "3045", name: "Boots of the Fallen Goddess", class: "Paladin", rank: "Boots"},
    {ID: "3075", name: "Cap of Gray Hawk", class: "Rifleman", rank: "Helmet"},
    {ID: "3105", name: "Suit of Gray Hawk", class: "Rifleman", rank: "Armor"},
    {ID: "3135", name: "Gloves of Gray Hawk", class: "Rifleman", rank: "Gloves"},
    {ID: "3165", name: "Boots of Gray Hawk", class: "Rifleman", rank: "Boots"},
    {ID: "2835", name: "Tiara of the Wind Seeker", class: "Dual Gunner", rank: "Helmet"},
    {ID: "2865", name: "Suit of the Wind Seeker", class: "Dual Gunner", rank: "Armor"},
    {ID: "2895", name: "Gloves of the Wind Seeker", class: "Dual Gunner", rank: "Gloves"},
    {ID: "2925", name: "Boots of the Wind Seeker", class: "Dual Gunner", rank: "Boots"},
    {ID: "3315", name: "Hat of the Burning Void", class: "Warlock", rank: "Helmet"},
    {ID: "3345", name: "Robe of the Burning Void", class: "Warlock", rank: "Armor"},
    {ID: "3375", name: "Gloves of the Burning Void", class: "Warlock", rank: "Gloves"},
    {ID: "3405", name: "Boots of the Burning Void", class: "Warlock", rank: "Boots"},
    {ID: "3435", name: "Cloche of the Oracle", class: "Cleric", rank: "Helmet"},
    {ID: "3465", name: "Dress of the Oracle", class: "Cleric", rank: "Armor"},
    {ID: "3495", name: "Gloves of the Oracle", class: "Cleric", rank: "Gloves"},
    {ID: "3525", name: "Shoes of the Oracle", class: "Cleric", rank: "Boots"},
    {ID: "8580", name: "Gold Bar 50000"},
    {ID: "3466", name: "Dress oh holy mana"},
    {ID: "2725", name: "Wand of Holy Mana"},
    {ID: "5484", name: "DA6"},
    {ID: "5485", name: "DA6"},
    {ID: "5493", name: "DA6"},
];


let itemName = "Enriching Powder";
let url = 'https://api.aikareborn.com/direct/v1/ak/rank/item/';
let date = 'day/'
let itemSearch = true;
let id = "5114";
let playerId = "";


async function load(){

    await fetchData(5114, itemName);
    loadSelect();
}

async function fetchData(ID){

    id = ID;
    itemName = idToName[ID];
    itemSearch = true;
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyURL + url + date + ID);
    const myJson = await response.json().catch(err => {
        alert("no items found");
    });

    GenerateTables(myJson);
    let dateNow = new Date();
    console.log("fetched :" + dateNow);
    return myJson;

}

async function playerFetch(playerName){

    itemSearch = false;
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const playerUrl = 'https://api.aikareborn.com/direct/v1/ak/rank/playerdrop/';
    const response = await fetch(proxyURL + playerUrl + date + playerName);
    const myJson = await response.json().catch(err => {
        alert("no player or items from selected time found");
    });

    let dateNow = new Date();
    console.log("fetched :" + dateNow);
    console.log(myJson);
    return myJson; 
}

function GenerateTables(data){
    let index = 1;
    const table = document.getElementById("tableList")
    table.innerHTML ="";

    data.forEach(el => {
        const row = table.insertRow();
        const indexNmbr = row.insertCell();
        const character = row.insertCell();
        const item = row.insertCell();
        const count = row.insertCell();
        indexNmbr.innerHTML = index;
       
        character.innerHTML =  "<a href='#' onclick='nameSearch(\"" + el.character  + "\")' >"+ el.character + "<a/>";
        item.innerHTML = itemName;
        count.innerHTML = el.count;
        index++;
      });
}

async function onItemSelect(ID){


    await fetchData(ID);
    
}

async function onDateSelect(selectedDate){
    date = selectedDate;
    if(itemSearch === true){
        fetchData(id, itemName);
    }else{
        nameSearch(playerId);
    }
    
}

async function nameSearch(iName){
    playerId = iName;
    const result = await playerFetch(iName);

    const table = document.getElementById("tableList")
    table.innerHTML ="";
    result.forEach(async data =>{
        const row = table.insertRow();
        const indexNmbr = row.insertCell();
        const character = row.insertCell();
        const item = row.insertCell();
        const count = row.insertCell();
        const tempName = idToName[data.item];
        indexNmbr.innerHTML = "";
        character.innerHTML = "";
        item.innerHTML = "<a href='#' onclick='fetchData(" + data.item + ")' >"+ tempName + "<a/>";
        count.innerHTML = data.count;
    })
}

async function onDungeonSelect(mode){

    const table = document.getElementById("tableList")
    table.innerHTML ="";
    const newData = eval(mode);
    console.log(newData);

    newData.forEach(async el => {

           const queryResult = await fetchData(el.ID);
           const row = table.insertRow();
           const indexNmbr = row.insertCell();
           const character = row.insertCell();
           const item = row.insertCell();
           const count = row.insertCell();
           let counter = 0;
           queryResult.forEach(el =>{
               counter = counter + Number(el.count);
           })
           indexNmbr.innerHTML = el.rank;
           character.innerHTML = el.class;
           item.innerHTML = el.name;
           count.innerHTML = counter.toString();

        })
    
  
}

function loadSelect(){
    const SelectList = document.getElementById("items");
    
    itemIDs.forEach(el => {
        const option = document.createElement("option");
        option.text = el.name;
        option.value = el.ID;
        SelectList.add(option);

    })
}

