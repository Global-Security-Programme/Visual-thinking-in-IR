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
    { from: "Government of Iran", to: "KDPI", value: 24 },
    { from: "Government of Iran", to: "PJAK", value: 15 },
    { from: "Government of Turkey", to: "PKK", value: 1613 },  
    { from: "Government of Iran", to: "IS", value: 6 },  
    { from: "Government of Iraq", to: "SCIRI", value: 1 },  
    { from: "Government of Iraq", to: "Ansar al-Islam", value: 108 },  
    { from: "Government of Iraq", to: "IS", value: 4880 },  
    { from: "Government of Iraq", to: "RJF", value: 31 },  
    { from: "Government of Australia, Government of United Kingdom, Government of United States o~", to: "Government of Iraq", value: 52 },  
    { from: "1920 Revolution Brigades", to: "IS", value: 3 },  
    { from: "Ansar al-Islam", to: "PUK", value: 10 },  
    { from: "IS", to: "RJF", value: 6 },  
    { from: "Government of Iraq", to: "al-Mahdi Army", value: 269 },  
    { from: "IS", to: "JRTN", value: 6 },                                                                                                 
    { from: "Government of Turkey", to: "IS", value: 129 },  
    { from: "Jaysh al-Mukhtar", to: "MEK", value: 4 },  
    { from: "Government of Israel", to: "Hezbollah", value: 12 },  
    { from: "Government of Syria", to: "Syrian insurgents", value: 41488 },  
    { from: "IS", to: "Southern Front", value: 14 },  
    { from: "Government of Jordan", to: "IS", value: 4 },  
    { from: "Hezbollah", to: "Jabhat Fateh al-Sham", value: 12 },  
    { from: "IS", to: "Jabhat Fateh al-Sham", value: 60 },  
    { from: "Hezbollah", to: "IS", value: 7 },  
    { from: "Government of Lebanon", to: "IS", value: 34 },  
    { from: "Hezbollah", to: "HTS", value: 4 },  
    { from: "IS", to: "HTS, Saraya Ahl al-Sham", value: 1 },  
    { from: "Government of United States of America", to: "al-Qaida", value: 14 },  
    { from: "Opponents of al-Assad", to: "Supporters of al-Assad", value: 1 },  
    { from: "Ghuraba al-Sham, Jabhat Fateh al-Sham", to: "PYD", value: 6 },  
    { from: "IS, Jabhat Fateh al-Sham", to: "PYD", value: 56 },  
    { from: "al-Tawhid Brigade", to: "PYD", value: 7 },  
    { from: "Ahfad al Rasoul Brigade, Ahrar al-Sham, IS, Islamic Kurdish Front, Jabhat Fateh al-S~", to: "PYD", value: 9 },  
    { from: "Ahrar al-Sham, al-Tawhid Brigade, IS, Jabhat Fateh al-Sham", to: "PYD", value: 36 },  
    { from: "IS", to: "PYD", value: 383 },  
    { from: "Ahfad al Rasoul Brigade", to: "IS", value: 4 },  
    { from: "Government of Syria", to: "PYD", value: 39 },  
    { from: "IS", to: "Islamic Front", value: 74 },  
    { from: "IS", to: "SRF", value: 16 },  
    { from: "IS", to: "Mujahideen Army", value: 7 },  
    { from: "Jabhat Fateh al-Sham", to: "SRF", value: 10 },  
    { from: "IS", to: "Islamic Front, Mujahideen Army, SRF", value: 255 },  
    { from: "Harkat Hazm", to: "Jabhat Fateh al-Sham", value: 13 },  
    { from: "IS", to: "Islamic Front, Jabhat al-Akrad, Jabhat Fateh al-Sham, Mujahideen Army", value: 2 },  
    { from: "Jabhat Fateh al-Sham, Liwa al-Aqsa", to: "SRF", value: 10 },  
    { from: "IS", to: "Islamic Front, Jabhat Fateh al-Sham", value: 136 },  
    { from: "IS", to: "Islamic Front, Jabhat Fateh al-Sham, Mujahideen Army", value: 31 },  
    { from: "Government of Syria", to: "IS", value: 3959 },  
    { from: "IS", to: "SDF", value: 2424 },  
    { from: "IS", to: "Jaysh al-Sanadid, Khabour Guards, MFS, PYD", value: 108 },  
    { from: "IS", to: "Jaysh al-Sanadid, MFS, PYD", value: 90 },  
    { from: "Aknaf Bait al-Maqdis, Jaysh al-Islam, PFLP-GC", to: "IS", value: 41 },  
    { from: "Jaysh al Fatah Idlib", to: "IS", value: 5 },  
    { from: "Eastern Qalamoun Operations Room", to: "IS", value: 13 },  
    { from: "IS", to: "Jaysh al-Islam", value: 9 },  
    { from: "Government of Syria", to: "SDF", value: 32 },  
    { from: "Euphrates Vulcano", to: "IS", value: 227 },  
    { from: "Fatah Halab", to: "IS", value: 118 },  
    { from: "Fatah Halab", to: "SDF", value: 47 },  
    { from: "Fatah Halab, Jabhat Fateh al-Sham", to: "IS", value: 11 },  
    { from: "Ahrar al-Sham, Jabhat Fateh al-Sham", to: "IS", value: 46 },  
    { from: "Ahrar al-Sham, Jabhat Fateh al-Sham, Southern Front", to: "IS", value: 71 },  
    { from: "IS", to: "NSA", value: 8 },  
    { from: "Ahrar al-Sham", to: "Liwa al-Aqsa", value: 17 },  
    { from: "Mareâ€™ Operations Room", to: "IS", value: 50 },  
     { from: "Fatah Halab, Jabhat Fateh al-Sham", to: "SDF", value: 36 },  
    { from: "Ahrar al-Sham, Furqan Brigades, Jabhat Fateh al-Sham, Jaysh al-Islam, Yarmouk Army", to: "Jaysh al-Jihad (Saraya al- Jihad)", value: 4 },  
    { from: "Hawar Kilis Operations Room", to: "IS", value: 138 },  
    { from: "Hawar Kilis Operations Room", to: "SDF", value: 131 },  
    { from: "Jaysh al-Islam, Jaysh Asoud al-Sharqiya, Martyr Lieutenant Ahmed Abdou Brigades, Rah~", to: "Tahrir al- Sham Army", value: 18 }, 
    { from: "IS", to: "Jaysh al-Ashaâ€™er", value: 3 },  
    { from: "IS", to: "Jaysh Asoud al-Sharqiya, Martyr Lieutenant Ahmed Abdou Brigades", value: 3 },  
    { from: "Ahrar al-Sham, FSA, Jabhat Fateh al-Sham, Jaysh al-Islam", to: "IS", value: 5 },  
    { from: "Ahrar al-Sham, Jabhat Fateh al-Sham", to: "SDF", value: 11 },  
    { from: "Eastern Ghouta Unified Military Command", to: "IS", value: 17 },  
    { from: "Ahrar al-Sham", to: "HTS", value: 37 },  
    { from: "Jaysh al-Islam", to: "HTS, Rahman Corps", value: 19 },  
    { from: "IS", to: "HTS", value: 94 },  
    { from: "Ahrar al-Sham", to: "Hamza Division, Liwa al-Sultan Murad", value: 3 },  
    { from: "Nour al-Din al-Zenki", to: "HTS", value: 8 },  
    { from: "Liwa al-Aqsa", to: "HTS", value: 5 },  
    { from: "IS", to: "HTS, Southern Front", value: 47 },  
    { from: "Ahrar al-Sham, FSA, HTS, Jaysh al-Islam", to: "IS", value: 7 },  
    { from: "Ahrar al-Sham, HTS, Southern Front", to: "IS", value: 48 },  
    { from: "Suqour al-Sham Brigades, Syrian Liberation Front", to: "HTS", value: 45 },  
    { from: "Government of Iran", to: "Government of Israel", value: 14 },  
    { from: "IS", to: "Jaysh al-Sanadid, PYD", value: 25 },  
    { from: "Aknaf Bait al-Maqdis, HTS, Jaysh al-Islam", to: "IS", value: 14 },  
    { from: "National Front for Liberation", to: "HTS", value: 34 },  
    { from: "National Front for Liberation, SNA", to: "Tajamu Shuhada al-Sharqiya", value: 1 },  
    { from: "IS", to: "al-Qa'qa Brigade, Army of Ahl al-Sunni wal Jamaa , Army of al-Ikhlas, Army of Maoata al-Islami, Authenticity and Develop~", value: 99 },  
    { from: "IS", to: "Islamic Front, Jabhat al-Akrad, Jabhat Fateh al-Sham, Mujahideen Army, SRF", value: 2 },  
    { from: "16th Division, Islamic Front, Jabhat Fateh al-Sham", to: "IS", value: 1 },  
    { from: "Authenticity and Development Front, Islamic Front", to: "IS", value: 7 },  
    { from: "Jabhat Fateh al-Sham, Rahman Corps", to: "Jaysh al-Islam", value: 22 },  
    { from: "IS", to: "Islamic Front, Jabhat al-Akrad, Mujahideen Army, SRF", value: 21 },  
    { from: "IS", to: "Nour al-Din al-Zenki, Sham Legion", value: 1 },  
    { from: "Aknaf Bait al-Maqdis, HTS, Jaysh al-Islam, Sons of Yarmouk Movement, Southern Front", to: "IS", value: 13 },  
    { from: "Ahrar al-Sham, Jabhat Fateh al-Sham, Jaysh al-Islam, Jaysh Asoud al-Sharqiya, Martyr~", to: "IS", value: 18 },  
    { from: "SNA", to: "SDF", value: 184 },  
    { from: "23rd Division, Ahrar al-Sham, Jaysh al Nasr, Jaysh al-Nukhba, Nour al-Din al-Zenki, ~", to: "SDF", value: 99 },  
    { from: "National Front for Liberation, SNA", to: "SDF", value: 96 },  
    { from: "23rd Division, Jaysh al Nasr, Jaysh al-Nukhba, Sham Legion, SNA, Syrian Liberation F~", to: "SDF", value: 92 },  
    { from: "National Front for Liberation, SNA, Syrian Liberation Front", to: "SDF", value: 8 },  
    { from: "Euphrates Islamic Liberation Front, Islamic Front, Jabhat Fateh al-Sham, Liwa Thuwar~ IS", value: 33 },  
    { from: "Ahrar Ghurayan", to: "PYD", value: 6 },  
    { from: "Authenticity and Development Front, Islamic Front, Jabhat Fateh al-Sham", to: "IS", value: 84 },  
    { from: "IS", to: "Jabhat Fateh al-Sham, Liwa al-Qadisiya, Omar al-Mukhtar Battalion", value: 1 },  
    { from: "IS", to: "Northern Storm Brigade", value: 10 },  
    { from: "Dawn of Freedom Brigades", to: "IS", value: 1 },  
    { from: "Dawn of Freedom Brigades, Euphrates Islamic Liberation Front, Islamic Front, Jabhat ~", to: "IS", value: 37 },  
    { from: "IS", to: "Islamic Front, Jabhat al-Akrad, Liwa Thuwar ar-Raqqa", value: 18 },  
    { from: "Dawn of Freedom Brigades, Jabhat al-Akrad, Northern Storm Brigade", to: "IS", value: 9 },  
    { from: "IS", to: "Islamic Front, Northern Storm Brigade", value: 10 },  
    {  from: "Baz al-Islamiya, Dawn of Freedom Brigades, Islamic Front, Jabhat al-Akrad, Jabhat Fa~", to: "IS", value: 49 },  
    { from: "Dawn of Freedom Brigades, Harkat Hazm, Islamic Front, Jabhat al-Akrad, Jabhat Fateh ~", to: "IS", value: 14 },  
    { from: "IS", to: "Islamic Front, Jabhat Fateh al-Sham, Liwa al-Jihad fi Sabeel Allah, Liwa Thuwar ar-Raqqa", value: 34 },  
    { from: "Authenticity and Development Front", to: "IS", value: 16 },  
    { from: "IS, Jabhat Fateh al-Sham", to: "Jabhat al-Akrad", value: 4 },  
    { from: "Ahfad al Rasoul Brigade, Ahrar al-Sham, al-Farouq Brigades, Ghuraba al-Sham, IS, Jab~", to: "PYD", value: 14 },  
    { from: "Jabhat Fateh al-Sham, Salahadin Brigade", to: "PYD", value: 4 },  
    { from: "Ahrar al-Sham, al-Tawhid Brigade, IS, Islamic Kurdish Front, Jabhat Fateh al-Sham", to: "PYD", value: 22 },  
    { from: "Government of Turkey", to: "MKP", value: 4 },  
    { from: "Government of Russia (Soviet Union)", to: "Forces of the Caucasus Emirate", value: 1 },  

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


