export async function fetchMusicToBeAnnotated() {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/music/next-annotation`,
        {
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': true,
            },
        }
    );

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    // console.log('music data', data);
    return data;
}

export async function fetchUserStats() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/stats`, {
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Credentials': true,
        },
    });

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    // console.log('user data', data);
    return data;
}
