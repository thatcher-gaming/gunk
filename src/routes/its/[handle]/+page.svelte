<script lang="ts">
    export let data;
    const { user } = data;
</script>

<svelte:head>
    <title>@{data.user?.handle} – ttc</title>
</svelte:head>

<h1>@{user?.handle}</h1>
