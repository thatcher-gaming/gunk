<script>
    import Button from "$lib/Buttons/Button.svelte";
    import FormInput from "$lib/Forms/FormField.svelte";
</script>

<form method="post">
    <FormInput label="Username">
        <input name="username" type="text" placeholder="the_grungler" />
    </FormInput>
    <FormInput label="Email">
        <input name="email" type="email" placeholder="me@gmail.gov" />
    </FormInput>
    <FormInput
        label="Password"
        flavour_text="at least 8 characters, if you don't mind"
    >
        <input
            name="password"
            type="password"
            placeholder="•••••••••••••••••"
        />
    </FormInput>

    <Button type="submit">go crazy aaahh!!!!</Button>
</form>

<style>
    form {
        margin: 1.5rem 0;
    }
</style>
