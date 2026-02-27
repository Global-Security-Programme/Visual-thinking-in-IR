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
    { from: "Government of Myanmar", to: "RSO", value: 16 },
    { from: "Government of Myanmar", to: "ULA", value: 133 },
    { from: "Government of Myanmar", to: "MNDAA", value: 64 },  
    { from: "Government of India", to: "NSCN-IM", value: 39 },  
    { from: "NSCN-IM", to: "NSCN-K", value: 149 },  
    { from: "NSCN-IM", to: "NSCN-U", value: 13 },  
    { from: "NSCN-K", to: "NSCN-K-K", value: 43 },  
    { from: "Government of Myanmar", to: "NSCN-K", value: 19 },  
    { from: "Government of Myanmar", to: "KNU", value: 336 },  
    { from: "Government of Myanmar", to: "God's Army", value: 3 },  
    { from: "Government of Myanmar", to: "DKBA 5", value: 31 },  
    { from: "Government of Myanmar", to: "ABSDF", value: 5 },  
    { from: "Government of Myanmar", to: "MNSP", value: 10 },  
    { from: "Government of Myanmar", to: "BMA", value: 1 },                                                                                                 
    { from: "Government of Myanmar", to: "KIO", value: 218 },  
    { from: "Government of Myanmar", to: "KNPP", value: 63 },  
    { from: "Government of Myanmar", to: "MTA", value: 29 },  
    { from: "Government of Myanmar", to: "RCSS", value: 125 },  
    { from: "Government of Myanmar", to: "UWSA", value: 9 },  
    { from: "DKBA", to: "KNU", value: 37 },  
    { from: "RCSS", to: "UWSA", value: 7 },  
    { from: "MDA", to: "MDA - LM", value: 1 },  
    { from: "MTA", to: "USWA", value: 10 },  
    { from: "Government of Myanmar", to: "SSPP", value: 41 },    
    { from: "Government of Myanmar", to: "PSLF", value: 93 },  
    { from: "Government of Myanmar", to: "ARSA", value: 26 },  
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



