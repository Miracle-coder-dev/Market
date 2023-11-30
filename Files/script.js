function funCall() { 
    let myArray = [
        {name: 'Maxmud', id:1, buyum:'chelak', soni:5, narxi: '200000'},
        {name: 'Asad', id:2,buyum:'Ketmon', soni:2 , narxi: '300000'},
        {name: 'Abror', id:3,buyum:'chelak', soni:5, narxi: '200000'},
        {name: 'Mansur', id:4,buyum:'chelak', soni:5, narxi: '500000'},
    ]
    var html ="<table border='1|1'>"

    setTimeout(() => {
        html+='<thead>'
        html+='<tr>';
        html+='<tr>';
        html+='<td class="table_header">'+ 'No'+'</td>';
        html+='<td class="table_header">'+ 'Xaridor'+'</td>';
        html+='<td class="table_header">'+ 'Maxsulot'+'</td>';
        html+='<td class="table_header" >'+ 'Narxi'+'</td>';
        html+='<td class="table_header">'+ 'Soni'+'</td>';
        
        html+='</tr>'; 


        
        for( var i =0; i<myArray.length; i++){
            html+='<tr>';
            html+='<td>'+ myArray[i].id+'</td>';
            html+='<td>'+ myArray[i].name+'</td>';
            html+='<td>'+ myArray[i].buyum+'</td>';
            html+='<td>'+ myArray[i].soni+ ' ta' + '</td>';
            html+='<td>'+ myArray[ i].narxi+'</td>';
            html+='</tr>'; 
            
        }

        document.getElementById("table").innerHTML = html
    }, 500);
}
funCall()

function addOnClick() { 
    var name = document.getElementById('xaridor').value;
    var buyum = document.getElementById('maxsulotNomi').value;
    var soni = document.getElementById('maxsulotSoni').value;
    var narxi = document.getElementById('maxsulotNarx').value;
    
    if(name && buyum && soni && narxi){
        let id= myArray.length +1; 
        myArray.push({name:name, buyum:buyum, soni:soni, narxi:narxi, id:id})
        funCall();
    }
}