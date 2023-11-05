<script lang="ts">
    import Button from "$lib/Buttons/Button.svelte";
    import type { Section } from "$lib/Data/section";
    import type { User } from "$lib/Data/user";
    import Plus from "~icons/ph/Plus";

    export let section: Section,
        active_user: User | undefined = undefined;
</script>

<header>
    <div>
        <h1>{section.title}</h1>
        <p>{section.desc}</p>
    </div>

    {#if active_user}
        <Button kind="a" href="/section/{section.id}/new/thread/">
            <Plus /> New Thread
        </Button>
    {/if}
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 3rem 0;
    }

    h1 {
        margin: 0;
        
        & + p {
            margin: 0;
            margin-top: 0.5rem;
        }
    }
</style>
