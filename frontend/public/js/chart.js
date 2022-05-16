
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const options = {
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            }
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
    },
    responsive: true,
    maintainAspectRatio: false
}

const data_1 = {
    labels: labels,
    datasets: [
        {
            label: 'rPSH',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 10, 5, 2, 20, 30, 45],
        }
    ]
};

const data_2 = {
    labels: labels,
    datasets: [
        {
            label: 'rKYJ',
            backgroundColor: 'rgb(99, 131, 255)',
            borderColor: 'rgb(99, 131, 255)',
            data: [5, 15, 10, 20, 10, 40, 40],
        }
    ]
};

const data_3 = {
    labels: labels,
    datasets: [
        {
            label: 'rABC',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 30, 15, 30, 15, 35, 20],
        }
    ]
};

const data_4 = {
    labels: labels,
    datasets: [
        {
            label: 'rDEF',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [40, 30, 35, 20, 10, 5, 9],
        }
    ]
};

const data_5 = {
    labels: labels,
    datasets: [
        {
            label: 'rGHI',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [30, 0, 40, 10, 5, 25, 15],
        }
    ]
};

const config_1 = {
    type: 'line',
    data: data_1,
    options: options
};

const config_2 = {
    type: 'line',
    data: data_2,
    options: options
};

const config_3 = {
    type: 'line',
    data: data_3,
    options: options
};

const config_4 = {
    type: 'line',
    data: data_4,
    options: options
};

const config_5 = {
    type: 'line',
    data: data_5,
    options: options
};

const chart_1 = new Chart(
    document.getElementById('chart-1'),
    config_1
);

const chart_2 = new Chart(
    document.getElementById('chart-2'),
    config_2
);

const chart_3 = new Chart(
    document.getElementById('chart-3'),
    config_3
);

const chart_4 = new Chart(
    document.getElementById('chart-4'),
    config_4
);

const chart_5 = new Chart(
    document.getElementById('chart-5'),
    config_5
);

const chart_my = new Chart(
    document.getElementById('chart-my'),
    config_5
);