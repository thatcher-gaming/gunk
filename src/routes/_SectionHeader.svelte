<script lang="ts">
    import type { SectionData } from "$lib/Data/section";

    export let section: SectionData;
    const { title, desc, icon, id } = section;
</script>

<header>
    <span class="icon" aria-hidden>{icon}</span>
    <a href="/section/{id}">
        <h3>{title}</h3>
    </a>
    <p>{desc}</p>
</header>

<style>
    header {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;

        margin-right: 1rem;

        text-align: right;

        & .icon {
            display: grid;
            place-items: center;

            width: 2.5rem;
            aspect-ratio: 1 / 1;
            margin-bottom: 0.75rem;

            line-height: 1;
            font-size: 1.25rem;

            background-color: var(--colour-primary-100);
            border-radius: 12px;

            user-select: none;
        }

        & h3 {
            font-size: 1.75rem;
            font-weight: 900;
            margin: 0;
        }

        & p {
            font-size: 0.95rem;
            margin-top: 0.4rem;
        }
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
