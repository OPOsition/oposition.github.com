<script>
  import { firebaseHelper, smoke2020Key } from './firebase/helper';
  import appStates from './utils/appStates';
  import { formatDate } from './utils/formatDate';
  import './index.css';
  import Waiting from './components/Smoke/Waiting.svelte';
  import AnswerForm from './components/Smoke/AnswerForm.svelte';
  import ShowData from './components/Smoke/ShowData.svelte';
  import EditLastData from './components/Smoke/EditLastData.svelte';

  let smokeData;
  let state = appStates.WAITING;

  const todayId = formatDate(new Date());
  const { onValue } = firebaseHelper(`/${smoke2020Key}`);

  onValue((data) => {
    smokeData = data;

    state = data
      ? data[todayId] === undefined
        ? appStates.NEED_ANSWER
        : appStates.ANSWERED
      : appStates.NEED_ANSWER;
  });
</script>

<main>
  {#if state === appStates.WAITING}
    <Waiting />
  {:else if state === appStates.ANSWERED}
    <EditLastData {todayId} />
    <ShowData data={smokeData} />
  {:else if state === appStates.NEED_ANSWER}
    <AnswerForm {todayId} />
  {:else}
    <p>An error was encountred.</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
