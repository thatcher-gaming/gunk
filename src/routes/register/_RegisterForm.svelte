<script>
    import Button from "$lib/Buttons/Button.svelte";
    import FormInput from "$lib/Forms/FormInput.svelte";
</script>

<form method="post">
    <FormInput label="Username">
        <input type="text" placeholder="the_grungler" />
    </FormInput>
    <FormInput label="Email">
        <input type="email" placeholder="me@gmail.gov" />
    </FormInput>
    <FormInput
        label="Password"
        flavour_text="at least 8 characters, if you don't mind"
    >
        <input type="password" placeholder="•••••••••••••••••" />
    </FormInput>

    <Button type="submit">go crazy aaahh!!!!</Button>
</form>

<style>
    form {
        margin: 1.5rem 0;
    }
</style>
