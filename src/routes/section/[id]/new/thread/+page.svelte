<script>
    import Button from "$lib/Buttons/Button.svelte";
    import FormField from "$lib/Forms/FormField.svelte";
</script>

<h1>new thread</h1>

<form method="post">
    <b style="color: red;">TODO: make this usable/look less like shit</b>
    <FormField label="title">
        <input name="title" />
    </FormField>
    <FormField label="content">
        <textarea name="content" />
    </FormField>

    <Button>go wacky</Button>
</form>
