<script>
    import Button from "$lib/Buttons/Button.svelte";
    import FormField from "$lib/Forms/FormField.svelte";

    export let form;
</script>

<h1>make a section :3</h1>

{#if form?.error}
    <p class="errorbox" role="alert">{form?.error}</p>
{/if}

<form method="post">
    <FormField label="Name">
        <input type="text" name="title" />
    </FormField>
    <FormField label="Description">
        <input type="text" name="desc" />
    </FormField>
    <FormField
        label="Icon"
        flavour_text="an emoji or whatever else fits into 4 characters"
    >
        <input type="text" maxlength="4" name="icon" />
    </FormField>
    <Button>make it</Button>
</form>
