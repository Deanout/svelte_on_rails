<script>
  import { onMount } from "svelte";

  export let target;

  onMount(() => {
    if (target == undefined) {
      target = "It was undefined, yo";
    }
  });
</script>

<h1 class="italic text-blue-700">Hello {target}!</h1>
