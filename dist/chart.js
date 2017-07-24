 $(document).ready(function () {

        // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
        $('#noti_Counter')
            .css({ opacity: 0 })
                   // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
            .css({ top: '25px' })
            .animate({ top: '25px', opacity: 1 }, 500);

        $('#noti_Button').click(function () {

            // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
            $('#notifications').fadeToggle('fast', 'linear', function () {
                if ($('#notifications').is(':hidden')) {
                    $('#noti_Button').css('background-color', '#');
                }
        
                else $('#noti_Button').css('background-color', '#');        // CHANGE BACKGROUND COLOR OF THE BUTTON.
            }); 

            $('#noti_Counter').fadeOut('slow');                 // HIDE THE COUNTER.

            return false;
        });

        // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
        $(document).click(function () {
            $('#notifications').hide();

            // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
            if ($('#noti_Counter').is(':hidden')) {
                // CHANGE BACKGROUND COLOR OF THE BUTTON.
                $('#noti_Button').css('background-color', '#');
            }
        });

        $('#notifications').click(function () {
            return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
        });
    });





var ctx = document.getElementById("myLineChart").getContext('2d');
var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
                labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
                datasets: [{
                        label: '# of Votes',
                        data: [550, 1050, 900, 1500, 2000, 1500, 1800, 1110,1160,2050,2200],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                }]
        },
        options: {
                scales: {
                        yAxes: [{
                                ticks: {
                                        beginAtZero: true
                                }
                        }]
                }
        }
});
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
                labels: ["S", "M", "W", "T", "F", "S"],
                datasets: [{
                        label: '# of Votes',
                        data: [100, 40, 250, 150, 160, 100, 60],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                }]
        },
        options: {
                scales: {
                        yAxes: [{
                                ticks: {
                                        beginAtZero: true
                                }
                        }]
                }
        }
});

var ctx= document.getElementById('myDoughnutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        
        datasets: [{
                label: "TeamB Score",
                data: [50,20,30],
                backgroundColor: [
                    "#FAEBD7",
                    "#DCDCDC",
                    "#E9967A",
                    "#F5DEB3",
                    "#9ACD32"
                ],
                borderColor: [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21"
                ],
                borderWidth: [1, 1, 1, 1, 1]
        
                }]
        },
  
    options: {   

        responsive: false,
        
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            },
        }

});

   