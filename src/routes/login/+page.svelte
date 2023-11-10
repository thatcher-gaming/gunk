<script lang="ts">
    import Button from "$lib/Buttons/Button.svelte";
    import FormField from "$lib/Forms/FormField.svelte";
</script>

<h1>log in</h1>
<form method="post">
    <FormField label="Username">
        <input type="text" name="handle" />
    </FormField>
    <FormField label="Password">
        <input type="password" name="password" />
    </FormField>
    <Button>log me the fuck in babey!!!!!!</Button>
</form>
