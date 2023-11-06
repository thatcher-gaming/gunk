<ul>
    <li>admin yes!</li>
    <li><a href="/admin/users">users</a></li>
    <li><a href="/admin/log">audit log</a></li>
    <li><a href="/admin/sections">sections</a></li>
    <li><a href="/admin/emotes">emotes etc.</a></li>
    <li><a href="/admin/housekeeping">housekeeping</a></li>
    <li><a href="/admin/meta">meta</a></li>
    <li><a href="/admin/about">status & about</a></li>
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 4rem 0;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    li,
    a {
        color: var(--colour-grey-700);
        text-decoration: none;
        font-size: 4rem;
        font-weight: 900;
        line-height: 1;
        font-variation-settings: "VOLM" 100, "FLAR" 100, "slnt" 0;
        user-select: none;

        transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    a:hover {
        color: black;
        font-variation-settings: "VOLM" 100, "FLAR" 100, "slnt" -15;
    }
</style>
