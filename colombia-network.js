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
    { from: "Government of Colombia", to: "ELN", value: 667 },
    { from: "Government of Colombia", to: "FARC - Mordisco", value: 14 },
    { from: "FARC - Mordisco", to: "ELN", value: 10 },  
    { from: "Government of Colombia", to: "FARC dissidents", value: 84 },
    { from: "Government of Colombia", to: "EPL - Megateo", value: 42 },  
    { from: "Government of Colombia", to: "FARC", value: 2488 },  
    { from: "Government of Colombia", to: "EPL", value: 10 },  
    { from: "AUC", to: "FARC", value: 108 },  
    { from: "AUC", to: "ELN", value: 22 },  
    { from: "Cali Cartel", to: "Medellín Cartel", value: 4 },  
    { from: "Medellín Cartel", to: "PEPES", value: 4 },  
    { from: "Bloque Central Bolívar", to: "ELN, FARC", value: 1 },  
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
