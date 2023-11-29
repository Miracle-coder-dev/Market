function funCall() { 
    var myArray = [
        {name: 'Maxmud', id:1, narxi: '200000'},
        {name: 'Asad', id:2, narxi: '300000'},
        {name: 'Abror', id:3, narxi: '200000'},
        {name: 'Mansur', id:4, narxi: '500000'},
    ]
    var html ="<table border='1|1'>"

    setTimeout(() => {
        html+='<thead>'
        html+='<tr>';
        html+='<tr>';
        html+='<td>'+ 'No'+'</td>';
        html+='<td>'+ 'Xaridor'+'</td>';
        html+='<td>'+ 'Narxi'+'</td>';
        html+='</tr>'; 


        
        for( var i =0; i<myArray.length; i++){
            html+='<tr>';
            html+='<td>'+ myArray[i].id+'</td>';
            html+='<td>'+ myArray[i].name+'</td>';
            html+='<td>'+ myArray[  i].narxi+'</td>';
            html+='</tr>'; 
            
        }

        document.getElementById("table").innerHTML = html
    }, 500);
}
funCall()