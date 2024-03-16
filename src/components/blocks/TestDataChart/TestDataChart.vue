<template>
  <div class="test-data-chart">
    <canvas id="test-chart" class="test-data-chart__canvas"></canvas>
    <ul class="test-data-chart__info">
      <li class="test-data-chart__item test-data-chart__item--blue">
        <span class="test-data-chart__font test-data-chart__font--text">35% -  Agile Development</span>
      </li>
      <li class="test-data-chart__item test-data-chart__item--green">
        <span class="test-data-chart__font test-data-chart__font--text">30% -  Investor bandwidth</span>
      </li>
      <li class="test-data-chart__item test-data-chart__item--gray">
        <span class="test-data-chart__font test-data-chart__font--text">35% -  A/B testing </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: "TestDataChart",
  data() {
    return {
      chartData: {
        weight: 1,
        datasets: [{
          data: [300, 100, 150],
          backgroundColor: [
            '#0DBBFC',
            '#69E6A6',
            '#D0C9D6'
          ],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      instance: null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.instance = new Chart(document.getElementById('test-chart'), {
        type: 'doughnut',
        data: this.chartData,
        options: {
          cutout: 55,
        }
      });
    })
  }
}
</script>

<style scoped lang="scss" src="./test-data-chart.scss"></style>