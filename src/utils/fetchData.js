export async function fetchMusicToBeAnnotated() {
    const res = await fetch(`./music/next-annotation`, {
        credentials: 'include',
    });

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    // console.log('music data', data);
    return data;
}

export async function fetchUserStats() {
    const res = await fetch(`./user/stats`, {
        credentials: 'include',
    });

    if (!res.ok) console.log(await res.text());
    else var data = await res.json();
    // console.log('user data', data);
    return data;
}
