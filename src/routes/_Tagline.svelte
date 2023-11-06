<div>
    <span class="tagline"><slot /></span>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        max-width: max-content;
        margin: 3rem auto 1rem auto;
    }

    span.tagline {
        padding: 0.25rem 0.75rem;

        font-weight: 900;
        font-size: 2.5rem;
        font-stretch: 25%;

        font-variation-settings: 'FLAR' 100;
    }
</style>
