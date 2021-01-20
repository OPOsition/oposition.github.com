<script>
  import { weekDays } from '../../utils/formatDate';
  import { formatData } from '../../utils/showData';

  export let data;

  $: weeksDays = formatData(data);
</script>

<h1>Smoked by day</h1>
<div class="container">
  {#each weeksDays.reverse() as week, i}
    <h2>
      Week {week[0].weekId}
      <span class="h2-date">{week[0].date.toLocaleDateString()}</span>
    </h2>
    <div class="week-container">
      {#each week as day}
        <div class="data-container" class:new-week-space={day.isNewWeek}>
          <div class="day">
            <p>{weekDays[day.date.getDay()]}</p>
          </div>
          <div class="smoked" class:yes={!day.smoked} class:no={day.smoked}>
            {day.smoked ? 'OUI' : 'NON'}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    margin-top: 16px;
    flex-direction: column;
  }

  .h2-date {
    font-size: 16px;
    font-weight: normal;
  }

  .week-container {
    display: flex;
    margin-bottom: 32px;
  }

  h2 {
    text-align: start;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    border: 2px solid #34495e;
    border-radius: 2px;
    min-width: 128px;
    margin: 2px;
  }

  .new-week-space {
    margin-left: 16px;
  }

  .smoked {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }

  .day {
    margin: 8px;
  }

  .no {
    background-color: #c0392b;
  }

  .yes {
    background-color: #27ae60;
  }
</style>
