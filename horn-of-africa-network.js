/**
 * ---------------------------------------
 * This graph was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chartdiv", am4charts.ChordDiagram);


chart.data = [
    { from: "Government of Somalia", to: "Al-Shabaab", value: 3004 },
    { from: "Government of Somalia", to: "ARS/UIC", value: 277 },
    { from: "Government of Kenya", to: "Al-Shabaab", value: 113 },  
    { from: "Government of Somalia", to: "USC/SNA", value: 83 },  
    { from: "Ahlu Sunna Waljamaca", to: "Al-Shabaab", value: 57 },  
    { from: "Government of Ethiopia", to: "ONLF", value: 56 },  
    { from: "USC/SNA", to: "USC/SNA - OA", value: 50 },  
    { from: "RRA", to: "RRA - MH", value: 40 },  
  
    { from: "ARPCT", to: "ARS/UIC", value: 36 },  
    { from: "RRA", to: "USC/SNA", value: 34 },  
    { from: "Shabaab", to: "Hizbul Islam", value: 27 },  
    { from: "Government of Somalia", to: "Hizbul Islam", value: 24 },  
    { from: "Forces of Abdurahman Ahmed Ali 'Tur", to: "Republic of Somaliland", value: 21 },  
    { from: "Government of Somalia", to: "SRRC", value: 20 },  
    { from: "Sa'ad subclan of Habar Gidir clan (Hawiye)", to: "Suleiman subclan of Habar Gidir clan (Hawiye)", value: 19 },  
    { from: "Mujahideen in the Golis Mountains", to: "Puntland state of Somalia", value: 18 }, 
    { from: "Forces of General Morgan", to: "Forces of Omar Jess", value: 17 },  
    { from: "SPM", to: "SPM/SNA", value: 15 },  
    { from: "Da'ud subclan of Abgal clan (Hawiye)", to: "Warsangeli subclan of Abgal clan (Hawiye)", value: 13 }, 
     
    { from: "USC/SSA", to: "USC/SSA - OMF", value: 13 },  
    { from: "Puntland state of Somalia", to: "Republic of Somaliland", value: 12 },  
    { from: "Government of Ethiopia", to: "AIAI", value: 12 },  
    { from: "Agon-Yar subclan of Abgal clan (Hawiye)", to: "Warsangeli subclan of Abgal clan (Hawiye)", value: 11 },  
    { from: "Garre subclan of Digil clan (Digil-Mirifle)", to: "Murule subclan of Gugundabe clan (Hawiye)", value: 11 },  
    { from: "Khatumo administration", to: "Republic of Somaliland", value: 10 },  
    { from: "Garre subclan of Digil clan (Digil-Mirifle)", to: "Jiddo subclan of Digil clan (Digil-Mirifle)", value: 10 }, 
    { from: "Suleiman subclan of Habar Gidir clan (Hawiye)", to: "Qubeys subclan (Dir)", value: 10 },  
    { from: "Government of United States of America", to: "al-Qaida", value: 10 },  
    { from: "Government of Somalia", to: "Republic of Somaliland", value: 9 }, 
    { from: "Ahlu Sunna Waljamaca", to: "Hizbul Islam", value: 9 }, 
    
    { from: "JVA", to: "JVA faction", value: 9 }, 
    { from: "Orma", to: "Pokomo", value: 9 }, 
    { from: "Habar Gidir clan (Hawiye)", to: "Xawaadle clan (Hawiye)", value: 8 }, 
    { from: "Mohamed Muse subclan of Abgal clan (Hawiye)", to: "Warsangeli subclan of Abgal clan (Hawiye)", value: 8 }, 
    { from: "Dir clan", to: "Sa'ad subclan of Habar Gidir clan (Hawiye)", value: 7 }, 
    { from: "Dir clan ", to: "Sa'ad subclan of Habar Gidir clan (Hawiye)", value: 7 }, 
    { from: "Al-Shabaab", to: "SVA", value: 7 }, 
    { from: "Forces of General Morgan", to: "JVA", value: 6 }, 
    { from: "Ogaden clan (Darod)", to: "Sheikhal clan (Dir)", value: 6 }, 
    { from: "Garre subclan of Digil clan (Digil-Mirifle)", to: "Marehan subclan of Sede clan (Darod)", value: 5 },   
  
    { from: "Galje'el clan (Hawiye)", to: "Xawaadle clan (Hawiye)", value: 5 }, 
    { from: "Fiqi Muhumud subclan (Dir)", to: "Marehan subclan of Sede clan (Darod)", value: 5 }, 
    { from: "Dir clan ", to: "Marehan subclan of Sede clan (Darod)", value: 5 }, 
    { from: "DSA", to: "USC/SNA", value: 5 }, 
    { from: "Forces of Abdullahi Yusuf", to: "Forces of Jama Ali Jama", value: 5 }, 
    { from: "Al-Shabaab", to: "ONLF", value: 5 }, 
    { from: "Forces of Hussein Ali Ahmed", to: "USC/SSA", value: 4 }, 
    { from: "SNF - MSAB", to: "SNF", value: 4 }, 
    { from: "Abdalleh-Agon-Yar subclan of Abgal clan (Hawiye)", to: "Eli-Agon-Yar subclan of Abgal clan (Hawiye)", value: 4 }, 
    { from: "Rer Ahmad subclan (Hawiye)", to: "Hawarsame Rer Hasan and Habar Ya'qub subclan of Marehan clan (Darod)", value: 4 },  
  
    { from: "Ayr subclan of Habar Gidir clan (Hawiye)", to: "Sa'ad subclan of Habar Gidir clan (Hawiye)", value: 4 }, 
    { from: "Majerteen subclan (Darod)", to: "Marehan subclan of Sede clan (Darod)", value: 4 }, 
    { from: "Duduble subclan of Gorgorte clan (Hawiye)", to: "Suleiman subclan of Habar Gidir clan (Hawiye)", value: 3 }, 
    { from: "Abdulleh-Galmaha subclan of Abgal clan (Hawiye)", to: "Kabaloh subclan of Abgal clan (Hawiye)", value: 3 }, 
    { from: "Gaadsan subclan of Biimaal clan (Dir)", to: "Ma'alin Weyne subclan of Mirifle clan (Digil-Mirifle)", value: 3 }, 
    { from: "AIAI", to: "SSDF", value: 3 }, 
    { from: "Abtisame subclan of Galje'el clan (Hawiye)", to: "Afi subclan of Galje'el clan (Hawiye)", value: 3 }, 
    { from: "SNF", to: "USC/SNA", value: 3 }, 
    { from: "Huber subclan of Mirifle clan (Digil-Mirifle)", to: "Yantar subclan of Mirifle clan (Digil-Mirifle)", value: 3 }, 
    { from: "Abgal clan (Hawiye)", to: "Xawaadle clan (Hawiye)", value: 3 }, 
    { from: "Ali-Gaf subclan of Abgal clan (Hawiye) ", to: "Mahadade subclan of Abgal clan (Hawiye) ", value: 3 }, 
    { from: "Republic of Somaliland", to: "SNM - 'Calan cas' ", value: 2 },  
  
    { from: "Government of Somalia", to: "SPM", value: 2 }, 
    { from: "Dabare subclan of Digil clan (Digil-Mirifle)", to: "Luway subclan of Mirifle clan (Digil-Mirifle)", value: 2 }, 
    { from: "Government of Somalia", to: "SNM", value: 2 }, 
    { from: "Habar Gidir clan (Hawiye)", to: "Marehan subclan of Sede clan (Darod)", value: 2 }, 
    { from: "Abgal clan (Hawiye)", to: "Garre subclan of Digil clan (Digil-Mirifle)", value: 2 }, 
    { from: "SPM", to: "Forces of Omar Jess", value: 2 }, 
    { from: "Government of Somalia", to: "USC/SSA", value: 2 }, 
    { from: "Galje'el clan (Hawiye)", to: "Jejele subclan of Jibedi clan (Hawiye)", value: 2 }, 
    { from: "Abdalle subclan of Habar Awal clan (Isaaq)", to: "Aidagalla subclan of Habar Garhadjis clan (Isaaq)", value: 2 }, 
    { from: "Sa'ad subclan of Habar Gidir clan (Hawiye)", to: "Saleban-Abdalla subclan of Majerteen clan (Darod)", value: 1 },  
  
    { from: "USC/SNA", to: "USC-PM", value: 1 }, 
    { from: "Abdalle-Aroneh subclan of Abgal clan (Hawiye)", to: "Eli-Omar subclan of Abgal clan (Hawiye)", value: 1 }, 
    { from: "Forces of Abdullahi Yusuf", to: "Forces of Yussuf Hajji Nur", value: 1 }, 
    { from: "SSDF", to: "USC/SNA", value: 1 }, 
    { from: "Forces of Abdirizak Bihi", to: "Forces of Ahmed Sheikh Buraleh", value: 1 }, 
    { from: "Bi'idyahan subclan of Majerteen clan (Darod)", to: "Ismail subclan of Makahil clan (Darod)", value: 1 }, 
    { from: "Geri", to: "Makahin", value: 1 }, 
    { from: "Majerteen subclan (Darod)", to: "Ogaden clan (Darod)", value: 1 }, 
    { from: "Rer Liban subclan (Issaq)", to: "Rer Samatar subclan of Habr Awal (Issaq)", value: 1 },
    
,  

];

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 10;

// make nodes draggable
var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}'s engagemnents: {total}";

var nodeLink = chart.links.template;


// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0.15;
linkTemplate.fillOpacity = 0.3;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;


// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;


// create animations
chart.events.on("ready", function() {
    for (var i = 0; i < chart.links.length; i++) {
        var link = chart.links.getIndex(i);
        

    }
})
