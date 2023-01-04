<script>
  let count = 0;
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl font-bold text-blue-700">Counter</h1>
  <button
    on:click={() => (count += 1)}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Clicked {count} time{count === 1 ? "" : "s"}!
  </button>
</div>
