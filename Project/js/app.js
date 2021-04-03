const salon={
    name:'The Pet Salon',
    address:{
        city:'Jacksonville',
        street:'Main Street',
        number:'2020'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[]
}

var {name,address:{city,street,number},hours:{open,close}}=salon;

function displayInfo(){
    document.getElementById('footer-info').innerHTML=`
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> It opens from ${open} to ${close}</p>
    `;
}
var c=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone,type){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
        this.type=type;
        this.id=c++;
    }
}

//create register function


//get the value from inputs and store them in vars
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');
var txtType=document.getElementById('type');


function register(){
    if(txtName.value !="" && txtAge.value !="" && txtGender.value !=""){
        //create a generic thePet
        var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtType.value);
        console.log(thePet);
        //push thePet into the array
        salon.pets.push(thePet);
        displayTable(thePet);
        console.log(salon.pets);
        clear();
        $('#alert-box').removeClass('unactive');
        setTimeout(function(){
            $('#alert-box').addClass('unactive');
        },3000);
    }else{
        alert("Hey, you did not enter all the information!");
    }
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtType.value="";
}
function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits: $${sum}`;
}

function deletePet(petId){
    //select the row with the pet
    var tr=$('#'+petId);
    var indexDelete;
    //search the pet
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    //delete the pet from the array
    salon.pets.splice(indexDelete,1);
    //delete the pet from the html
    tr.remove();
}

function searchPet(){
    var ss = $('#searchPet').val();
    var searchString=ss.toLowerCase();
    salon.pets.forEach((aPet)=>{
        if(aPet.name.toLowerCase().includes(searchString)){
            $('#'+aPet.id).removeClass('unactive');
        }else{
            $('#'+aPet.id).addClass('unactive');
        }
    });

    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(searchString===selected.name.toLowerCase()||
        searchString===selected.service.toLowerCase()){
            $('#'+selected.id).addClass('selected');
        }
    }
}

function init(){
    $('#alert-box').addClass('unactive');
    var scooby=new Pet("Scooby",50,"Male","Dane","full","Shaggy","555-555-5555","dog");
    var scrappy=new Pet("Scrappy",40,"Male","Dane","shower","Shaggy","555-555-5555","dog");
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    //create pets
    displayTable(scooby);
    displayTable(scrappy);
    profitCalculation();
    
    //hook events
    $('#register-btn').on('click',register);
    $('#search-btn').on('click',searchPet);
    $('#searchPet').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            searchPet();
        }
    });
    $('#searchPet').on('keyup',searchPet);
}

window.onload=init;