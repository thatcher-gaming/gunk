<script lang="ts">
    import type { PostData } from "$lib/Data/post";
    import type { ThreadData } from "$lib/Data/thread";

    export let thread: ThreadData, post: PostData & { handle: string };
    const { section_id, id, title } = thread;
    const { handle, content } = post;
</script>

<article>
    <a href="/section/{section_id}/thread/{id}" class="thread">
        <h4>{title}</h4>
    </a>
    <main>
        <span><b>@{handle}</b> - posted at a time</span>
        <p>
            {content}
        </p>
    </main>
    <div class="fade" />
</article>

<style>
    article {
        position: relative;
        display: flex;
        flex-direction: column;
        max-height: 12rem;

        outline: 1px solid var(--colour-grey-200);
        border-radius: 8px;
        overflow: hidden;

        & h4 {
            margin: 0;
            padding: 0.75rem 0.75rem;

            color: var(--colour-grey-700);
            font-size: 0.9rem;
        }

        & main {
            max-height: 100%;
            margin: 0;
            padding: 0.5rem 0.75rem;
            overflow: hidden;

            text-overflow: ellipsis;
            font-size: 0.85rem;
        }

        & p {
            margin-top: 0.25rem;
            line-height: 1.4;
        }

        & .fade {
            position: absolute;
            bottom: 0;
            height: 4rem;
            width: 100%;
            background: linear-gradient(
                to bottom,
                transparent,
                white 85%
            );
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    a.thread {
        background-color: var(--colour-grey-50);
        border-bottom: 1px solid var(--colour-grey-200);

        &:hover {
            background-color: var(--colour-grey-100);
        }
    }
</style>
