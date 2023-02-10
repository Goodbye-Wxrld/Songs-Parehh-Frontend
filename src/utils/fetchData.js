export async function fetchMusicToBeAnnotated() {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/music/next-annotation`,
        {
            credentials: 'include',
        }
    );

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    return data;
}

export async function fetchUserStats() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/stats`, {
        credentials: 'include',
    });

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    return data;
}
