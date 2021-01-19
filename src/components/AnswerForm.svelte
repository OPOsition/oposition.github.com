<script>
  export let todayId;
  import { firebaseHelper, smoke2020Key } from '../firebase/helper';

  const { editValue } = firebaseHelper(`/${smoke2020Key}/${todayId}`);
  const onAnswer = (answer) => () => {
    editValue(answer);
  };
</script>

<h1>Did you smoke Today ?</h1>
<div>
  <button on:click={onAnswer(false)} class="no">NO</button>
  <button on:click={onAnswer(true)} class="yes">YES</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }

  button {
    width: 100px;
    height: 100px;
    margin: 16px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.4),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0px 12px 2px -1px rgba(0, 0, 0, 0.4),
      0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  button:active {
    position: relative;
    top: 12px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.4),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  .no,
  .no:active {
    background-color: #c0392b;
  }

  .yes,
  .yes:active {
    background-color: #27ae60;
  }
</style>
