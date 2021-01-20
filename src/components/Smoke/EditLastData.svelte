<script>
  import { firebaseHelper, smoke2020Key } from '../../firebase/helper';

  export let todayId;

  const { deleteValue } = firebaseHelper(`/${smoke2020Key}/${todayId}`);
  const handleEdit = () => {
    deleteValue();
  };
</script>

<div>
  <button on:click={handleEdit}>Edit</button>
</div>

<style>
  div {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  button {
    cursor: pointer;
    background-color: var(--bg-color);
    border-color: #d5d5d5;
    color: #d5d5d5;
  }
</style>
