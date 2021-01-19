<script>
  import { formatDate, weekDays } from '../utils/formatDate';

  export let data;

  function formatData(d) {
    const keys = Object.keys(d);
    const result = [];
    keys.map((key) => {
      const date = new Date(key);
      var u = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
      var dayNum = u.getUTCDay() || 7;
      u.setUTCDate(u.getUTCDate() + 4 - dayNum);
      var yearStart = new Date(Date.UTC(u.getUTCFullYear(), 0, 1));
      const weekNumber = Math.ceil(((u - yearStart) / 86400000 + 1) / 7);

      if (!result[weekNumber]) result[weekNumber] = [];

      result[weekNumber].push({
        date: date,
        smoked: d[key],
        dateKey: key,
        weekId: weekNumber,
      });
    });
    const filtredResult = result.filter((r) => Boolean(r));
    return filtredResult;
  }

  $: weeksDays = formatData(data);
  $: console.log(weeksDays);
</script>

<h1>Smoked by day</h1>
<div class="container">
  {#each weeksDays.reverse() as week, i}
    <h2>Week {week[0].weekId}</h2>
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
