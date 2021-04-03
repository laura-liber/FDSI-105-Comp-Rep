function displayTable(aPet){
    if(aPet.service==="shower"){
        aPet.price=20;
    }else if(aPet.service==="full"){
        aPet.price=40;
    }else if(aPet.service==="nails"){
        aPet.price=10;
    }else if(aPet.service==="hair"){
        aPet.price=15;
    }
    var icon="";
    //add the type of pet
    if(aPet.type==="cat"){
        icon='<i class="fas fa-cat"></i>';
    }else if(aPet.type==="dog"){
        icon='<i class="fas fa-dog"></i>';
    }else if(aPet.type==="bird"){
        icon='<i class="fas fa-crow"></i>';
    }else if(aPet.type==="lizard"){
        icon='<i class="fas fa-otter"></i>';
}
   
    var row=`
        <tr id='${aPet.id}'>
            <td>${icon}</td>
            <td>${aPet.name}</td>
            <td>${aPet.age}</td>
            <td>${aPet.gender}</td>
            <td>${aPet.breed}</td>
            <td>${aPet.service}</td>
            <td>${aPet.owner}</td>
            <td>${aPet.phone}</td>
            <td>$${aPet.price}</td>
            <td> <button class="btn btn-danger" onclick="deletePet(${aPet.id})"> Delete </button></td>
        </tr>
    `;
    $('#pet-table').append(row);
    //document.getElementById('pet-table').innerHTML+=row;
    profitCalculation();
}