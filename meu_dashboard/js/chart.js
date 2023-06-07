
const ctx = document.getElementById('grafico').getContext('2d');

    fetch('/api/rendimento')
      .then(response => response.json())
      .then(data => {
        const meses = data.meses;
        const rendimento = data.rendimento;

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: meses,
            datasets: [{
              label: 'Rendimento Mensal',
              data: rendimento,
              borderColor: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Rendimento (R$)'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Mês'
                }
              }
            }
          }
        });
      });
