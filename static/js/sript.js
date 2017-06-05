
$(document).ready(function () {


var mapa = [{ext:"380", div: '1.1'},
            {ext:"610", div: '1.2'},
            {ext:"611", div: '1.3'},
            {ext:"612", div: '1.4'},
            {ext:"613", div: '1.5'},
            {ext:"614", div: '1.6'},
            {ext:"615", div: '2.1'},
            {ext:"616", div: '2.2'},
            {ext:"617", div: '2.3'},
            {ext:"618", div: '2.4'},
            {ext:"619", div: '2.5'},
            {ext:"620", div: '2.6'},
            {ext:"621", div: '3.1'},
            {ext:"622", div: '3.2'},
            {ext:"623", div: '3.3'},
            {ext:"624", div: '3.4'},
            {ext:"625", div: '3.5'},
            {ext:"626", div: '3.6'},
            {ext:"627", div: '4.1'},
            {ext:"628", div: '4.2'},
            {ext:"629", div: '4.3'},
            {ext:"630", div: '4.4'},
            {ext:"601", div: '4.5'},
            {ext:"602", div: '4.6'},
            {ext:"000", div: '5.1'},
            {ext:"694", div: '5.2'},
            {ext:"697", div: '5.3'},
            {ext:"695", div: '5.4'},
            {ext:"693", div: '5.5'},
            {ext:"692", div: '5.6'},
            {ext:"631", div: '6.1'},
            {ext:"632", div: '6.2'},
            {ext:"603", div: '6.3'},
            {ext:"902", div: '6.4'},
            {ext:"633", div: '6.5'},
            {ext:"604", div: '6.6'},
            {ext:"605", div: '7.1'},
            {ext:"689", div: '7.2'},
            {ext:"688", div: '7.3'},
            {ext:"687", div: '7.4'},
            {ext:"686", div: '7.5'},
            {ext:"726", div: '7.6'},
            {ext:"752", div: '8.1'},
            {ext:"733", div: '8.2'},
            {ext:"734", div: '8.3'},
            {ext:"754", div: '8.4'},
            {ext:"724", div: '8.5'},
            {ext:"741", div: '8.6'},
            {ext:"731", div: '9.1'},
            {ext:"732", div: '9.2'},
            {ext:"751", div: '9.3'},
            {ext:"720", div: '9.4'},
            {ext:"755", div: '9.5'},
            {ext:"742", div: '9.6'},
            {ext:"739", div: '10.1'},
            {ext:"750", div: '10.2'},
            {ext:"753", div: '10.3'},
            {ext:"743", div: '10.4'},
            {ext:"779", div: '10.5'},
            {ext:"699", div: '10.6'},
            {ext:"696", div: '11.1'},
            {ext:"685", div: '11.2'},
            {ext:"735", div: '11.3'},
            {ext:"736", div: '11.4'},
            {ext:"737", div: '11.5'},
            {ext:"738", div: '11.6'},
            {ext:"903", div: '12.1'},
            {ext:"904", div: '12.2'},
            {ext:"905", div: '12.3'},
            {ext:"906", div: '12.4'},
            {ext:"907", div: '12.5'},
            {ext:"012", div: '12.6'},
            {ext:"990", div: '13.1'},
            {ext:"744", div: '13.2'},
            {ext:"908", div: '13.3'},
            {ext:"909", div: '13.4'},
            {ext:"920", div: '13.5'},
            {ext:"921", div: '13.6'},
            {ext:"310", div: '14.1'},
            {ext:"343", div: '14.2'},
            {ext:"375", div: '14.3'},
            {ext:"376", div: '14.4'},
            {ext:"377", div: '14.5'},
            {ext:"378", div: '14.6'},
            {ext:"379", div: '15.1'},
            {ext:"381", div: '15.2'},
            {ext:"382", div: '15.3'},
            {ext:"922", div: '15.4'},
            {ext:"383", div: '15.5'},
            {ext:"923", div: '15.6'},
            {ext:"924", div: '16.1'},
            {ext:"336", div: '16.2'},
            {ext:"925", div: '16.3'},
            {ext:"327", div: '16.4'},
            {ext:"384", div: '16.5'},
            {ext:"780", div: '16.6'},
            {ext:"781", div: '17.1'},
            {ext:"782", div: '17.2'},
            {ext:"783", div: '17.3'},
            {ext:"784", div: '17.4'},
            {ext:"785", div: '17.5'},
            {ext:"786", div: '17.6'},
            {ext:"787", div: '18.1'},
            {ext:"788", div: '18.2'},
            {ext:"790", div: '18.3'},
            {ext:"926", div: '18.4'},
            {ext:"681", div: '18.5'},
            {ext:"682", div: '18.6'},
            {ext:"683", div: '19.1'},
            {ext:"684", div: '19.2'},
            {ext:"927", div: '19.3'},
            {ext:"725", div: '19.4'}
];

var sysTime = moment().format();

var divCell;
var divColorId;
var changeStatus;

function updateTime(){
    var changeStatus;
    var now = moment(new Date()); //todays date
    $( "#ringing" ).effect( "shake", {direction: "left",times: 6, distance: 5},700);
    for (var i = 0; i < mapa.length; i++) {
        divCell = mapa[i].div;
        divColorId = mapa[i].ext;
        var tableCell= document.getElementById(divCell );
        var  divID = document.getElementById(divColorId);
        var busyFrom = divID.querySelector('.cTime');
        if(tableCell){
            if(busyFrom){
                changeStatus = busyFrom.textContent.slice(8,41)
            }
            var end = moment(changeStatus);
            var image = tableCell.querySelector('img');
            var timePar = tableCell.querySelector('p');
            if(image){
                var duration = moment.duration(now.diff(end)). _milliseconds; //roznica w milisekundach
                timeCalc = moment.utc(duration).format('HH:mm:ss');
                timePar.innerHTML = timeCalc;
            }
        else{
            timePar.innerHTML = "";
            }
        }
    }
};

function myFunction() {

    for (var i = 0; i < mapa.length; i++) {
         divCell = mapa[i].div;
         divColorId = mapa[i].ext;
         var divID = document.getElementById(divColorId);
        var tableCell= document.getElementById(divCell );
        if(tableCell){
            var nameUser  = divID.querySelector('h3');
            var userNumber = divID.querySelector('h2')
            var image = divID.querySelector('img');
            var busyFrom = divID.querySelector('.cTime');
            if(busyFrom){
               changeStatus = busyFrom.textContent.slice(8,41)
            }
            var x = divID.querySelector('.diffTimeCalc');
            tableCell.append(userNumber);
            color = divID.getAttribute('class') ;
            tableCell.append(nameUser);
            if(image){
                tableCell.append(x);
                tableCell.append(image);
            }
            tableCell.className = color;
        }
    }
}

function refresh() {
    myFunction();
        setTimeout(function () {
            location.reload();
        },6000);
};
refresh();
setInterval(updateTime,1000);
updateTime();
});
