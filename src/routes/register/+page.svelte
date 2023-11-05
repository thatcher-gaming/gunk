<script>
    import OauthButtons from "./_OauthButtons.svelte";
    import RegisterForm from "./_RegisterForm.svelte";

    export let form;
</script>

<p>oh hey</p>
<h1>let's register<em>!</em></h1>

<p>
    before you sign up, look upon (and agree to) our
    <a href="/privacy">privacy policy</a> and
    <a href="/terms">terms of use</a>, ye mighty, and dispair.
</p>

<main>
    <section>
        <h2>speedrun: use these cool buttons</h2>

        <OauthButtons />
    </section>

    <section>
        <h2>or… don't</h2>

        {#if form?.error}
            <p role="alert" class="error">{form?.error}</p>
        {/if}

        <RegisterForm />
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        margin: 2rem 0;
    }

    section:last-of-type {
        border-left: 1px dashed var(--colour-grey-400);
        padding-left: 2rem;
    }

    h1 {
        line-height: 1.2;
        margin-top: .25rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        font-variation-settings: 'FLAR' 100;
    }
</style>
